import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑺𝒉𝒂𝒓𝒌𝒚あ𝐒𝐚𝐦𝐚', body: '𝑺𝒉𝒂𝒓𝒌𝒚あ𝐒𝐚𝐦𝐚', sourceUrl: `https://linkbio.co/OtakuGROUP`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
