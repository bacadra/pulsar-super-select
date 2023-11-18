'use babel'

import { CompositeDisposable, Point } from 'atom'

export default {

  activate () {
    this.disposables = new CompositeDisposable()
    this.disposables.add(atom.commands.add('atom-text-editor', {
      'super-select:chars-1' : (e) => this.selectMany(e, this.byChar, '[0-9\\p{L}_\\.]'),
      'super-select:chars-1+': (e) => this.selectMany(e, this.byChar, '[0-9\\p{L}_\\.\\[\\]]'),
      'super-select:chars-2' : (e) => this.selectMany(e, this.byChar, '[0-9\\p{L}_\\.-]'),
      'super-select:chars-3' : (e) => this.selectMany(e, this.byChar, '[0-9\\p{L}\\\\]'),
      'super-select:chars-4' : (e) => this.selectMany(e, this.byChar, '[0-9a-zA-Z_\\[\\]#]'),

      'super-select:string'          : (e) => this.selectMany(e, this.string, /("""|'''|"|'|`)/),
      "super-select:string-'-'"      : (e) => this.selectMany(e, this.string, '("""|")'),
      "super-select:string-'''-'''"  : (e) => this.selectMany(e, this.string, '"""'),
      'super-select:string-"-"'      : (e) => this.selectMany(e, this.string, "('''|')"),
      'super-select:string-"""-"""'  : (e) => this.selectMany(e, this.string, "'''"),
      'super-select:string-`-`'      : (e) => this.selectMany(e, this.string, "`"),
      'super-select:brackets'        : (e) => this.selectMany(e, this.brackets, ['()', '[]', '{}', '<>']),
      'super-select:brackets-(-)'    : (e) => this.selectMany(e, this.brackets, ['()']),
      'super-select:brackets-[-]'    : (e) => this.selectMany(e, this.brackets, ['[]']),
      'super-select:brackets-{-}'    : (e) => this.selectMany(e, this.brackets, ['{}']),
      'super-select:brackets-<->'    : (e) => this.selectMany(e, this.brackets, ['<>']),
      'super-select:normalize'       : (e) => this.slasher(e, ),
      'super-select:double-backslash': (e) => this.slasher(e, 1),
      'super-select:backslash'       : (e) => this.slasher(e, 2),
      'super-select:forward-slash'   : (e) => this.slasher(e, 3),
      'super-select:html-body'       : (e) => this.selectMany(e, this.htmlBody.bind(this)),
      'super-select:html-tags'       : (e) => this.selectMany(e, this.htmlTags.bind(this)),
    }))

  },

  deactivate () {
    this.disposables.dispose()
  },

  getActiveTextEditor(e) {
    const element = e.target.closest('atom-text-editor')
    if (!element) { return }
    const editor = element.getModel()
    if (!editor) { return }
    return editor
  },

  selectMany(e, func, symbols) {
    let editor = this.getActiveTextEditor(e)
    if (!editor) { return }
    let cursors = editor.getCursors()
    for (let cursor of cursors) {
      func(editor, cursor, symbols)
    }
  },

  byChar(editor, cursor, symbols) {
    let iA=null, iB=null
    let re = new RegExp(symbols, 'u')
    let curPos   = cursor.getBufferPosition()
    let lineText = editor.lineTextForBufferRow(curPos.row)
    for (var i = Math.max(0, curPos.column-1); i>=0; i--) {
      if (!lineText.charAt(i).match(re)) {
        iA = i + 1
        break
      } else if (i===0) {
        iA = 0
        break
      }
    }
    if (iA===null) { return }
    for (var i = curPos.column; i<=lineText.length; i++) {
      if (!lineText.charAt(i).match(re) || i===lineText.length) {
        iB = i
        break
      }
    }
    if (iB===null) { return }
    cursor.setBufferPosition([curPos.row, iA])
    cursor.selection.selectToBufferPosition([curPos.row, iB])
  },

  string(editor, cursor, symbols) {
    let pointA, pointB, symbol, curPos
    curPos = cursor.getBufferPosition()
    editor.backwardsScanInBufferRange(symbols, [Point.ZERO, curPos], ( obj ) => {
      pointA = obj.range.end;
      symbol = obj.matchText;
      obj.stop()
    })
    if (!pointA) { return }
    editor.scanInBufferRange(symbol, [pointA, Point.INFINITY], ( obj ) => {
      pointB  = obj.range.start;
      obj.stop()
    })
    if (!pointB) { return }
    cursor.setBufferPosition(pointA)
    cursor.selection.selectToBufferPosition(pointB)
  },

  brackets(editor, cursor, symbols) {
    let pointA, pointB, symbolA, symbolB, count, curPos, re
    count = symbols.reduce((a,b)=> (a[b]=0 , a), {})
    curPos = cursor.getBufferPosition()
    re = new RegExp('['+Object.keys(count).map(function(key){return `\\${key[0]}\\${key[1]}`}).join("")+']', 'g')
    editor.backwardsScanInBufferRange(re, [Point.ZERO, curPos], ( obj ) => {
      for (let key in count) {
        if (obj.matchText===key[0]) {
          if (count[key]===0) {
            pointA = obj.range.end;
            symbolA = key[0]; symbolB = key[1];
            obj.stop()
          }
          count[key] ++
          break;
        } else if (obj.matchText===key[1]) {
          count[key] --
          break;
        }
      }
    })
    if (!pointA) { return }
    count = 0
    editor.scanInBufferRange(new RegExp(`(\\${symbolA}|\\${symbolB})`, 'g'), [pointA, Point.INFINITY], ( obj ) => {
      if (obj.matchText===symbolA) {
        count = count+1
      } else if (count===0) {
        pointB  = obj.range.start;
        symbolB = obj.matchText;
        obj.stop()
      } else if (obj.matchText===symbolB) {
        count = count-1
      }
    })
    if (!pointB) { return }
    cursor.setBufferPosition(pointA)
    cursor.selection.selectToBufferPosition(pointB)
  },

  slasher(e, mode) {
    let editor = this.getActiveTextEditor(e)
    if (!editor) { return }
    let selections = editor.getSelections()
    let range, curPos, text, modes
    for (let selection of selections) {
      range = selection.getBufferRange()
      curPos = selection.cursor.getBufferPosition()
      if (range.isEmpty()) { return }
      text = selection.getText()
      if (!mode) {
        modes = [0]
        editor.scanInBufferRange(/(\\\\|\\|\/)/, range, (obj)=>{
          if (obj.matchText==='\\\\') {
            modes[0]=1;
          } else if (obj.matchText==='\\') {
            modes[0]=2;
          } else if (obj.matchText==='\/') {
            modes[0]=3;
          }
          obj.stop()
        })
        mode = modes[0]
      }
      if (mode===1) {
        text = text.replace(/(\/+|\\+)/g, '\\\\')
      } else if (mode===2) {
        text = text.replace(/(\\+|\/+)/g, '\\')
      } else if (mode===3) {
        text = text.replace(/(\\+)/g, '\/')
      } else {
        selection.cursor.setBufferPosition(curPos)
        break
      }
      selection.insertText(text, {select:true})
    }
  },

  htmlFind(editor, cursor, func) {
    let count = 0
    let type
    editor.backwardsScanInBufferRange(/< *\/(\w+)|< *(\w*).*>/g, [Point.ZERO, cursor.getCurrentWordBufferRange().end], ( objStart ) => {
      if (objStart.match[1]) {
        count++
      } else if (count===0) {
        objStart.stop()
        type = objStart.match[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        editor.scanInBufferRange(new RegExp('< *('+type+')|< *\\/ *'+type+'>', 'g'), [objStart.range.end, Point.INFINITY], (objEnd) => {
          if (objEnd.match[1]) {
            count++
          } else if (count===0) {
            func(objStart, objEnd)
            objEnd.stop()
          } else {
            count --
          }
        })
      } else {
        count--
      }
    })
  },

  htmlBody(editor, cursor) {
    this.htmlFind(editor, cursor, (objStart, objEnd) => {
      cursor.setBufferPosition(objStart.range.start)
      cursor.selection.selectToBufferPosition(objEnd.range.end)
    })
  },

  htmlTags(editor, cursor) {
    this.htmlFind(editor, cursor, (objStart, objEnd) => {
      cursor.setBufferPosition(objStart.range.start)
      cursor.selection.selectToBufferPosition(objStart.range.end)
      editor.addSelectionForBufferRange(objEnd.range)
    })
  },
}
