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

function convertToFancyMenu(markdown) {
	return markdown.replace(/\\(.)/g, (match, char) => `;;${char};;`);
}

function convertDeepHeadersToBold(markdown) {
	return markdown.replace(
		/^(#{4,6}) (.+)$/gm,
		(match, hashes, text) => `**${text}**`
	);
}

async function createVersionFolder(version, type, imageUrl, body, title) {
	const folderName = path.join("build", `${version}`);

	try {
		await fs.access(folderName);
		console.log(`Skipping existing folder: ${folderName}`);
		return;
	} catch (error) {}

	await fs.mkdir(folderName, { recursive: true });

	let markdown = htmlToMarkdown(body);
	markdown = markdown.replace(/^(#{1,5}) /gm, (match, hashes) => `#${hashes} `);

	const headerTitle = title || version;
	markdown = `# ${headerTitle}\n\n${markdown}`;

	await fs.writeFile(path.join(folderName, "index.md"), markdown);

	let fancyMenuMarkdown = convertDeepHeadersToBold(markdown);
	let fancyMenuContent = convertToFancyMenu(fancyMenuMarkdown);
	if (fancyMenuContent.length > 45000) {
		fancyMenuContent = fancyMenuContent.substring(0, 45000);
	}
	await fs.writeFile(path.join(folderName, "fancymenu.md"), fancyMenuContent);

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
	allVersions,
	versionDataCache
) {
	const folderName = path.join("build", `from-${version}`);

	try {
		await fs.access(folderName);
		console.log(`Skipping existing folder: ${folderName}`);
		return;
	} catch (error) {}

	await fs.mkdir(folderName, { recursive: true });

	const currentVersion = allVersions.find((v) => v.version === version);

	const allVersionsToInclude = [currentVersion, ...previousVersions];
	const fullMarkdown = await combineMarkdown(allVersionsToInclude, versionDataCache);

	let fancyMenuMarkdown = convertDeepHeadersToBold(fullMarkdown);
	const fancyMenuContent = convertToFancyMenu(fancyMenuMarkdown);

	if (fancyMenuContent.length > 45000) {
		let versionsToInclude = [currentVersion];
		let lastGoodMarkdown = await combineMarkdown(versionsToInclude, versionDataCache);

		for (let i = 0; i < previousVersions.length; i++) {
			versionsToInclude = [currentVersion, ...previousVersions.slice(0, i + 1)];
			const testMarkdown = await combineMarkdown(versionsToInclude, versionDataCache);
			const testFancyMenuWithBold = convertDeepHeadersToBold(testMarkdown);
			const testFancyMenu = convertToFancyMenu(testFancyMenuWithBold);

			if (testFancyMenu.length <= 45000) {
				lastGoodMarkdown = testMarkdown;
			} else {
				break;
			}
		}
		fancyMenuMarkdown = convertDeepHeadersToBold(lastGoodMarkdown);
	}

	for (let i = 0; i < allVersionsToInclude.length; i++) {
		const v = allVersionsToInclude[i];
		const imagePath = path.join(folderName, `${v.version}.jpg`);
		const targetImagePath = path.join("..", `${v.version}`, `${v.version}.jpg`);
		try {
			await fs.symlink(targetImagePath, imagePath);
		} catch (error) {
			if (error.code !== "EEXIST") {
				console.error(`Error creating image symlink for ${v.version}:`, error.message);
			}
		}
	}

	await fs.writeFile(path.join(folderName, "index.md"), fullMarkdown);

	let finalFancyMenuContent = convertToFancyMenu(fancyMenuMarkdown);
	if (finalFancyMenuContent.length > 45000) {
		finalFancyMenuContent = finalFancyMenuContent.substring(0, 45000);
	}
	await fs.writeFile(
		path.join(folderName, "fancymenu.md"),
		finalFancyMenuContent
	);

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

async function combineMarkdown(versions, versionDataCache) {
	let combined = "";
	for (const version of versions) {
		if (version.contentPath) {
			try {
				const versionData = versionDataCache.get(version.version);
				if (!versionData) {
					console.error(`No cached data for ${version.version}`);
					continue;
				}
				let markdown = htmlToMarkdown(versionData.body || "");

				markdown = markdown.replace(/^(#{1,5}) /gm, (match, hashes) => `#${hashes} `);

				combined += `# ${versionData.title}\n\n${markdown}\n\n---\n\n`;
			} catch (error) {
				console.error(`Failed to process version data for ${version.version}`);
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

		console.log("Fetching all version data...");
		const versionDataCache = new Map();
		const allEntries = [...releases, ...snapshots];
		
		const fetchPromises = allEntries
			.filter(entry => entry.contentPath)
			.map(async (entry) => {
				try {
					const contentUrl = `https://launchercontent.mojang.com/v2/${entry.contentPath}`;
					const versionData = await fetchJSON(contentUrl);
					versionDataCache.set(entry.version, versionData);
				} catch (error) {
					console.error(`Failed to fetch version data for ${entry.version}`);
				}
			});
		
		await Promise.all(fetchPromises);
		console.log(`Cached ${versionDataCache.size} versions`);

		console.log("Creating version folders...");
		for (const release of releases) {
			if (release.contentPath) {
				const versionData = versionDataCache.get(release.version);
				if (versionData) {
					await createVersionFolder(
						release.version,
						"release",
						versionData.image ? versionData.image.url : release.image?.url,
						versionData.body || "",
						versionData.title
					);
				}
			}
		}

		for (const snapshot of snapshots) {
			if (snapshot.contentPath) {
				const versionData = versionDataCache.get(snapshot.version);
				if (versionData) {
					await createVersionFolder(
						snapshot.version,
						"snapshot",
						versionData.image ? versionData.image.url : snapshot.image?.url,
						versionData.body || "",
						versionData.title
					);
				}
			}
		}

		console.log("Creating from-* folders...");
		for (let i = 0; i < releases.length; i++) {
			const release = releases[i];
			const previousReleases = releases.slice(i + 1);

			await createFromVersionFolder(
				release.version,
				"release",
				previousReleases,
				patchNotes.entries,
				versionDataCache
			);
		}

		for (let i = 0; i < snapshots.length; i++) {
			const snapshot = snapshots[i];
			const previousSnapshots = snapshots.slice(i + 1);

			await createFromVersionFolder(
				snapshot.version,
				"snapshot",
				previousSnapshots,
				patchNotes.entries,
				versionDataCache
			);
		}

		if (releases.length > 0) {
			const latestRelease = releases[0].version;
			const fromLatestPath = path.join("build", `from-${latestRelease}`, "index.md");
			const indexContent = await fs.readFile(fromLatestPath, "utf-8");
			await fs.writeFile(path.join("build", "index.md"), indexContent);
			console.log(`Created index.md from from-${latestRelease}`);

			const fancyMenuFromLatest = path.join(
				"build",
				`from-${latestRelease}`,
				"fancymenu.md"
			);
			let fancyMenuContent = await fs.readFile(fancyMenuFromLatest, "utf-8");
			if (fancyMenuContent.length > 45000) {
				fancyMenuContent = fancyMenuContent.substring(0, 45000);
			}
			await fs.writeFile(path.join("build", "fancymenu.md"), fancyMenuContent);

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
