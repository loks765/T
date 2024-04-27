let handler = async (m, { conn,usedPrefix, command, text}) => {
String.fromCharCode(8206);
let done = '⭐';
m.react(done)
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, `✳️ *بــاســتــخــدام الأمــــر* \n *${usedPrefix + command}* *@بطاقة شعار*  *(أو الرد على رسالة)*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `✳️ *الــرقــم غــيــر صــحــيــح*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
m.reply(`*⭐ تــمــت تــرقــيــة الــمــســتــخــدم*`)
}}
handler.help = ['promote']
handler.tags = ['group']
handler.command = ['ترقية','ترقيه','promote', 'promover'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
