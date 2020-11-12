const axios = require("axios");


module.exports = (message) => {
	axios.get("http://www.ourmanna.com/verses/api/get?format=text&order=random")
		.then((response) => {
			message.reply(response.data);
		});
};