const puppeteer = require("puppeteer");
const $ = require("cheerio");

const mainUrl = "https://www.stol.it/";

let page = null;

(async () => {
	const browser = await puppeteer.launch({defaultViewport: null, args: ["--no-sandbox"]});
	page = await browser.newPage();
})();

module.exports = async (message) => {
	await page.goto(mainUrl);
	const html = await page.content();
	const topArticle = $("ul > li > article > div > a", html);
	const urlExtension = $(topArticle).attr("href");
	message.reply(`Schaug enk amol un wos in insern schianen landl passiert:\n ${mainUrl + urlExtension}`);
}; 