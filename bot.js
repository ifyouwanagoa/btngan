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

client.on('message', message => {
var prefix = "#";
       if(message.content === prefix + "hc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "sc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اظهار الشات__✅**")
              });
    }
       
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '527476890512916504').setName("♥W");
client.channels.find('id', '527476890512916504').setName("♥We");
client.channels.find('id', '527476890512916504').setName("♥Wel");
client.channels.find('id', '527476890512916504').setName("♥Welc");
client.channels.find('id', '527476890512916504').setName("♥Welco");
client.channels.find('id', '527476890512916504').setName("♥Welcom");
client.channels.find('id', '527476890512916504').setName("♥Welcome");
client.channels.find('id', '527476890512916504').setName("♥Welcome♥");
  }, 3000);
});

client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === 'السلام عليكم'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('526505018682114057').roles.find("name", "Color").setColor("RANDOM");
  };
  setInterval(lol, 5000);
});

client.on('message', msg => {
    if(msg.author.bot) return;//Toxic Codes
    
    if(msg.content === '#servers') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  }
});


client.login(process.env.BOT_TOKEN);
