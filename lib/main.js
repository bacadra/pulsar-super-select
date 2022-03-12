'use babel'

import { CompositeDisposable, Point } from 'atom'

export default {

  config: {
  },

  activate () {
    this.disposables = new CompositeDisposable()

    this.disposables.add(atom.commands.add('atom-text-editor:not([mini])', {
      'super-select:string'          : () => this.selectMany(this.select1, /("""|'''|"|'|`)/),
      "super-select:string-'-'"      : () => this.selectMany(this.select1, '("""|")'),
      "super-select:string-'''-'''"  : () => this.selectMany(this.select1, '"""'),
      'super-select:string-"-"'      : () => this.selectMany(this.select1, "('''|')"),
      'super-select:string-"""-"""'  : () => this.selectMany(this.select1, "'''"),
      'super-select:string-`-`'      : () => this.selectMany(this.select1, "`"),

      'super-select:brackets'        : () => this.selectMany(this.select2, ['()', '[]', '{}', '<>']),
      'super-select:brackets-(-)'    : () => this.selectMany(this.select2, ['()']),
      'super-select:brackets-[-]'    : () => this.selectMany(this.select2, ['[]']),
      'super-select:brackets-{-}'    : () => this.selectMany(this.select2, ['{}']),
      'super-select:brackets-<->'    : () => this.selectMany(this.select2, ['<>']),

      'super-select:normalize'       : () => this.toggleSlash(),
      'super-select:double-backslash': () => this.toggleSlash(1),
      'super-select:backslash'       : () => this.toggleSlash(2),
      'super-select:forward-slash'   : () => this.toggleSlash(3),
    }))

  },


  deactivate () {
    this.disposables.dispose()
  },


  selectMany(func, symbols) {
    editor = atom.workspace.getActiveTextEditor()
    cursors = editor.getCursors()
    for (cursor of cursors) {
      func(editor, cursor, symbols)
    }
  },


  select1(editor, cursor, symbols) {
    let pointA, pointB, symbol

    curPos = cursor.getBufferPosition()

    editor.backwardsScanInBufferRange(symbols, [Point.ZERO, curPos], ( obj ) => {
      pointA = obj.range.end;
      symbol = obj.matchText;
      obj.stop()
    })

    if (!pointA) { return }

    editor.scanInBufferRange(symbol, [pointA, Point.INFINITY], ( obj ) => {
      pointB  = obj.range.start;
      symbolB = obj.matchText;
      obj.stop()
    })

    if (!pointB) { return }

    cursor.setBufferPosition(pointA)
    cursor.selection.selectToBufferPosition(pointB)
  },


  select2(editor, cursor, symbols) {
    let pointA, pointB, symbolA, symbolB
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


  toggleSlash(mode) {
    editor = atom.workspace.getActiveTextEditor()
    selections = editor.getSelections()

    for (selection of selections) {
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

}
