import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let grupos = [nna, nn, nnn, nnnt]
    let gata = [img5, img6, img7, img8, img9]

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    var number = text.split`@`[1]

    if(!text && !m.quoted) return await conn.reply(m.chat, `هل هناك شيء؟🤔\n الإتصال أو الرد على الرسالة للرد على طلب الشراكة`, m)

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
        let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
        let yo = conn.getName(m.sender)
        let tu = conn.getName(who)

        if(!users) return await conn.reply(m.chat, `لم يُعثر على المستخدم لإرسال طلب الشراكة 🙄 يرجى التأكد من إرسال طلب الشراكة في المجموعة المناسبة`, m)

        if(user === m.sender) return await conn.reply(m.chat, `أنت الآن الأم 😂 لا يمكنك إرسال طلب الشراكة لنفسك`, m)

        if(user === conn.user.jid) return await conn.reply(m.chat, `لا يمكنك إرسال طلب الشراكة للروبوت نفسه 😹`, m)

        if(global.db.data.users[user].pasangan != m.sender){ 
            return await conn.reply(m.chat, `لا يمكن إرسال طلب الشراكة للشخص المختار، يرجى الاتصال ب *${tu}* ليقبل الشراكة`, m)	
        } else {
            global.db.data.users[m.sender].pasangan = user
            return await conn.reply(m.chat, `🥳😻 مبارك!!! *${tu}*\n✅ تمت الموافقة على طلب الشراكة بنجاح\n\nيمكنك الآن التواصل مع شريكك الجديد 💖😁`, m)	
        }
    }
}

handler.help = ['قبول']
//handler.command = /^(aceptar|acepto|قبول)$/i
handler.group = true

export default handler
