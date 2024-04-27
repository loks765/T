let handler = async (m, { conn, text }) => {
  let tag = `~_*@${m.sender.replace(/@.+/, '')}*_~`
  let mentionedJid = [m.sender]
  conn.reply(m.chat, tag, m, { contextInfo: { mentionedJid }})
}
handler.help = ['tagme']
handler.tags = ['group']
handler.command = /^منشنلي$/i
handler.register = true
handler.group = false

export default handler