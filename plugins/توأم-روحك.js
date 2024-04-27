import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
    
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let love =  `*❴ ❥ نسبة التشابه ❥ ❵*

*@${m.sender.split("@")[0]}*

*توأم روحك هو  ${user(a)}* 
 *نسبة التشابه هي ${Math.floor(Math.random() * 100)}%*
*اطلب منه أن يكون صديقك؟*

`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(توأم|توام)$/i
handler.register = true
export default handler