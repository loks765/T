
let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `▢ *المستخدمون المتميزون*\n─────────────\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['قائمة-المتميزون''قائمة-المتميزون','قائمة-المميزون','مميزون','listprem', 'premlist', 'listpremium'] 

export default handler
