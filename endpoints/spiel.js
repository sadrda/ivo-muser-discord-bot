const ytdl = require("ytdl-core");

module.exports = async (message) => {
	if (message.member.voice.channel) {
		const splitMessage = message.content.split(" ");
		const connection = await message.member.voice.channel.join();
		connection.play(ytdl(splitMessage[2], { filter: "audioonly" }));
	} else {
		message.reply("Geahsch mr gian bitte zearsch in a Stimmenkanal inni? Geah dai, seimr so guat.");
	}
};