const ytdl = require("ytdl-core");

module.exports = async (message) => {
	if (message.member) {
		const splitMessage = message.content.split(" ");
		if(splitMessage.length > 2) {
			const connection = await message.member.voice.channel.join();
			connection.play(ytdl(splitMessage[2], { filter: "audioonly" }));
		}
		else {
			message.reply("Wos solli spielen? Muasch mor schun ah an Link geben.");
		}
	} else {
		message.reply("Geahsch mr gian bitte zearsch in a Stimmenkanal inni? Geah dai, seimr so guat.");
	}
};