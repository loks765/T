import { spawn } from 'child_process'

let handler = async (m, { conn, isROwner, text }) => {
  if (!process.send) throw 'الرجاء تشغيل البرنامج بواسطة الأمر "node index.js" بدلاً من "node main.js"'
  if (conn.user.jid == conn.user.jid) {
    await m.reply('*🔄 جــاري إعــادة تــشــغــيــل الــبــوت...*\n*الــرجــاء الانــتــظــار لــحــظــة*')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['ريستارت','restart', 'reiniciar']

handler.owner = true

export default handler
