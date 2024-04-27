let handler = async (m, { conn, isOwner }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
  let user = conn.getName(m.sender)
  let pareja = global.db.data.users[m.sender].pasangan 
  let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
  let caption = `*╭•━┈━《✦💝 الــعــلاقــات✦》━┈━·•*
  *╭•·–––––––––––––––––––·•*
  │ *الــمــجــمــوع : ${relacion.length} مــســتــخــدمــيــن* ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
  │ *${i + 1}.* ${conn.getName(jid) == undefined ? 'أعــزب' : conn.getName(jid)}
  │ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
  *╰•·–––––––––––––––––––·•*`
  return m.reply(`*╭•·–––––––––––––––––––·•*\n*│ ↶عــــنــــدك شــــريــــك ☟ 💟💞*\n*│* ${pareja ? `*${user}*\n*│* *${conn.getName(pareja)}*\n*╰•·–––––––––––––––––––·•*` : `\n*ليس لديه شــريــك❌*\n*╰•·–––––––––––––––––––·•*`}\n`, null, [ 
      ['الاوامر ☘️', '/menuall']], m, { mentions: await conn.parseMention(caption) })
}

handler.help = ['علاقة','علاقه']
handler.command = /^(listaparejas|علاقة|علاقه)$/i

export default handler
