import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { writeFile } from 'fs';

puppeteer.use(StealthPlugin());

const newsLinks = [
    'https://indianexpress.com/',
    'https://www.hindustantimes.com/india-news/government-launches-study-in-india-portal-to-establish-india-as-global-education-hub-101691069616859.html',
    // Add more news links as needed
];

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    const newsData = [];

    // Fetch data from the first link
    const page1 = await browser.newPage();
    await page1.setViewport({
        width: 1600,
        height: 1000,
        deviceScaleFactor: 1,
    });
    await page1.goto(newsLinks[0]);
    await page1.screenshot({ path: './screens/news_1.jpg' });

    const newsTitle1 = await page1.$eval('.t-elecblock-heading a', (title) => title.innerText);
    const newsContent = await page1.$eval('.t-elecblock-right p', (content) => content.innerText);

    newsData.push({
        title: newsTitle1,
        content: newsContent,
    });

    await page1.close();

    // Fetch data from the second link
    const page2 = await browser.newPage();
    await page2.setViewport({
        width: 1600,
        height: 1000,
        deviceScaleFactor: 1,
    });
    await page2.goto(newsLinks[1]);
    await page2.screenshot({ path: './screens/news_2.jpg' });

    const newsTitle2 = await page2.$eval('.hdg1', (content) => content.innerText);
    const newsContent2 = await page2.$eval('.sortDec', (content) => content.innerText);
    const newsContent3 = await page2.$eval('.storyDetails', (content) => content.innerText);

    newsData.push({
        title: newsTitle2,
        content: newsContent2 + newsContent3,
        url: newsLinks[1],
    });

    await page2.close();

    console.log({ newsData });

    const timestamp = new Date().getTime();
    const fileName = `./data/news_${timestamp}.json`;

    await writeFile(fileName, JSON.stringify(newsData, null, 2), 'utf-8', (err) => {
        if (err) throw err;
        console.log(`Saved the news data to ${fileName}`);
    });

    await browser.close();
})();
