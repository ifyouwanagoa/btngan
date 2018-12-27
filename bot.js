const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
client.user.setGame(`♥ BotEpic ♥ | use: # `,'https://www.twitch.tv/ℕ o v a Codes♥');
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
🖤(#tag @someone ⟿⟿⟿⟿ To see the tag)🖤
🖤(#bc ⟿⟿⟿ Brodcast all member)🖤
🖤(#servers ⟿⟿ To know the servers which the bot joined)🖤
🖤(#active ⟿⟿⟿ Verify your self)🖤
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
client.channels.find('id', '527458463777947658').setName("♥𝕎");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃ℂ");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃ℂ𝕆");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃ℂ𝕆𝕄");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃ℂ𝕆𝕄𝔼");
client.channels.find('id', '527458463777947658').setName("♥𝕎𝔼𝕃ℂ𝕆𝕄𝔼♥");
  }, 3000);
});


client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('471121072591470604').roles.find("name", "Rainbow").setColor("RANDOM");

  };
  setInterval(lol, 5000);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    
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
  
  
      })
    }
    
  })

client.on('message', n3k4a => {
var prefix = "#";
if(n3k4a.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!n3k4a.channel.guild) return;
if(!n3k4a.guild.member(n3k4a.author).hasPermission("MANAGE_CHANNELS")) return n3k4a.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!n3k4a.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return n3k4a.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
n3k4a.guild.channels.forEach(m => {
m.delete();
});// n3k4a jedol / Toxic Codes
}// n3k4a jedol / Toxic Codes
if(n3k4a.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!n3k4a.channel.guild) return;
if(!n3k4a.guild.member(n3k4a.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return n3k4a.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!n3k4a.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return n3k4a.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
n3k4a.guild.roles.forEach(m => {
m.delete();
});// n3k4a jedol / Toxic Codes
n3k4a.reply("`تم حذف جميع الرتب بنجاح`")
}// n3k4a jedol / Toxic Codes
});

client.on('message', msg => {
  let prefix = '#';//البرفكس
  let mentions = msg.guild.member(msg.mentions.users.first()); 
if(msg.content.startsWith(prefix + "tag")){ // #tag @someone
  
 msg.channel.send(`**tag [${mentions}] with ID: [${mentions.user.id}]
 
 tag user is [${mentions.user.discriminator}]
 
 sender by ${msg.author}
 **`);

}

})

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

client.on('message', message => {
  let anything = [
    "hi",
    "hi",
    "hello",
    "hello"
    
    
  ]
  if(message.content === 'hi'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.on('message', message => {
  let anything = [
    "اكو اكو",
   
    
    
  ]
  if(message.content === 'اكو عرب بالطيارة؟'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});


client.on('message', message => {
    if (message.content === ('#bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@352533519068823556>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

client.on('message',async message => {//Toxic Code
  if(message.author.bot || message.channel.type === '#bc') return;
  let args = message.content.split(' ');
  if(args[0] === `#bc`) {//Toxic Code
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {//Toxic Code
      message.guild.members.forEach(g => {//Toxic Code
        g.send(args.slice(1).join(' ')).then(() => {//Toxic Code
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);//Toxic Code
        });//Toxic Code
      });//Toxic Code
    });//Toxic Code
  }
});//Toxic Code

client.on("message", message => {
  if(message.content.startsWith("#active")) {     // ااكتب البرفيكس والامر 
    let num = Math.floor((Math.random() * 4783) + 10);
        message.channel.send(`**يرجاء كتابة الرقم التالي:** **${num}**`).then(m => {//Toxic Codes
      message.channel.awaitMessages(res => res.content == `${num}`, {//Toxic Codes
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {//Toxic Codes
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "GoldenMember"));  //  اسم الرتبة
      }).catch(() => {//Toxic Codes
        m.edit(`لقد أخذت وقتًا طويلاً لكتابة الرقم.  قم بإعادة كتابة الأمر مرة أخرى إذا كنت تريد التحقق من هويتك..`).then(m2 => m.delete(15000));
      });
    });
  }
});
//Toxic Codes

client.on('guildMemberAdd', (member) => {
    var channel = member.guild.channels.find('name', 'chatting');
channel.send(`@${member.user.tag} تم اعطاء العضو رتبت ممبر`)
member.addRole(member.guild.roles.find('name', 'new'));
});


client.login(process.env.BOT_TOKEN);
