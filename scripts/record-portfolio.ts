import { chromium } from 'playwright';
import path from 'path';

const PORTFOLIO_URL = 'https://studio-sabin.vercel.app/';
const OUTPUT_VIDEO = path.join(process.cwd(), 'portfolio-demo.webm');

async function recordPortfolioDemo() {
  const browser = await chromium.launch({
    headless: false, // Show the browser for better quality recording
  });

  const context = await browser.createContext({
    recordVideo: {
      dir: path.dirname(OUTPUT_VIDEO),
      size: { width: 1920, height: 1080 },
    },
  });

  const page = await context.newPage();

  console.log('🎬 Starting portfolio demo recording...');
  console.log(`📱 Navigating to ${PORTFOLIO_URL}`);

  // Navigate to portfolio
  await page.goto(PORTFOLIO_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // Let it settle

  // ── HERO SECTION ────────────────────────────────
  console.log('📸 Recording hero section...');
  await page.waitForTimeout(1500);

  // ── SCROLL TO PROJECTS ──────────────────────────
  console.log('📸 Scrolling to projects section...');
  await page.click('a[href="#projects"]');
  await page.waitForTimeout(1000);

  // Let projects load
  await page.waitForSelector('.projects-grid');
  await page.waitForTimeout(1500);

  // Scroll through projects
  console.log('📸 Scrolling through projects...');
  await page.evaluate(() => {
    window.scrollBy(0, 400);
  });
  await page.waitForTimeout(1000);

  // Click on a project to show detail
  console.log('📸 Clicking GeoSight project...');
  const firstProjectLink = await page.locator('a[href="https://geosight.earth"]').first();
  if (await firstProjectLink.isVisible()) {
    await firstProjectLink.click();
    await page.waitForTimeout(800);
    await page.goBack({ waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
  }

  // Scroll more to show other projects
  await page.evaluate(() => {
    window.scrollBy(0, 400);
  });
  await page.waitForTimeout(1000);

  // ── SCROLL TO ABOUT ─────────────────────────────
  console.log('📸 Scrolling to about section...');
  await page.click('a[href="#about"]');
  await page.waitForTimeout(1000);
  await page.waitForSelector('.about-section');
  await page.waitForTimeout(1500);

  // Scroll through about
  console.log('📸 Scrolling through about section...');
  await page.evaluate(() => {
    window.scrollBy(0, 400);
  });
  await page.waitForTimeout(800);

  // ── SHOW THEME SWITCHER ────────────────────────
  console.log('📸 Demonstrating theme switcher...');

  // Scroll back to top to access theme button
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);

  // Find and click theme switcher button (look for the theme button in bottom-right)
  const themeButtons = await page.locator('button:has-text("Theme"), [class*="theme"]').all();

  if (themeButtons.length > 0) {
    // Try to find the theme switcher (often in a fixed position)
    try {
      await page.click('[class*="ts-fab"], [class*="theme"], button[aria-label*="theme" i]');
      await page.waitForTimeout(800);

      // Click a different theme
      const themeOptions = await page.locator('[class*="theme-option"], li').all();
      if (themeOptions.length > 1) {
        await themeOptions[1].click();
        await page.waitForTimeout(1000);
      }
    } catch (e) {
      console.log('⚠️ Theme switcher not found, continuing...');
    }
  }

  // ── SCROLL TO FOOTER ────────────────────────────
  console.log('📸 Scrolling to footer...');
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1500);

  // Try to interact with footer links
  console.log('📸 Showing footer contact options...');
  const emailLink = await page.locator('a[href*="mailto"]').first();
  if (await emailLink.isVisible()) {
    await emailLink.hover();
    await page.waitForTimeout(500);
  }

  // ── FINAL SCROLL BACK TO TOP ────────────────────
  console.log('📸 Scrolling back to hero...');
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);

  // Close and save video
  console.log('💾 Saving video...');
  const videoPath = await page.video()?.path();
  await context.close();
  await browser.close();

  console.log('✅ Recording complete!');
  console.log(`📹 Video saved to: ${videoPath || OUTPUT_VIDEO}`);
  console.log('\n💡 You can now use this video to showcase your portfolio!');
}

recordPortfolioDemo().catch(error => {
  console.error('❌ Error recording portfolio:', error);
  process.exit(1);
});
