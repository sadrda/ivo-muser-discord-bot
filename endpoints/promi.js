const puppeteer = require("puppeteer");
const $ = require("cheerio");

const mainUrl = "https://www.promiflash.de";

let page = null;

(async () => {
	const browser = await puppeteer.launch({defaultViewport: null, args: ["--no-sandbox"]});
	page = await browser.newPage();
})();

module.exports = async (message) => {
	await page.goto(mainUrl);
	const html = await page.content();
	const topArticle = $("div > article > .articleCard", html);
	const urlExtension = $(topArticle).attr("href");
	message.reply(`wos in der welt der stars und sternchen passiert? I verrots enk: \n ${mainUrl + urlExtension}`);
}; 