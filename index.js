const Discord = require('discord.js');
//const {prefix, token} = require('./config.json');
const client = new Discord.Client();
var prefix = ("an!");

client.on('ready', ()=> {
	console.log("bitch lasagna");
});

client.on('message', async message =>{
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ping')
	{
		message.reply("fast as fuc boi");
	}

	else if (command === 'server')
	{
		const serverEmbed = new Discord.MessageEmbed()
		.setTitle(`server name: ${message.guild.name}`)
		.setDescription(`this server has ${message.guild.memberCount}\n and was created on ${message.guild.createdAt}`)
		.setThumbnail('https://cdn.discordapp.com/emojis/745144695214047233.gif?v=1')
		.setTimestamp()
		message.channel.send(serverEmbed);
	}
	else if (command === 'say')
	{
		if (!args.length)
		{
			return message.reply("thought you got me, eh...");
		}
		if (message.content.includes('@everyone'||'@here')&& !message.member.hasPermission("MENTION_EVERYONE"))
		{
			return message.reply("you were not supposed to say that :)");
		}
		else 
		{
			message.channel.send(`${args.join(' ')}`)
			message.delete(args)
		}
	}

	else if (command === 'help')
	{
		const helpEmbed = new Discord.MessageEmbed()
		.setTitle("prefix is an!")
		.setDescription(`server: displays server information. \n ping: replies with fast as fuc. \n say: well, it says what you want it to say.\nuser-info: returns some useful info on yourself.`)
		.setFooter(`hope you found this helpful ${message.author.name}`)
		message.channel.send(helpEmbed);
	}

	else if (command === 'user-info')
	{
		const userEmbed = new Discord.MessageEmbed()
		.setTitle(`${message.author.name}`)
		.setDescription(`your account was created on${message.author.createdAt}\nwith the discriminator of: ${message.author.discriminator} \n ${message.author.tag}`)
		.setThumbnail(`${message.author.avatarURL()}`)
		message.channel.send(userEmbed)
	}


});
client.login('NzU2MjYzMDc1MDEwNTc2NDU2.X2PS3w.YvHjBowOoote-7Rf5spvaX6SOyE');