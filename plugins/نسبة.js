let handler = async (m, { conn, command, text }) => {
String.fromCharCode(8206);
let done = '📍';
m.react(done)
let love = `*┌─⊷「❏ نــســبــة󠀥󠀥 󠀥󠀥󠀥󠀥󠀥📍」⊶*
*نــســبــة  ${text} هــــي ${Math.floor(Math.random() * 1000)}%* *مــــن 1000%*
*┌─⊷「❏ مـثـال الاستـخـدام 📍」⊶↶*
*‣ .نــســبــة حــب الــقــروب لــي*
*└──────────────⊷*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['نسبة']
handler.tags = ['fun']
handler.command = /^(نسبه|نسبة)$/i
handler.register = true
export default handler