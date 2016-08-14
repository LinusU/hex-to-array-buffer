# hex-to-array-buffer

Turn a string of hexadecimal characters into an `ArrayBuffer`.

## Installation

```sh
npm install --save hex-to-array-buffer
```

## Usage

```js
const hexToArrayBuffer = require('hex-to-array-buffer')

const buffer = hexToArrayBuffer('ceae96a325e1dc5dd4f405d905049ceb')

console.log(buffer)
//=> ArrayBuffer { byteLength: 16 }
```

## API

### hexToArrayBuffer(hex: string) => ArrayBuffer

Returns a new ArrayBuffer with the binary content specified as a string of
hexadecimal characters.
