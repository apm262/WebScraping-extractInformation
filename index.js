const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

const scrapingResults = [];

async function main(){
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://alicante.craigslist.org/search/sof?');
    //await page.click('#L2AGLb > div');

    const html = await page.content();
    const $ = cheerio.load(html);

    $(".result-title").each((index,element) => console.log($(element).text()))
}

main();