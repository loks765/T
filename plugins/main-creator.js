function handler(m) {
  const data = global.owner.filter(([id, name, isCreator]) => isCreator);
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño', 'Gowner','المطور','مطور','المالك','مالك'];

export default handler;