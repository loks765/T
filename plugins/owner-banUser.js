//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206);
    let done = '🛑';
        m.react(done);
    if (!who) throw `🛑 *ضــع عــلامــة أو أذكــر شــخــصًــا مــا*\n📌 *مــــثــــال* : ${usedPrefix + command} *@مــنــشــن*`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
🛑 *مــحــظــور*
───────────
@${who.split`@`[0]} *لــن تــتــمــكــن بــعــد الآن مــن اســتــخــدام أوامــري* `, m, { mentions: [who] })
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^حظر|ban$/i
handler.rowner = true

export default handler
