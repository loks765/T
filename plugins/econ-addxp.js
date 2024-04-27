//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  let done = '🧬';
  m.react(done);
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ *مــنــشــن الــشــخــص@*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ *أدخــل كــمــيــة الــخــبــرة الــتــي تــريــد إضــافــتــهــا*'
  if (isNaN(txt)) throw '🔢 *أرقــام فــقــط*'
  let xp = parseInt(txt)
  let exp = xp

  if (exp < 1) throw '✳️ *الــحــد الأدنــى 1*'
  let users = global.db.data.users
  users[who].exp += xp

conn.fakeReply(m.chat, `*┌───⊷*\n*▢〉🧬 ≡ تــمــت إضــافــة الــخــبــرة*\n*▢〉🧬‣ الــمــجــمــوع:↶*\n*▢〉🧬‣ +${xp} خــبــرة*\n*└──────────────⊷*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['خبرة+','addxp'] 
handler.rowner = true
handler.premium = true


export default handler
