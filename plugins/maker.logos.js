
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
	let tee = `✳️ أدخل نصًا قصيرًا\n\n📌 مثال: *${usedPrefix + command}* RAFF`
	let too = `✳️ افصل النص بواسطة *+*\n\n📌 مثال:\n*${usedPrefix + command}* RAFF *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	case 'لوجو3': //
	if (!text) throw tee
	let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
	conn.sendFile(m.chat, ne, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 
	case 'لوجو2': //
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 

	case 'لوجو1': //
	if (!text) throw too
	if (!text.includes('+')) throw too
	let [a, b] = text.split`+`   
	let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, ph, 'logo.png', `✅ النتيجة`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['لوجو1', 'لوجو2', 'لوجو3']
handler.tags = ['maker']
handler.command = /^(لوجو1|لوجو2|لوجو3)$/i

export default handler
