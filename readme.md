# Node xxHash

[![Build Status](https://github.com/giovannicalo/node-xxhash/actions/workflows/build.yml/badge.svg)](https://github.com/giovannicalo/node-xxhash/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/giovannicalo/node-xxhash/badge.svg)](https://coveralls.io/github/giovannicalo/node-xxhash)

## Prerequisites

* [CMake](https://cmake.org) >= 3.21.0

## Installation

```bash
npm install giovannicalo/node-xxhash
```

> Not yet published to NPM. This will install it from GitHub.

## Usage

```javascript
const { xxh3, xxh32, xxh64, xxh128 } = require("xxhash");

const data = Buffer.from("foo");

console.log(xxh3(data));
// 3792637401

console.log(xxh32(data));
// 3728699739546630719n

console.log(xxh64(data));
// 12352915711150947722n

console.log(xxh128(data));
// <Buffer 79 ae f9 2e 83 45 41 21 ab 6e 5f 64 07 7e 7d 8a>
```

## API

### `xxh3(data: Buffer, seed: bigint = 0n): bigint`

Hashes the `data` `Buffer` using xxHash XXH3 with `seed`, defaulting to `0n`.

Returns the hash as a `bigint`.

### `xxh32(data: Buffer, seed: number = 0): number`

Hashes the `data` `Buffer` using xxHash XXH32 with `seed`, defaulting to `0`.

Returns the hash as a `number`.

### `xxh64(data: Buffer, seed: bigint = 0n): bigint`

Hashes the `data` `Buffer` using xxHash XXH64 with `seed`, defaulting to `0n`.

Returns the hash as a `bigint`.

### `xxh128(data: Buffer, seed: bigint = 0n): Buffer`

Hashes the `data` `Buffer` using xxHash XXH128 with `seed`, defaulting to `0n`.

Returns the hash as a 16-byte `Buffer`.
