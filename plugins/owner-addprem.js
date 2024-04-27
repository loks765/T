//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let more = String.fromCharCode(8206);
  let done = '⭐';
  m.react(done);
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ *ضع علامة أو أذكر شخصًا ما*\n\n📌 *مثال* : ${usedPrefix + command} *@منشن*`
if (global.prems.includes(who.split`@`[0])) throw '✳️ *المستخدم المذكور بالفعل ممتاز*'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat,`
*┌───⊷*
*▢〉⭐‣ مــمــيــز*
*└──────────────⊷*
*┌───⊷*
*▢〉@‣ @${who.split`@`[0]}* 
*▢〉✅‣ الآن أصـبـحـت مـسـتـخـدـمًـا مـتـمـيـزًا*
*└──────────────⊷*`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['مميز','addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
