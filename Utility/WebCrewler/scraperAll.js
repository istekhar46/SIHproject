import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { writeFile } from 'fs';

puppeteer.use(StealthPlugin());

const newsLinks = [
  'https://indianexpress.com/',
  // Add more news links as needed
];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 1000,
    deviceScaleFactor: 1,
  });

  const newsData = [];

  for (const link of newsLinks) {
    await page.goto(link);

    // Capture a full-page screenshot
    await page.screenshot({ path: `./screens/news_${newsLinks.indexOf(link) + 1}.png`, fullPage: true });

    // You can also save the HTML source of the page if needed
    const newsHTML = await page.content();

    newsData.push({
      url: link,
      screenshotPath: `./screens/news_${newsLinks.indexOf(link) + 1}.png`,
      htmlContent: newsHTML,
    });
  }

  console.log({ newsData });

  await writeFile('./data/news.json', JSON.stringify(newsData, null, 2), 'utf-8', (err) => {
    if (err) throw err;
    console.log('Saved the news data to news.json');
  });

  await browser.close();
})();
