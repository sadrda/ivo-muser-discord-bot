const axios = require("axios");

module.exports = (message) => {
	const name = message.content.split(" ");
	name.splice(0, 2);
	const urlName = name.join("%20");
	axios.get(`https://api.diversitydata.io/?fullname=${urlName}`)
		.then((response) => {
			const analysis = response.data;
			message.reply(`Dr ${ analysis.fullname } isch zu ${ Math.round(+analysis["ethnicity probability"] * 10000) / 100 }% ${ analysis.ethnicity } und zu ${ Math.round(+analysis["gender probability"] * 10000) / 100 }% ${ analysis.gender}`);
		});
};