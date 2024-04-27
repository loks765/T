//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206);
    let done = '✅';
        m.react(done);
    if (!who) throw `✳️ *ضــع عــلامــة عــلــى الــمــســتــخــدم أو أذــكــره لإلــغــاء الــحــظــر*`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `
✅ *تــم الــغــاء الــحــظــر*
───────────
@${who.split`@`[0]} *تــم رفــع الــحــظــر عــنــه*`, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^رفع-حظر|فكحظر|فكالحظر|فك-حظر|الغاء-الحظر|unban$/i
handler.rowner = true

export default handler
