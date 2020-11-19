const axios = require("axios");
const {openweathermapKey} = require("../credentials.json");
module.exports = (message) => {
	const splitMessage = message.content.split(" ");
	if(splitMessage.length >= 2) {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${splitMessage[2]}&appid=${openweathermapKey}&units=metric&lang=de`)
			.then((response) => {
				const data = response.data;
				const weatherReply = `In ${splitMessage[2]} hots ollaweil ${data.main.temp}°C, ober es fuehlt sich oun wia ${data.main.feels_like}°C, ${data.main.temp > 15 ? "es isch fein draussen." : "leg enk am besten a jaggele un."}
                Es herrscht ${data.weather[0].description} und es isch zu zu ${data.clouds.all}% bewölkt. 
                ${data.clouds.all > 60 ? " Kannt giahn regnen ober i bin mr nit sicher." : data.clouds.all < 10 ? " Kuan Welkl weit und breit." : ""}
                Dr Wind blost mit ${data.wind.speed}m/s in ${data.wind.deg}° Richtung. ${data.wind.speed > 7 ? " Nemmps enk a Windstopper mit." : ""}
                `;
				message.reply(weatherReply);
			});
	}
};