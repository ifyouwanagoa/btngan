const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`♥ BotEpic ♥ `,'https://www.twitch.tv/ℕ o v a Codes♥');
  });


client.on('message', message => {
              var prefix = "#" ;
  if (message.content.startsWith(prefix + "help")) {
  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
🕴_____ 🖤😎 - BotEpic - 😎🖤  _____🕴

🖤(#dc ⟿⟿⟿ Delete all channels)🖤
🖤(#dr ⟿⟿⟿⟿ Delete all roles)🖤
🖤(#serooms ⟿⟿⟿⟿ Create rooms)🖤
🖤(#seroles ⟿⟿⟿⟿ Create roles)🖤
🖤(#bc ⟿⟿⟿ Brodcast all member)🖤
🖤(#call ⟿⟿ Contact with admin)🖤
🖤(#report ⟿⟿⟿ Report a member)🖤
🖤(#vk ⟿⟿⟿⟿⟿ Kick from voice)🖤
🖤(#kick ⟿⟿⟿⟿⟿⟿ Kick member)🖤
🖤(#ban ⟿⟿⟿⟿⟿⟿⟿ Ban member)🖤
🖤(#role all ⟿⟿⟿⟿⟿ From All)🖤
🖤(#role humans ⟿ From All Humans)🖤
🖤(#role bots ⟿⟿⟿ From All Bots)🖤
🖤(#clear ⟿⟿⟿⟿ Delete all chat)🖤
🖤(#mvall ⟿ Move all to you voice)🖤
🖤(#hc ⟿⟿⟿⟿⟿⟿⟿ Hide channel)🖤
🖤(#sc ⟿⟿⟿⟿⟿⟿⟿ Show channel)🖤
🖤(#mc ⟿⟿⟿⟿⟿⟿⟿ Mute channel)🖤
🖤(#unmc ⟿⟿⟿⟿⟿ Unmute channel)🖤
🖤(#mute ⟿⟿⟿⟿⟿⟿ Mute member)🖤
🖤(#unmute ⟿⟿⟿⟿ Unmute member)🖤

🕴_____ 🖤😎 - BotEpic - 😎🖤  _____🕴

 `)
   message.channel.sendEmbed(embed)
   
   }
   });




client.on('message', message => {
    if (message.content === "#serooms") {
         if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('**:x: You Dont Have Perms `MANAGE_CHANNELS`**');
       if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
	    

	    
	    
	
     message.guild.createChannel('Talk₁', 'voice')
     message.guild.createChannel('Talk₂', 'voice')
     message.guild.createChannel('Talk₃', 'voice')
     message.guild.createChannel('Chatting', 'text')

     message.guild.createChannel('✲Bot-Commands', 'text')


message.channel.sendMessage('الرجاء الانتظار ريث ما يتم صناعة السيرفر')
}
});

client.login(process.env.BOT_TOKEN);
