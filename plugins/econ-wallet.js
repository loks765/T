let handler = async (m, {conn, usedPrefix}) => {
  let more = String.fromCharCode(8206);
  let done = '👛';
  m.react(done);
  
	let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]

    let username = conn.getName(who)
    if (!(who in global.db.data.users)) throw `*👛 لـم يـتـم الـعـثـور عـلـى الـمـسـتـخـدم فـي قـاعـدة الـبـيـانـات الـخـاصـة بـي*`
    conn.reply(m.chat, `> *˼👛˹ مــــحــــفــــظــــة╿↶*
*👛 ‣ | ${username}*
*╮──────────────────⟢ـ*
*┇▢〉🪙‣ ذهـــب: _${user.credit}_*
*┇▢〉💲‣ نـــقـــود: _${user.money}_*
*┇▢〉🆙‣ الـــخـــبـــرة: _${user.exp}_*
*╯──────────────────⟢ـ*
> *إستخدم امر [ .بنك ] للإستطلاع على البنك الخاص فيك!.*`, m, { mentions: [who] })
}
handler.help = ['wallet','محفظه','محفظة']
handler.tags = ['economy']
handler.command = ['المحفظه','المحفظة','محفظه','محفظة','wallet',] 

export default handler;
