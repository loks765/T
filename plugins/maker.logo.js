let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	 let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
    let user = global.db.data.users[m.sender]
   let tee = `✳️ أدخل نصًا قصيرًا\n\n📌 مثال: *${usedPrefix + command}* RAFF`
   let too = `✳️ افصل النص بواسطة *+*\n\n📌 مثال:\n*${usedPrefix + command}* RAFF *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
     case 'لوجو4': 
	if (!text) throw tee
	let ut = global.API('fgmods', '/api/textpro/lightglow', { text }, 'apikey')
	conn.sendFile(m.chat, ut, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 
     case 'لوجو5': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let lr = global.API('fgmods', '/api/textpro/layered', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, lr, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break  
     case 'لوجو6': 
	if (!text) throw tee
	let da = global.API('fgmods', '/api/textpro/advancedglow', { text }, 'apikey')
	conn.sendFile(m.chat, da, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 
     case 'لوجو7':
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/diamond', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 
  default:
} 
} 
handler.help = ['لوجو4', 'لوجو5', 'لوجو6', 'لوجو7']
handler.tags = ['maker']
handler.command = /^(لوجو4|لوجو5|لوجو6|لوجو7)$/i

export default handler
