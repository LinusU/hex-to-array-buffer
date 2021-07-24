# hex-to-array-buffer

Turn a string of hexadecimal characters into an `ArrayBuffer`.

## Installation

```sh
npm install --save hex-to-array-buffer
```

## Usage

```js
import hexToArrayBuffer from 'hex-to-array-buffer'

const buffer = hexToArrayBuffer('ceae96a325e1dc5dd4f405d905049ceb')

console.log(buffer)
//=> ArrayBuffer { byteLength: 16 }
```

## API

### `hexToArrayBuffer(input)`

- `input` (`string`, required) - specified as a string of hexadecimal characters
- returns `ArrayBuffer` - a new ArrayBuffer with the binary content from `input`
