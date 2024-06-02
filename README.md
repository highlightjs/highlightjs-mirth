# Mirth Syntax Highlighting

This is the syntax highlighting config for using highlight.js on mirth code.

Mirth is a new strongly-typed concatenative programming language.

It is inspired by Forth, Joy, Haskell, Lisp, and monoidal category theory. 

Mirth's compiler can be found [here](https://github.com/mirth-lang/mirth)

# Usage
Simply include the `highlight.js` script or package in your webpage or Node app,
add this module and apply it to `hljs`

if you're not using node, assuming you've downloaded the pregenerated mirth.min.js from the dist directory of the repo:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script src="mirth.min.js"></script>
<script>hljs.highlightAll();</script>
```

If you've installed via node:

```js
var hljs = require("highlightjs");
var hljsMirth = require("highlihgtjs-mirth");

hljsMirth(hljs);
hljs.highlightAll();
```
