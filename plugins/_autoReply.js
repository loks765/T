export async function all(m) {
	
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`*مرحبًا*  *@${m.sender.split('@')[0]}*\n*يمكنك استئجار الروبوت للانضمام إلى مجموعة*\n\n *_لمزيد من المعلومات يمكنك مراسلة المالك_*\n*اكتب* \`\`\`'.المطور'\`\`\` *للاتصال بالمالك*`.trim()}, {quoted:m});

   m.react('💎')
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
} 

 return !0
}