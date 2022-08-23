# super-select

Select text between the brackets or in the string & normalize slash in selections

## Installation

After the announcement of Atoms sunset, the official [Atom packages store](https://atom.io/packages) isn't respond properly, so latest version of this package cannot be downloaded there. To get latest version run the shell command

    apm install bacadra/atom-super-select

and obtain the package directly from Github repository. Please note that package will occur in `Settings/Packages/Git Packages` instead of `Community Packages`.

## Search

The search begins at the cursor position to the left. When a matching character is found, then it searches for the closing character to the right of the cursor.

## Methods

* `super-select:object`: select name joined by `.` and `_`
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

# Contributing

If you have ideas on how to improve the package, see bugs or want to support new features, feel free to share them via GitHub.

See my other packages dedicated to Atom Editor:

* [autocomplete-sofistik](https://github.com/bacadra/atom-autocomplete-sofistik)
* [bib-finder](https://github.com/bacadra/atom-bib-finder)
* [hydrogen-run](https://github.com/bacadra/atom-hydrogen-run)
* [image-paste](https://github.com/bacadra/atom-image-paste)
* [language-sofistik](https://github.com/bacadra/atom-language-sofistik)
* [navigation-panel](https://github.com/bacadra/atom-navigation-panel)
* [open-external](https://github.com/bacadra/atom-open-external)
* [pdf-viewer](https://github.com/bacadra/atom-pdf-viewer)
* [project-files](https://github.com/bacadra/atom-project-files)
* [regex-aligner](https://github.com/bacadra/atom-regex-aligner)
* [sofistik-tools](https://github.com/bacadra/atom-sofistik-tools)
* [super-select](https://github.com/bacadra/atom-super-select)
* [word-map](https://github.com/bacadra/atom-word-map)
