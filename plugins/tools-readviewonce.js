
let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

var handler = async (m, { conn }) => {
    if (!/viewOnce/.test(m.quoted?.mtype)) throw '✳️ إنها ليست رسالة عرض مرة واحدة'
 let mtype = Object.keys(m.quoted.message)[0]
 let buffer = await m.quoted.download()
 let caption = m.quoted.message[mtype].caption || ''
 conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
}

handler.help = ['readvo']
handler.tags = ['tools']
handler.command = ['readviewonce', 'read', 'ver', 'readvo','دايم','دائم','فضح']
handler.rowner = true
handler.group = true
export default handler