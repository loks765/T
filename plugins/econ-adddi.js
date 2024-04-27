import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  let done = '💎';
  m.react(done);
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ *مــنــشــن الــشــخــص@*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ *أدخــل كــمــيــة الــمــاس الــتــي تــريــد إضــافــتــهــا*'
  if (isNaN(txt)) throw '🔢 *أرقــام فــقــط*'
  let dmt = parseInt(txt)
 let diamond = dmt
    
  if (diamond < 1) throw '✳️ *الــحــد الأدنــى 1*'
  let users = global.db.data.users
 users[who].diamond += dmt

conn.fakeReply(m.chat, `*┌───⊷*\n*▢〉💎 ≡ تــمــت إضــافــة الألــمــاس*\n*▢〉💎‣ الــمــجــمــوع:↶*\n*▢〉💎‣ +${dmt} الــمــاس*\n*└──────────────⊷*`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['الماس+','adddi'] 
handler.rowner = true

export default handler

