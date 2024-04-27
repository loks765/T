const toxicRegex = /$انيك|زبي|^كس$|^اير$|مايا خليفة|منيوك|اركب عليه|خنيث|مخنث|خكري|^قي$|شاذ|متناك|انيك امك$|كسمك|منيوكتي|ياقحبتي|بطيزك$|قحبه|يلعن|^العن$|يلعنك|اباحي|^بخش$|^بخشي$|^ناك$|زرقها|^ناكك$|افتحك$|مص$|زبي$|كس امك|شرموطه متناكه|قحبتي|خنثه|خنث|على ايري|^كسك|زبك|شرموطتك|^ايري$|تلحس|بنيك|شرفك|^شرف$|طيز|انتاك|يا كس|انتا كس|ياكس|انت كس|ديود|ديودك|^صدرك$|بنيكك|عرص|منيك|قحب|عرصه|بغتصب|بغتصبك|اغتصاب|بنيكك|شرموطه|شرموطة|على زبي|مغتصبك|نيك عاري|ممارسة جنس|ممارسة الجنس|.صورة كس|هنتاي|هينتاي|hentai|.صوره كس|.بحث كس|طيزي|^زب$|عرص|انيكك|شرموط|قحبة|سكس|قحبه|شرموط|قحبة^/i
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://telegra.ph/file/f46f78f1a78112cd935f9.jpg'
 const isToxic = toxicRegex.exec(m.text)

if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await m.reply(`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, ${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()} ${lenguajeGB['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, false, { mentions: [m.sender] })}
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()}*`, `${lenguajeGB['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), 'ok'],
[lenguajeGB.smsToxic5(), '.off antitoxic'],
[lenguajeGB.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}*/

if (user.warn >= 4) {
user.warn = 0
await m.reply(`*${lenguajeGB['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${lenguajeGB['smsToxic7']()}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
global.db.data.users[m.sender].limit -= 5
}
return !1
}
