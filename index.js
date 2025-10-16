const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");
const TurndownService = require("turndown");

const API_ENDPOINT =
	"https://launchercontent.mojang.com/v2/javaPatchNotes.json";
const turndownService = new TurndownService({
	headingStyle: "atx",
	bulletListMarker: "-",
});

async function fetchJSON(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(`Error fetching ${url}:`, error.message);
		throw error;
	}
}

async function downloadImage(url, filepath) {
	try {
		const response = await axios.get(url, { responseType: "arraybuffer" });
		await fs.mkdir(path.dirname(filepath), { recursive: true });
		await fs.writeFile(filepath, response.data);
	} catch (error) {
		console.error(`Error downloading image ${url}:`, error.message);
	}
}

function htmlToMarkdown(html) {
	try {
		if (!html) return "";
		return turndownService.turndown(html);
	} catch (error) {
		console.error("Error converting HTML to markdown:", error.message);
		return html;
	}
}

async function createVersionFolder(version, type, imageUrl, body) {
	const folderName = path.join("build", `${version}`);

	try {
		await fs.access(folderName);
		console.log(`Skipping existing folder: ${folderName}`);
		return;
	} catch (error) {}

	await fs.mkdir(folderName, { recursive: true });

	let markdown = htmlToMarkdown(body);
	markdown = markdown.replace(/^(#{1,5}) /gm, (match, hashes) => `#${hashes} `);

	markdown = `# ${version}\n\n${markdown}`;

	await fs.writeFile(path.join(folderName, "index.md"), markdown);

	const htmlPath = path.join(folderName, "index.html");
	const mdPath = path.join(folderName, "index.md");
	try {
		await fs.symlink("index.md", htmlPath);
	} catch (error) {
		if (error.code !== "EEXIST") {
			console.error(`Error creating symlink for ${version}:`, error.message);
		}
	}

	const imageExt = "jpg";
	const imagePath = path.join(folderName, `${version}.${imageExt}`);
	if (imageUrl) {
		let fullImageUrl = imageUrl;
		if (!fullImageUrl.startsWith("http")) {
			fullImageUrl = `https://launchercontent.mojang.com${fullImageUrl}`;
		}
		await downloadImage(fullImageUrl, imagePath);
	}

	console.log(`Created folder: ${folderName}`);
}

async function createFromVersionFolder(
	version,
	type,
	previousVersions,
	allVersions
) {
	const folderName = path.join("build", `from-${version}`);

	try {
		await fs.access(folderName);
		console.log(`Skipping existing folder: ${folderName}`);
		return;
	} catch (error) {}

	await fs.mkdir(folderName, { recursive: true });

	const currentVersion = allVersions.find((v) => v.version === version);
	let markdown = "";

	if (type === "release") {
		const versionsToInclude = [currentVersion, ...previousVersions.slice(0, 5)];
		markdown = await combineMarkdown(versionsToInclude, allVersions);

		for (let i = 0; i < Math.min(versionsToInclude.length, 6); i++) {
			const v = versionsToInclude[i];
			const imagePath = path.join(folderName, `${v.version}.png`);
			const targetImagePath = path.join("..", `${v.version}`, `${v.version}.jpg`);
			try {
				await fs.symlink(targetImagePath, imagePath);
			} catch (error) {
				if (error.code !== "EEXIST") {
					console.error(`Error creating image symlink for ${v.version}:`, error.message);
				}
			}
		}
	} else {
		const versionsToInclude = [currentVersion, ...previousVersions.slice(0, 10)];
		markdown = await combineMarkdown(versionsToInclude, allVersions);

		for (let i = 0; i < Math.min(versionsToInclude.length, 6); i++) {
			const v = versionsToInclude[i];
			const imagePath = path.join(folderName, `${v.version}.png`);
			const targetImagePath = path.join("..", `${v.version}`, `${v.version}.jpg`);
			try {
				await fs.symlink(targetImagePath, imagePath);
			} catch (error) {
				if (error.code !== "EEXIST") {
					console.error(`Error creating image symlink for ${v.version}:`, error.message);
				}
			}
		}
	}

	await fs.writeFile(path.join(folderName, "index.md"), markdown);

	const htmlPath = path.join(folderName, "index.html");
	try {
		await fs.symlink("index.md", htmlPath);
	} catch (error) {
		if (error.code !== "EEXIST") {
			console.error(`Error creating symlink for from-${version}:`, error.message);
		}
	}

	console.log(`Created folder: ${folderName}`);
}

async function combineMarkdown(versions, allVersions) {
	let combined = "";
	for (const version of versions) {
		if (version.contentPath) {
			try {
				const contentUrl = `https://launchercontent.mojang.com/v2/${version.contentPath}`;
				const versionData = await fetchJSON(contentUrl);
				let markdown = htmlToMarkdown(versionData.body || "");

				markdown = markdown.replace(/^(#{1,5}) /gm, (match, hashes) => `#${hashes} `);

				if (version === versions[0]) {
					combined += `# ${versionData.title}\n\n${markdown}\n\n---\n\n`;
				} else {
					combined += `${markdown}\n\n---\n\n`;
				}
			} catch (error) {
				console.error(`Failed to fetch version data for ${version.version}`);
			}
		}
	}
	return combined;
}

async function main() {
	try {
		console.log("Fetching Minecraft patch notes...");
		const patchNotes = await fetchJSON(API_ENDPOINT);

		const releases = patchNotes.entries.filter((e) => e.type === "release");
		const snapshots = patchNotes.entries.filter((e) => e.type === "snapshot");

		console.log(
			`Found ${releases.length} releases and ${snapshots.length} snapshots`
		);

		for (let i = 0; i < releases.length; i++) {
			const release = releases[i];
			const previousReleases = releases.slice(i + 1);

			if (release.contentPath) {
				try {
					const contentUrl = `https://launchercontent.mojang.com/v2/${release.contentPath}`;
					const versionData = await fetchJSON(contentUrl);
					await createVersionFolder(
						release.version,
						"release",
						versionData.image ? versionData.image.url : release.image?.url,
						versionData.body || ""
					);
				} catch (error) {
					console.error(`Failed to fetch version data for ${release.version}`);
				}
			}

			await createFromVersionFolder(
				release.version,
				"release",
				previousReleases,
				patchNotes.entries
			);
		}

		for (let i = 0; i < snapshots.length; i++) {
			const snapshot = snapshots[i];
			const previousSnapshots = snapshots.slice(i + 1);

			if (snapshot.contentPath) {
				try {
					const contentUrl = `https://launchercontent.mojang.com/v2/${snapshot.contentPath}`;
					const versionData = await fetchJSON(contentUrl);
					await createVersionFolder(
						snapshot.version,
						"snapshot",
						versionData.image ? versionData.image.url : snapshot.image?.url,
						versionData.body || ""
					);
				} catch (error) {
					console.error(`Failed to fetch version data for ${snapshot.version}`);
				}
			}

			await createFromVersionFolder(
				snapshot.version,
				"snapshot",
				previousSnapshots,
				patchNotes.entries
			);
		}

		if (releases.length > 0) {
			const latestRelease = releases[0].version;
			const fromLatestPath = path.join("build", `from-${latestRelease}`, "index.md");
			const indexContent = await fs.readFile(fromLatestPath, "utf-8");
			await fs.writeFile(path.join("build", "index.md"), indexContent);
			console.log(`Created index.md from from-${latestRelease}`);

			const buildHtmlPath = path.join("build", "index.html");
			try {
				await fs.symlink("index.md", buildHtmlPath);
			} catch (error) {
				if (error.code !== "EEXIST") {
					console.error("Error creating index.html symlink:", error.message);
				}
			}
		}

		console.log("Done!");
	} catch (error) {
		console.error("Fatal error:", error);
		process.exit(1);
	}
}

main();
