module.exports = (message, text) => {
	if(text.toLowerCase().includes("oder") || text.toLowerCase().includes("odr")) {
		let splitMessage = text.split(" ");
		splitMessage.forEach((word, i) => {
			if(word === "oder" || word === "Oder" || word === "Odr" || word === "odr"){
				if(splitMessage[i - 1] && splitMessage[i + 1]){
					message.reply(Math.random() > 0.5 ? `Auf jeden foll ${ splitMessage.slice(0, i).join(" ")}` 
						: `I tendier zu ${ splitMessage.slice(i + 1, splitMessage.length).join(" ").replace("?", "")}`);
				}
			}
		});
	}
	else if(text.toLowerCase().startsWith("wer")){
		switch(Math.floor(Math.random() * 20)) {
		case 0:
			message.reply("dr gattuso");
			break;
		case 1:
			message.reply("dr silvius magnago");
			break;
		case 2:
			message.reply("dr ettore tolomei");
			break;
		case 3:
			message.reply("dr alessio antonio pellegrini");
			break;
		case 4:
			message.reply("dr simon");
			break;
		case 5:
			message.reply("dr pritzi");
			break;
		case 6:
			message.reply("dr sadrda");
			break;
		case 7:
			message.reply("dr tscholl");
			break;
		case 8:
			message.reply("di hannah");
			break;
		case 9:
			message.reply("dr dilitz");
			break;
		case 10:
			message.reply("dr stief");
			break;
		case 11:
			message.reply("dr vinci");
			break;
		case 12:
			message.reply("dr pfau");
			break;
		case 13:
			message.reply("i, dr ivo muser");
			break;
		case 14:
			message.reply("dr veith");
			break;
		case 15:
			message.reply("dr gobus");
			break;
		case 16:
			message.reply("dr gunzn");
			break;
		case 17:
			message.reply("dr londeshauptmonn");
			break;
		case 18:
			message.reply("dr richard theiner");
			break;
		case 19:
			message.reply("dr reinhold messner");
			break;

		}
	} else if (text.toLowerCase().startsWith("was") || text.toLowerCase().startsWith("wos")) {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("die bibel");
			break;
		case 1:
			message.reply("dr frosch am kreiz");
			break;
		case 2:
			message.reply("die forst brauerei");
			break;
		case 3:
			message.reply("di disco fix");
			break;
		case 4:
			message.reply("an speckkneidl");
			break;
		case 5:
			message.reply("an olmkas");
			break;
		case 6:
			message.reply("a selchkuchl");
			break;
		case 7:
			message.reply("a vinschger paarl");
			break;
		case 8:
			message.reply("a zwoa holbe");
			break;
		case 9:
			message.reply("a gipflkreiz");
			break;
		}
	}
	else if (text.toLowerCase().startsWith("wo") || text.toLowerCase().startsWith("wou")) {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("ban londtog");
			break;
		case 1:
			message.reply("af goeflan, ba dr kreizung, do wo normalerweise niamend steaht");
			break;
		case 2:
			message.reply("af vetzan");
			break;
		case 3:
			message.reply("af trafoi");
			break;
		case 4:
			message.reply("ban remo");
			break;
		case 5:
			message.reply("in marein");
			break;
		case 6:
			message.reply("im pseiertol");
			break;
		case 7:
			message.reply("im ultentol");
			break;
		case 8:
			message.reply("in unterlond");
			break;
		case 9:
			message.reply("im ouberlond");
			break;
		}
	}
	else if (text.toLowerCase().startsWith("wieso") || text.toLowerCase().startsWith("wisou") || text.toLowerCase().startsWith("brum")) {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("weil heint giggermanta isch");
			break;
		case 1:
			message.reply("weil dr tryndamere gefeedet wor");
			break;
		case 2:
			message.reply("wegen dr flashbang");
			break;
		case 3:
			message.reply("wegen die auslaender");
			break;
		case 4:
			message.reply("jo wisou nitta? konnma schumol so mochn");
			break;
		case 5:
			message.reply("wegen denn corona virus");
			break;
		case 6:
			message.reply("weil dr rai sender bouzn drhintersteckt");
			break;
		case 7:
			message.reply("weils schusch niamet tuat");
			break;
		case 8:
			message.reply("weils in langes schu so worm wor");
			break;
		case 9:
			message.reply("weil schusch dr wolf ins die viecher reisst");
			break;
		}
	}
	else if (text.toLowerCase().startsWith("wie") || text.toLowerCase().startsWith("wia")) {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("huaraguat");
			break;
		case 1:
			message.reply("kannt besser sein");
			break;
		case 2:
			message.reply("mit di fiass");
			break;
		case 3:
			message.reply("volle geil");
			break;
		case 4:
			message.reply("so wia in die guatn oltn zeitn");
			break;
		case 5:
			message.reply("guat, und diar?");
			break;
		case 6:
			message.reply("uan schritt nochn ondern");
			break;
		case 7:
			message.reply("es isch zeit an uhr zu kafn");
			break;
		case 8:
			message.reply("jo guat, iatz weahrt giahn dr ouberwind kemmen");
			break;
		case 9:
			message.reply("so wia in sunnta in dr kirch");
			break;
		}
	}
	else if (text.toLowerCase().startsWith("wenn")) {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("Uma 6e");
			break;
		case 1:
			message.reply("1933");
			break;
		case 2:
			message.reply("1945");
			break;
		case 3:
			message.reply("Uma 7e ummer");
			break;
		case 4:
			message.reply("um dreiviartl drui");
			break;
		case 5:
			message.reply("morgen");
			break;
		case 6:
			message.reply("gestern");
			break;
		case 7:
			message.reply("1807");
			break;
		case 8:
			message.reply("leschts johr");
			break;
		case 9:
			message.reply("negschts johr");
			break;
		}
	}
	else {
		switch(Math.floor(Math.random() * 10)) {
		case 0:
			message.reply("jo lougisch");
			break;
		case 1:
			message.reply("auf koan foll");
			break;
		case 2:
			message.reply("hmmm schwar zu sogen");
			break;
		case 3:
			message.reply("jo hundert prozentig");
			break;
		case 4:
			message.reply("jo volle kanne");
			break;
		case 5:
			message.reply("eppr nit");
			break;
		case 6:
			message.reply("jo lougisch nit, spinnsch?");
			break;
		case 7:
			message.reply("i denk schun");
			break;
		case 8:
			message.reply("holbwegs");
			break;
		case 9:
			message.reply("hem binni iberfrog");
			break;
		}
	}

};