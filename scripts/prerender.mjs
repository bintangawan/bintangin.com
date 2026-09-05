import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const outputFile = resolve(projectRoot, "dist", "index.html");
const serverBundle = resolve(projectRoot, ".prerender", "entry-server.js");
const serverBundleUrl = `${pathToFileURL(serverBundle).href}?t=${Date.now()}`;
const template = await readFile(outputFile, "utf8");
const { render } = await import(serverBundleUrl);
const appMarkup = render();
const rootPlaceholder = '<div id="root"></div>';

if (!template.includes(rootPlaceholder)) {
  throw new Error("Root placeholder tidak ditemukan pada hasil build Vite.");
}

await writeFile(
  outputFile,
  template.replace(rootPlaceholder, `<div id="root">${appMarkup}</div>`),
  "utf8",
);
await rm(resolve(projectRoot, ".prerender"), { recursive: true, force: true });
