//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
let more = String.fromCharCode(8206);
let done = '🛑';
    m.react(done);
    m.reply('*تــم إلــغــاء تــنــشــيــط الــبــوت فــي هــذه الــمــجــمــوعــة🛑*')
}

handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['باند','الغاء-تنشيط','banchat', 'chatoff'] 

export default handler

