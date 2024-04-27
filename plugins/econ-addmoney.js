import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    let done = '💲';
    m.react(done);
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ *مــنــشــن الــشــخــص@*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ *أدخــل كــمــيــة الــنــقــود الــتــي تــريــد إضــافــتــهــا*'
    if (isNaN(txt)) throw '🔢 *أرقــام فــقــط*'
    let dmt = parseInt(txt)
    let money = dmt

  if (money < 1) throw '✳️ *الــحــد الأدنــى 1*'
    let users = global.db.data.users
   users[who].money += dmt

conn.fakeReply(m.chat, `*┌───⊷*\n*▢〉🪙 ≡ تــمــت إضــافــة الــنــقــود*\n*▢〉💲‣ الــمــجــمــوع:↶*\n*▢〉💲‣ +${dmt} نــقــود*\n*└──────────────⊷*`, who, m.text)
}

handler.help = ['addmoney <@user>']
handler.tags = ['economy']
handler.command = ['نقود+'] 
handler.rowner = true

export default handler
