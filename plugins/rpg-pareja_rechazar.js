import fetch from 'node-fetch'
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, groupMetadata }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    var number = conn.getName(who)

    // Replace 'participants' with another source for user information
    let users = m.isGroup ? groupMetadata.participants : {}

    if(!text && !m.quoted) return await conn.reply(m.chat, `ماذا؟ 🤔 يرجى وضع الاقتباس أو النص الخاص بالشخص الذي ترغب في رفض عرضه`, m.sender, { quoted: fkontak })

    try {
        if(text) {
            var user = number + '@s.whatsapp.net'
        } else if(m.quoted.sender) {
            var user = conn.getName(m.quoted.sender)
        } else if(m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
        }  
    } catch (e) {
    } finally {

        let yo = conn.getName(m.sender)
        let tu = conn.getName(who)

        if(!users.find(v => areJidsSameUser(v.jid == user))) return await conn.reply(m.chat, `الشخص غير موجود في هذه المجموعة 🙄 قد يكون غادر أو تم طرده`, m.sender, { quoted: fkontak })

        if(user === m.sender) return await conn.reply(m.chat, `أنت أمي 😂 لا يمكنك رفض نفسك`, m.sender, { quoted: fkontak })

        if(user === conn.user.jid) return await conn.reply(m.chat, `لا يمكنك رفض نفسي 😹`, m.sender, { quoted: fkontak })

        if(global.db.data.users[user].pasangan != m.sender){ 
            return await conn.reply(m.chat, `لم تكن على علاقة مع *${tu}* أصلاً، لا يمكنك رفض شخص غير مقترن بك 🙄`, m.sender, { quoted: fkontak })   
        } else {
            global.db.data.users[user].pasangan = ""
            return await conn.reply(m.chat, `😿 تم إلغاء العلاقة مع *${yo}* بنجاح 🚫 تم إلغاء الارتباط مع *${tu}*\nلا تحزن، ربما هناك فرصة أفضل في المستقبل 🍃`, m.sender, { quoted: fkontak })   
        }
    }
}

//handler.command = /^(rechazar|cancelar)$/i
handler.group = true
export default handler
