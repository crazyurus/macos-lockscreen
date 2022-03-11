# MacOS Lock Screen CLI

> Lock your screen in terminal, only supports **macOS**.

## Install

> Depends on `Node.js`, `npm` and `clang`

If you don't have `clang` installed, run

```sh
$ xcode-select --install
```

And install this package globally

```sh
$ npm install macos-lockscreen -g
```

## Usage

You can lock the screen by running the following command

```sh
$ lockscreen
or
$ lock
```

You can also use this package in Node.js

```js
const lockScreen = require('macos-lockscreen');

await lockScreen();
```

After the unlocking is completed, the `lockScreen` will asynchronously return the result code, `0` means the unlocking is successful