import { chromium } from 'playwright';

const out = 'C:/Users/Dell/AppData/Local/Temp/visual-refs/current';
const sites = [
  { name: 'atoms',  url: 'http://localhost:8090/Atoms_%20Build%20websites%20%26%20apps%20with%20AI%2C%20no%20code%20needed.html' },
  { name: 'base44', url: 'http://localhost:8090/Build%20Apps%20with%20AI%20in%20Minutes%20_%20Base44.html' },
];
const sizes = [
  { w: 1440, h: 900,  n: '1440' },
  { w: 2560, h: 1440, n: '2560' },
];

const browser = await chromium.launch();
for (const site of sites) {
  for (const s of sizes) {
    const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h } });
    const page = await ctx.newPage();
    await page.goto(site.url, { waitUntil: 'networkidle' }).catch(() => {});
    await page.waitForTimeout(2500);
    // Hero (viewport)
    await page.screenshot({ path: `${out}/ref-${site.name}-hero-${s.n}.png`, clip: { x: 0, y: 0, width: s.w, height: s.h } });
    // Full page (limited height to keep readable)
    await page.screenshot({ path: `${out}/ref-${site.name}-full-${s.n}.png`, fullPage: true });
    console.log(`${site.name} @ ${s.n} done`);
    await ctx.close();
  }
}
await browser.close();
