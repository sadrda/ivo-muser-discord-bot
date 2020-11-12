const commands = require("../commands.json");

module.exports = (message) => {
	message.reply(`Auf mein Kommando, Jünger:\n\n${ commands.join("\n")}`);
};