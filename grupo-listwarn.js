let handler = async (m, { conn, isOwner }) => {
  let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
  let warns = global.db.data.users.warn
  let user = global.db.data.users
  let caption = `*⚠️قــائــمــة الانــذارات*
*╔═══════════════════·•*
║ *الـمـجـمـوع : ${adv.length} الـمـسـتـخـدمـيـن* ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
*╚═══════════════════·•*`
  await m.reply(caption, null, {
      mentions: await conn.parseMention(caption)
  })
}

handler.command = /^(المخالفين|التحذيرات)$/i
handler.group = true
handler.admin = true

export default handler
