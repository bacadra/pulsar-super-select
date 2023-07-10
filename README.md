# super-select

<p align="center">
  <a href="https://github.com/bacadra/atom-super-select/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/atom-super-select?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/atom-super-select/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/atom-super-select?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/atom-super-select/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/atom-super-select?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/atom-super-select/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/atom-super-select?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

Select text between the brackets or in the string & normalize slash in selections

## Installation

### Atom Text Editor

The official Atom packages store has been [disabled](https://github.blog/2022-06-08-sunsetting-atom/). To obtain the latest version, please run the following shell command:

```shell
apm install bacadra/atom-super-select
```

This will allow you to directly download the package from the GitHub repository.

### Pulsar Text Editor

The package is compatible with [Pulsar](https://pulsar-edit.dev/) and can be installed using the following command:

```shell
ppm install bacadra/atom-super-select
```

Alternatively, you can directly install [super-select](https://web.pulsar-edit.dev/packages/super-select) from the Pulsar package store.

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
