const { promises: { mkdir, rename } } = require("fs");
const { get } = require("https");
const { join } = require("path");

const { Extract } = require("unzipper");

get(
	"https://codeload.github.com/Cyan4973/xxHash/zip/refs/tags/v0.8.1",
	async (response) => {
		const path = join(__dirname, "..", "libraries");
		await mkdir(path, { recursive: true });
		response.pipe(Extract({ path })).on("close", async () => {
			await rename(
				join(path, "xxHash-0.8.1"),
				join(path, "xxhash")
			);
		});
	}
);
