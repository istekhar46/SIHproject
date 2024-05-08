const puppeteer = require('puppeteer');

async function scrapeHeadlines(url, browser) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const headlines = await page.$$eval('h1, h2, h3', headers =>
    headers.map(header => {
      const anchorTag = header.querySelector('a');
      return {
        text: header.innerText.trim(),
        link: anchorTag ? anchorTag.href : null
      };
    })
  );

  for (const headline of headlines) {
    console.log(`Headline from ${url}: ${headline.text}`);
    if (headline.link) {
      await page.goto(headline.link, { waitUntil: 'domcontentloaded' });
      const content = await page.$eval('p', p => p.innerText.trim());
      console.log(`Content from ${headline.link}: ${content}`);
      await page.goto(url, { waitUntil: 'domcontentloaded' }); // Navigate back only if necessary
    }
  }

  await page.close();
}

async function scrapeMultipleWebsites(urls) {
  const browser = await puppeteer.launch({ headless: false }); // Launches a non-headless browser
  const scrapers = urls.map(url => scrapeHeadlines(url, browser));
  await Promise.all(scrapers);
  await browser.close();
}

const urls = [
  'https://gizbot.com',
  'https://indianexpress.com',
  'https://hindustantimes.com'
];

scrapeMultipleWebsites(urls).then(() => console.log('Scraping complete.'));
