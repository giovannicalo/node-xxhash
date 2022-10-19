const { randomBytes } = require("crypto");

const { xxh3, xxh32, xxh64, xxh128 } = require("../source");

const iterations = 10000;

const data256b = randomBytes(256);

const data1Kb = randomBytes(1024);

const data4Kb = randomBytes(4096);

const data1Mb = randomBytes(1048576);

const benchmark = async (label, method, ...parameters) => {
	const start = performance.now();
	for (let i = 0; i < iterations; i++) {
		await method(...parameters);
	}
	console.log(`${label}: ${((performance.now() - start) / iterations).toFixed(5)}ms`);
};

(async () => {
	for (const parameters of [
		["XXH3   256B", xxh3, data256b],
		["XXH3    1KB", xxh3, data1Kb],
		["XXH3    4KB", xxh3, data4Kb],
		["XXH3    1MB", xxh3, data1Mb],
		["XXH32  256B", xxh32, data256b],
		["XXH32   1KB", xxh32, data1Kb],
		["XXH32   4KB", xxh32, data4Kb],
		["XXH32   1MB", xxh32, data1Mb],
		["XXH64  256B", xxh64, data256b],
		["XXH64   1KB", xxh64, data1Kb],
		["XXH64   4KB", xxh64, data4Kb],
		["XXH64   1MB", xxh64, data1Mb],
		["XXH128 256B", xxh128, data256b],
		["XXH128  1KB", xxh128, data1Kb],
		["XXH128  4KB", xxh128, data4Kb],
		["XXH128  1MB", xxh128, data1Mb]
	]) {
		await benchmark(...parameters);
	}
})();
