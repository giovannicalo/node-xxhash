namespace xxhash {

	/**
	 * Hashes a buffer using xxHash XXH3.
	 *
	 * @param {Buffer} data - The data to hash.
	 * @param {BigInt} [seed=0n] - The seed to use, defaults to 0.
	 * @returns {BigInt} The hash.
	 */
	declare function xxh3(data: Buffer, seed?: bigint): bigint;

	/**
	 * Hashes a buffer using xxHash XXH32.
	 *
	 * @param {Buffer} data - The data to hash.
	 * @param {Number} [seed=0] - The seed to use, defaults to 0.
	 * @returns {Number} The hash.
	 */
	declare function xxh32(data: Buffer, seed?: number): number;

	/**
	 * Hashes a buffer using xxHash XXH64.
	 *
	 * @param {Buffer} data - The data to hash.
	 * @param {BigInt} [seed=0n] - The seed to use, defaults to 0.
	 * @returns {BigInt} The hash.
	 */
	declare function xxh64(data: Buffer, seed?: bigint): bigint;

	/**
	 * Hashes a buffer using xxHash XXH128.
	 *
	 * @param {Buffer} data - The data to hash.
	 * @param {BigInt} [seed=0n] - The seed to use, defaults to 0.
	 * @returns {Buffer} The hash.
	 */
	declare function xxh128(data: Buffer, seed?: bigint): Buffer;

}
