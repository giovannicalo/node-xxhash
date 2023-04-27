const { createWriteStream, promises: { mkdir, rename, unlink } } = require("fs");
const { join } = require("path");
const { Readable, promises: { finished } } = require("stream");

const extractZip = require("extract-zip");

(async () => {
	const path = join(__dirname, "..", "libraries");
	await mkdir(path, { recursive: true });
	const response = await fetch("https://codeload.github.com/Cyan4973/xxHash/zip/refs/tags/v0.8.1");
	const filePath = join(path, "xxhash.zip");
	await finished(Readable.fromWeb(response.body).pipe(createWriteStream(filePath)));
	await extractZip(filePath, { dir: path });
	rename(
		join(path, "xxHash-0.8.1"),
		join(path, "xxhash")
	);
	unlink(filePath);
})();
