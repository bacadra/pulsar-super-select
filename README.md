# super-select

An additional methods of text selection & slash normalization.

## Installation

To install `super-select` search for [super-select](https://web.pulsar-edit.dev/packages/super-select) in the Install pane of the Pulsar settings or run `ppm install super-select`. Alternatively, you can run `ppm install bacadra/pulsar-super-select` to install a package directly from the Github repository.

## Search

The search begins at the cursor position to the left. When a matching character is found, then it searches for the closing character to the right of the cursor.

## Commands

In `atom-text-editor` there are available commands:

- `super-select:chars-1`: select text by chars `/[0-9\\p{L}_\\.]/`
- `super-select:chars-2`: select text by chars `/[0-9\\p{L}_\\.\\-\\[\\]\\(\\)#]/`
- `super-select:string`: (default `Alt-S`) select text inside `'''`, `"""`, `'` or `"`
- `super-select:string-'-'`: select text inside`'''` or `'`
- `super-select:string-'''-'''`: select text inside `'''`
- `super-select:string-"-"`: select text inside `"""` or `"`
- `super-select:string-"""-"""`: select text inside `"""`
- `super-select:brackets`: (default `Alt-D`) select text inside `()`, `[]`, `{}` or `<>`
- `super-select:brackets-(-)`: select text inside `()`
- `super-select:brackets-[-]`: select text inside `[]`
- `super-select:brackets-{-}`: select text inside `{}`
- `super-select:brackets-<->`: select text inside `<>`
- `super-select:normalize`: convert slashes to match the most left slash inside selection
- `super-select:double-backslash`: (default `Ctrl-Alt-\`) convert slashes to `\\` inside selection
- `super-select:backslash`: (default `Alt-\`) convert slashes to `\` inside selection
- `super-select:forward-slash`: (default `Alt-/`) convert slashes to `/` inside selection
- `super-select:html-body`: select html body
- `super-select:html-tags`: select html tags

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!
