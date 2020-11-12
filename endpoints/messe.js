const ytdl = require("ytdl-core");

module.exports = async (message) => {
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play(ytdl("https://www.youtube.com/watch?v=UeBFB85YAAc", { filter: "audioonly" }));
	} else {
		message.reply("Geahsch mr gian bitte zearsch in a Stimmenkanal inni? Geah dai, seimr so guat.");
	}
};