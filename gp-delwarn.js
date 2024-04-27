
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `*✳️ ضــع عــلامــة أو أذكــر شــخــصًــا مــا*`
        if (!(who in global.db.data.users)) throw `*✳️ لـم يـتـم الـعـثـور عـلـى الـمـسـتـخـدم فـي قاعـدة الـبـيـانـات الـخـاصـة بـي*`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`*⚠️ حـــذف الأنـــذار ⚠️*
*┌─────⊷*
*▢ ❗️ انــــذار: -1*
*▢ ‼︎ مـــجمـــوع الأنــــذار:* *${warn - 1}*
*└──────────────⊷*`)
         m.reply(`*لــقــد خــفــض أحــد الــمــشــرفــيــن تــحــذيــرك، والآن عــنــدك* *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('*✳️ الـمـسـتـخـدم لــيــس لــديــه تــحــذيــر*')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['رفع-الأنذار','رفع-الانذار','رفع-انذار','حذف-الأنذار','احذف-الأنذار','احذف-انذار','احذف-الانذار','حذف-الانذار','حذف-انذار','رفع','delwarn', 'unwarn'] 
handler.group = true
handler.botadmin = true
handler.admin = true

export default handler
