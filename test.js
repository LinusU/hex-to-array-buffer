import assert from 'node:assert'
import isEqual from 'arraybuffer-equal'
import hexToArrayBuffer from './index.js'

function numbersToArrayBuffer (numbers) {
  const view = new Uint8Array(numbers.length)

  for (let i = 0; i < view.length; i++) {
    view[i] = numbers[i]
  }

  return view.buffer
}

function test (a, b) {
  assert(isEqual(a, numbersToArrayBuffer(b)))
}

test(hexToArrayBuffer(''), [])
test(hexToArrayBuffer('1337'), [0x13, 0x37])
test(hexToArrayBuffer('aabb'), [0xaa, 0xbb])
test(hexToArrayBuffer('AABB'), [0xaa, 0xbb])
test(hexToArrayBuffer('ceae96a325e1dc5dd4f405d905049ceb'), [0xce, 0xae, 0x96, 0xa3, 0x25, 0xe1, 0xdc, 0x5d, 0xd4, 0xf4, 0x05, 0xd9, 0x05, 0x04, 0x9c, 0xeb])
test(hexToArrayBuffer('CEAE96A325E1DC5DD4F405D905049CEB'), [0xce, 0xae, 0x96, 0xa3, 0x25, 0xe1, 0xdc, 0x5d, 0xd4, 0xf4, 0x05, 0xd9, 0x05, 0x04, 0x9c, 0xeb])
