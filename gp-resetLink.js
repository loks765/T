
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('*تمت إعادة تعيين رابط المجموعة بنجاح✅*\n\n')
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['اعادة-الرابط','اعادة-رابط','اعادة','اللينك','لينك','الينك','revoke', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
