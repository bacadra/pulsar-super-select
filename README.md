# super-select

An additional methods of text selection e.g. by brackets, by string. A slash normalization included.

## Installation

To install `super-select` search for [super-select](https://web.pulsar-edit.dev/packages/super-select) in the Install pane of the Pulsar settings or run `ppm install super-select`. Alternatively, you can run `ppm install bacadra/pulsar-super-select` to install a package directly from the Github repository.

## Search

The search begins at the cursor position to the left. When a matching character is found, then it searches for the closing character to the right of the cursor.

## Methods

- `super-select:chars-1`: select chars by `/[0-9\\p{L}_\\.]/`
- `super-select:chars-2`: select chars by `/[0-9\\p{L}_\\.\\-\\[\\]\\(\\)#]/`
- `super-select:string`: select any of `'''`, `"""`, `'` or `"` pairs
- `super-select:string-'-'`: select any of `'''` or `'` pairs
- `super-select:string-'''-'''`: select `'''` pairs
- `super-select:string-"-"`: select any of `"""` or `"` pairs
- `super-select:string-"""-"""`: select `"""` pairs
- `super-select:brackets`: select any of `()`, `[]`, `{}` or `<>` pairs
- `super-select:brackets-(-)`: select `()` pairs
- `super-select:brackets-[-]`: select `[]` pairs
- `super-select:brackets-{-}`: select `{}` pairs
- `super-select:brackets-<->`: select `<>` pairs
- `super-select:normalize`: convert slashes to match the most left slash
- `super-select:double-backslash`: convert slashes to `\\`
- `super-select:backslash`: convert slashes to `\`
- `super-select:forward-slash`: convert slashes to `/`
- `super-select:html-body`: select html body
- `super-select:html-tags`: select html tags

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!
