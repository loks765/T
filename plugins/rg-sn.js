import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`${sn}`.trim())
}
handler.help = ['mysn']
handler.tags = ['rg']
handler.command = ['تسلسل','nserie', 'sn', 'mysn'] 
handler.register = true
export default handler
