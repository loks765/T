//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let name = conn.getName(m.sender);
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    if (user) { // تأكد من أن الكائن 'user' معرف
        user.role = global.rpg.role(user.level).name
        if (before !== user.level) {
m.reply(`> *˼🔝˹ لــقــد ترقــى مــســتواك╿↶*
*╮──────────────────⟢ـ*
*┇〉📈‣ الـمـسـتـوى الـسـابـق: ${before}* 
*┇〉🆙‣ الـمــسـتـوى الــحـالـي: +${user.level}*
*┇〉🏆‣ الــتـــصــنــيــف: ${user.role}*
*╯──────────────────⟢ـ*
> *لإيـقـاف الـتـرقـيـة الـتـلـقـائـيـة╿↶*
> *˹🔕˼ ❮ .off autolevelup ❯*`.trim())
        }
    }
}


