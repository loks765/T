import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    let done = '🪙';
    m.react(done);
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ *مــنــشــن الــشــخــص@*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ *أدخــل كــمــيــة الــذهـــب الــتــي تــريــد إضــافــتــهــا*'
    if (isNaN(txt)) throw '🔢 *أرقــام فــقــط*'
    let dmt = parseInt(txt)
    let gold = dmt

    if (gold < 1) throw '✳️ *الــحــد الأدنــى 1*'
    let users = global.db.data.users
   users[who].credit += dmt

conn.fakeReply(m.chat, `*┌───⊷*\n*▢〉🪙 ≡ تــمــت إضــافــة الــذهـــب*\n*▢〉🪙‣ الــمــجــمــوع:↶*\n*▢〉🪙‣ +${dmt} ذهـــب*\n*└──────────────⊷*`, who, m.text)
}

handler.help = ['addgold <@user>']
handler.tags = ['economy']
handler.command = ['addgold','ذهب+'] 
handler.rowner = true

export default handler
