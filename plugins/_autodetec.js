import { WAMessageStubType } from '@adiwajshing/baileys';

export async function before(m, { conn }) {
    if (!m.messageStubType || !m.isGroup) return;

    let usuario = `@${m.sender.split('@')[0]}`;
    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    if (m.messageStubType == 21) {
        await conn.sendMessage(m.chat, { text: `${usuario} اسم جديد للمجموعة:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 22) {
        await conn.sendMessage(m.chat, { text: `${usuario} صورة جديدة للمجموعة`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 24) {
        await conn.sendMessage(m.chat, { text: `${usuario} وصف جديد للمجموعة:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 25) {
        await conn.sendMessage(m.chat, { text: `🔒 حالياً *${m.messageStubParameters[0] == 'on' ? 'للمسؤولين فقط' : 'للجميع'}* يمكنكم تعديل معلومات المجموعة.`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 26) {
        await conn.sendMessage(m.chat, { text: `المجموعة *${m.messageStubParameters[0] == 'on' ? 'مغلقة 🔒' : 'مفتوحة 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'للمسؤولين فقط' : 'للجميع'} يمكنكم الانضمام.`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 29) {
        await conn.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split('@')[0]} *أصبح زعيماً*\n\n*تمت إضافتك كمسؤول*: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0]] }, { quoted: fkontak });
    } else if (m.messageStubType == 30) {
        await conn.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split('@')[0]} *لم يعد زعيماً*\n\n*تمت إزالتك من المسؤولين*: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0]] }, { quoted: fkontak });
    } else if (m.messageStubType == 72) {
        await conn.sendMessage(m.chat, { text: `${usuario} لقد تم تغيير مدة الرسائل المؤقتة إلى *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak });
    } else if (m.messageStubType == 123) {
        await conn.sendMessage(m.chat, { text: `${usuario} قام بتعطيل *الرسائل* المؤقتة.`, mentions: [m.sender] }, { quoted: fkontak });
    } else {
        console.log({
            messageStubType: m.messageStubType,
            messageStubParameters: m.messageStubParameters,
            type: WAMessageStubType[m.messageStubType]
        });
    }
}
