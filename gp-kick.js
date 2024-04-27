
let handler = async (m, { conn, participants, usedPrefix, command }) => {

let kickte = `*✳️ الاســتــخــدام الــصــحــيــح لــلأوامــر*\n*${usedPrefix + command} @مــــنشــــن*`
  let more = String.fromCharCode(8206);
  let done = '💨';
  m.react(done);
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`*تــــم إخــــراجــــة💨*`)

}

handler.help = ['kick','طرد']
handler.tags = ['group']
handler.command = ['طرد','شلوط','expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
