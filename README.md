# amyrepl
Experimental python REPL for AMY (and maybe soon to be Tulip Desktop Web)


# build notes

in AMY (maybe make this a submodule here), do `make web`

That creates `amy.js` and `amy.wasm` and `amy.aw.js` in `amy/docs`, copy that here

move / put this on line 16 of `amy.js` - still figuring out why emscripten puts this in the wrong spot

`globalThis.AudioWorkletModule = amy_module;`

eg.

```js
...
  return moduleArg.ready
}
);
})();

globalThis.AudioWorkletModule = amy_module;
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = amyModule;
...
```

run `python server.py`, go to localhost:8000

