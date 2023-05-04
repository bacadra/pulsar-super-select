# super-select

![Tag](https://img.shields.io/github/v/tag/bacadra/atom-super-select?style=for-the-badge)
![LastCommit](https://img.shields.io/github/last-commit/bacadra/atom-super-select?style=for-the-badge)
![RepoSize](https://img.shields.io/github/repo-size/bacadra/atom-super-select?style=for-the-badge)
![Licence](https://img.shields.io/github/license/bacadra/atom-super-select?style=for-the-badge)

Select text between the brackets or in the string & normalize slash in selections

## Installation

### Atom Text Editor

The official Atom packages store has been disabled. To get latest version run the shell command

    apm install bacadra/atom-super-select

and obtain the package directly from Github repository.

### Pulsar Text Editor

The package has compability with [Pulsar](https://pulsar-edit.dev/) and can be install

    pulsar -p install bacadra/atom-super-select

or directly [super-select](https://web.pulsar-edit.dev/packages/super-select) from Pulsar package store.

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

# Contributing

If you have ideas on how to improve the package, see bugs or want to support new features - feel free to share it via GitHub.

See my other packages for Atom & Pulsar Text Editors:

* [autocomplete-sofistik](https://github.com/bacadra/atom-autocomplete-sofistik)
* [bib-finder](https://github.com/bacadra/atom-bib-finder)
* [hydrogen-run](https://github.com/bacadra/atom-hydrogen-run)
* [image-paste](https://github.com/bacadra/atom-image-paste)
* [language-sofistik](https://github.com/bacadra/atom-language-sofistik)
* [linter-ruff](https://github.com/bacadra/atom-linter-ruff)
* [navigation-panel](https://github.com/bacadra/atom-navigation-panel)
* [open-external](https://github.com/bacadra/atom-open-external)
* [pdf-viewer](https://github.com/bacadra/atom-pdf-viewer)
* [project-files](https://github.com/bacadra/atom-project-files)
* [regex-aligner](https://github.com/bacadra/atom-regex-aligner)
* [sofistik-tools](https://github.com/bacadra/atom-sofistik-tools)
* [super-select](https://github.com/bacadra/atom-super-select)
* [word-map](https://github.com/bacadra/atom-word-map)
