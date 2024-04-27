let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`> *مــــــنــــشــــن جــــمــــاعــــي╿↶*\n*╮──────────────────⟢*\n*┆▢ ${groupMetadata.subject}*\n*┆▢ أعـــــضــــاء╿↶* *${participants.length}*${text ? `\n*┆▢ رســالــة:* *${text}*\n` : ''}\n` + users.map(v => '*┆▢* @' + v.replace(/@.+/, '')).join`\n` + '\n*╯──────────────────⟢ـ*\n> *.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*', null, { 
      mentions: users
  })
}

handler.help = ['tagall'] 
handler.tags = ['group']
handler.command = ['منشن', 'tagall', 'منشن-جماعي', ] 
handler.modoadmin = true
handler.admin = true
handler.group = true

export default handler