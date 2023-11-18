# super-select

<p align="center">
  <a href="https://github.com/bacadra/pulsar-super-select/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/pulsar-super-select?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/pulsar-super-select/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/pulsar-super-select?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/pulsar-super-select/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/pulsar-super-select?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/pulsar-super-select/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/pulsar-super-select?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

Select text between the brackets or in the string & normalize slash in selections

## Installation

To install `super-select` search for [super-select](https://web.pulsar-edit.dev/packages/super-select) in the Install pane of the Pulsar settings or run `ppm install super-select`.

Alternatively, you can run `ppm install bacadra/pulsar-super-select` to install a package directly from the Github repository.

## Search

The search begins at the cursor position to the left. When a matching character is found, then it searches for the closing character to the right of the cursor.

## Methods

* `super-select:chars-1`: select chars by `/[0-9\p{L}_\.]/`
* `super-select:chars-2`: select chars by `/[0-9\p{L}_\.-]/`
* `super-select:chars-3`: select chars by `/[0-9\p{L}\\]/`
* `super-select:chars-4`: select chars by `/[0-9a-zA-Z_\[\]#]/`
* `super-select:string`: select any of `'''`, `"""`, `'` or `"` pairs
* `super-select:string-'-'`: select any of `'''` or `'` pairs
* `super-select:string-'''-'''`: select `'''` pairs
* `super-select:string-"-"`: select any of `"""` or `"` pairs
* `super-select:string-"""-"""`: select `"""` pairs
* `super-select:brackets`: select any of `()`, `[]`, `{}` or `<>` pairs
* `super-select:brackets-(-)`: select `()` pairs
* `super-select:brackets-[-]`: select `[]` pairs
* `super-select:brackets-{-}`: select `{}` pairs
* `super-select:brackets-<->`: select `<>` pairs
* `super-select:normalize`: convert slashes to match the most left slash
* `super-select:double-backslash`: convert slashes to `\\`
* `super-select:backslash`: convert slashes to `\`
* `super-select:forward-slash`: convert slashes to `/`
* `super-select:html-body`: select html body
* `super-select:html-tags`: select html tags

# Contributing [🍺](https://www.buymeacoffee.com/asiloisad)

If you have any ideas on how to improve the package, spot any bugs, or would like to support the development of new features, please feel free to share them via GitHub.
