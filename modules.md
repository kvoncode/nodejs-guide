# Modules

Node.js using CommonJS for module resolution

To import module you use `require('module name')`, to export module `module.export = ...`

There is a bunch of global variables, which in fact arguments passed to the module:

- `__filename`
- `exports`
- `module`
- `require`

`require.main` is the main module which was called using `node main-module.js`. `module` is the object that corresponds to the current's file. `require.main === module` equals `true` when called in `main-module.js`

`module.exports === exports`, which means they are both are references to the same object, but `module.exports` can be reassigned to `class/function/object` to export it. If `exports` are reassigned nothings happens.

`__filename` is the path to the current module
