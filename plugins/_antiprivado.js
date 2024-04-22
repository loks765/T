export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe) return !0
    if (m.isGroup) return !1
    if (!m.message) return !0 
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') || m.text.includes('deletebot') ||  m.text.includes('eliminarsesion') ||  m.text.includes('deletesesion') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (bot.antiPrivate && !isOwner && !isROwner) {
        await m.reply(`*مرحبا @${m.sender.split`@`[0]}, هذا يمنع استخدام الروبوت الخاص*\n\n*إذا كنت ترغب في استعمال الروبوت*\n\n*🚫https://chat.whatsapp.com/IR4OMJQk8zLD14FcIkUM1c🚫*\n\n*لاستخدام الروبوت، انضم إلى مجموعة مسؤولي الروبوت*\n*سوف اقوم ب حظرك الأن*\n*${nn}*`, false, { mentions: [m.sender] })
        await conn.updateBlockStatus(m.sender, "block")
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat')
        return !1
    }
}