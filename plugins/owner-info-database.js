let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*عدد المستخدمين حاليا:* ${totalreg}\n*عدد المستخدمين المسجليين في البوت:* ${rtotalreg}`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.owner = true
export default handler
