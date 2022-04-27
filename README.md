# super-select

## General

**Select text between the brackets or in the string & normalize slash in selections**

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
