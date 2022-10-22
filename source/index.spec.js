const { xxh3, xxh32, xxh64, xxh128 } = require(".");

it("should hash the given data using xxHash XXH3", () => {
	expect(xxh3(Buffer.from("foo"))).toBe(12352915711150947722n);
});

it("should hash the given data using xxHash XXH3 with the given seed", () => {
	expect(xxh3(Buffer.from("foo"), 42n)).toBe(15221504070560512414n);
});

it("should hash the given data using xxHash XXH32", () => {
	expect(xxh32(Buffer.from("foo"))).toBe(3792637401);
});

it("should hash the given data using xxHash XXH32 with the given seed", () => {
	expect(xxh32(Buffer.from("foo"), 42)).toBe(675905346);
});

it("should hash the given data using xxHash XXH64", () => {
	expect(xxh64(Buffer.from("foo"))).toBe(3728699739546630719n);
});

it("should hash the given data using xxHash XXH64 with the given seed", () => {
	expect(xxh64(Buffer.from("foo"), 42n)).toBe(15371435851161846338n);
});

it("should hash the given data using xxHash XXH128", () => {
	expect(xxh128(Buffer.from("foo"))).toEqual(Buffer.from([
		0x79, 0xAE, 0xF9, 0x2E, 0x83, 0x45, 0x41, 0x21,
		0xAB, 0x6E, 0x5F, 0x64, 0x07, 0x7E, 0x7D, 0x8A
	]));
});

it("should hash the given data using xxHash XXH128 with the given seed", () => {
	expect(xxh128(Buffer.from("foo"), 42n)).toEqual(Buffer.from([
		0x1C, 0x6E, 0x8C, 0x6E, 0x99, 0x1E, 0xF0, 0x17,
		0xD3, 0x3D, 0xA5, 0x4E, 0x20, 0xEB, 0xF9, 0x9E
	]));
});

it("should throw when given invalid arguments", () => {
	const data = Buffer.from("foo");
	for (const method of [xxh3, xxh32, xxh64, xxh128]) {
		for (const [parameters, error] of [
			[[], "Invalid argument"],
			[[42], "Invalid argument"],
			[[data, "foo"], /A bigint|number was expected/u]
		]) {
			expect(() => {
				method(...parameters);
			}).toThrow(error);
		}
	}
});
