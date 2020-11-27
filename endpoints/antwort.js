module.exports = (message, text) => {
	if(text.includes("oder") || text.includes("Oder")) {
		let splitMessage = text.split(" ");
		splitMessage.forEach((word, i) => {
			if(word === "oder" || word === "Oder"){
				if(splitMessage[i - 1] && splitMessage[i + 1]){
					message.reply(Math.random() > 0.5 ? `Auf jeden foll ${ splitMessage[i - 1]}` : `I tendier zu ${ splitMessage[i + 1].replace("?", "")}`);
				}
			}
		});
	}
	else if(text.startsWith("wer") || text.startsWith("Wer")){
		switch(Math.floor(Math.random() * 10)) {
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
		}
	} else if (text.startsWith("was") || text.startsWith("Was") || text.startsWith("wos") || text.startsWith("Wos")) {
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
	else if (text.startsWith("wo") || text.startsWith("Wo")) {
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
	else if (text.startsWith("wenn") || text.startsWith("Wenn")) {
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