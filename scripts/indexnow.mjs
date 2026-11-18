#!/usr/bin/env node
/**
 * Submit every URL in the live sitemap to IndexNow in one request.
 * IndexNow notifies Bing (which also powers ChatGPT search and DuckDuckGo),
 * Yandex, Naver, Seznam and other participating search engines.
 *
 * Usage (run AFTER the site is deployed, so the key file is live):
 *   npm run indexnow             -> submit all URLs
 *   npm run indexnow -- --dry    -> only list the URLs, submit nothing
 *
 * Optional env: SITEMAP_URL=http://localhost:3100/sitemap.xml (for testing the URL list)
 */

const HOST = "correagcs.com";
const SITE = `https://${HOST}`;
const KEY = "9041d4605060886097b7ad46984d1d32"; // must match public/<KEY>.txt
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_URL = process.env.SITEMAP_URL || `${SITE}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry") || process.argv.includes("--dry-run");

const MESSAGES = {
  200: "OK: URLs submitted.",
  202: "Accepted: URLs received; the key is being validated.",
  400: "Bad request: invalid format.",
  403: "Forbidden: key not valid. Is the site deployed with the key file live?",
  422: "Unprocessable: URLs don't belong to the host, or the key doesn't match.",
  429: "Too many requests: wait a while before submitting again.",
};

async function main() {
  console.log(`Reading sitemap: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Could not load sitemap (${res.status}). Is the site deployed?`);
  const xml = await res.text();

  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((url) => url.startsWith(SITE));
  const unique = [...new Set(urls)];

  if (!unique.length) throw new Error("No correagcs.com URLs found in the sitemap.");
  console.log(`Found ${unique.length} URLs:`);
  unique.forEach((url) => console.log(`  ${url}`));

  if (dryRun) {
    console.log("\nDry run: nothing submitted.");
    return;
  }

  // Confirm the key file is publicly reachable before submitting.
  const keyRes = await fetch(KEY_LOCATION);
  const keyText = keyRes.ok ? (await keyRes.text()).trim() : "";
  if (keyText !== KEY) {
    throw new Error(
      `Key file not live at ${KEY_LOCATION} (status ${keyRes.status}). Deploy the site first, then run this again.`,
    );
  }

  console.log(`\nSubmitting ${unique.length} URLs to IndexNow…`);
  const submit = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: unique }),
  });

  console.log(`IndexNow response: ${submit.status} ${MESSAGES[submit.status] ?? ""}`);
  if (submit.status >= 400) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`\nError: ${error.message}`);
  process.exitCode = 1;
});
