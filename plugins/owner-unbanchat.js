//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    let more = String.fromCharCode(8206);
    let done = '✅';
      m.react(done);
    m.reply('*بــوت نــشــط فــي هــذه الــمــجــمــوعــة✅*')   
}
handler.help = ['unbanchat','تنشيط']
handler.tags = ['owner']
handler.command = ['تنشيط','اونباند','chaton','unbanchat','chaton',] 

export default handler
