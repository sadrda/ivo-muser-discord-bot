const Discord = require("discord.js");

const {secretToken, botId} = require("./credentials.json");
const hilfe = require("./endpoints/hilfe");
const psalm = require("./endpoints/psalm");
const messe = require("./endpoints/messe");
const spiel = require("./endpoints/spiel");
const stol = require("./endpoints/stol");
const promi = require("./endpoints/promi");
const antwort = require("./endpoints/antwort");
const wetter = require("./endpoints/wetter");
const auslaender = require("./endpoints/auslaender");

const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
	if(message.author.id !== botId) {
		const splitMessage = message.content.split(" ");
		const ivoTag = splitMessage[0].toLowerCase();
		if(message.content === "wos gibs nuis ivo"){
			stol(message);
		}
		if((ivoTag) === "ivo"){
			if(splitMessage.length > 1){
				const command = splitMessage[1].toLowerCase();
				switch(command) {
				case "stol":
					stol(message);
					break;
				case "promi" || "promiflash":
					promi(message);
					break;
				case "messe":
					messe(message);
					break;
				case "psalm":
					psalm(message);
					break;
				case "spiel":
					spiel(message);
					break;
				case "wetter":
					wetter(message);
					break;
				case "auslaender" || "ausländer":
					auslaender(message);
					break;
				default: {
					splitMessage.shift();
					const joinedCommand = splitMessage.join(" ");
					if(joinedCommand.endsWith("?"))
						antwort(message, joinedCommand);
					else
						hilfe(message);
				}
				}
			}
			else
				hilfe(message);
		}
	}
});

client.login(secretToken);
