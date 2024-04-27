let handler = async (m, {conn, usedPrefix}) => {
  let more = String.fromCharCode(8206);
  let done = '💼';
  m.react(done);
  
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `*✳️لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي*`
    conn.reply(m.chat,`> *˼💼˹ الــــحــــقــــيــــبــــة╿↶*
*╮──────────────────⟢ـ*
*┇˼📌˹ الــــــعــــــضــــــو╿↶*
*┇❮ _@${who.split('@')[0]}_❯┇*
*┇▢〉💎‣ الــمــاس: _${user.diamond}_*
*┇▢〉 ✧ ‣  زمــرد: _${user.emerald}_*
*┇▢〉⚙‣ فــضــة: _${user.gold}_*
*┇▢〉🔩‣ حــديــد: _${user.iron}_*
*┇▢〉🪨‣ حــجــر: _${user.rock}_*
*┇▢〉🕸‣ خــيــط: _${user.string}_*
*┇▢〉🪵‣ خــشــب: _${user.wood}_*
*┇▢〉🏺‣ جــرعــة: _${user.potion}_*
*┇▢〉🗑️‣ قــمــامــة: _${user.trash}_*
*┇▢〉🦴‣ حــيــوان: _${user.pet}_*
*┇▢〉🍖‣ لــحــم: _${user.petFood}_*
*╯──────────────────⟢ـ*
> *˼📜˹ نــــصــــائــــح╿↶*
> *˼🕹️˹ ~اكـــتـــب~  " .م3 "*`, m, { mentions: [who] })
}
handler.help = ['balance','رصيد','الرصيد','حقيبه','حقيبة','الحقيبة']
handler.tags = ['econ']
handler.command = ['الرصيد','الحقيبة','حقيبه','الحقيبه','الشنطة','شنطة','حقيبة','رصيد','الرصيد','حقيبتي'] 

export default handler;
