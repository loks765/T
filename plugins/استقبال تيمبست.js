let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a='./Guru.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let more = String.fromCharCode(8206);
let done = '🌀';
      m.react(done);
 let teks = ` 
 ${pickRandom([`*╭━━━[ اسـتـمـارة ]━━━━⬣*
*✦↜╎ ﹝الأستقبال﹞*
~*https://chat.whatsapp.com/F311s7hz09OFi1yvxQFfQx*~
*▢ رابط موثوق ⇧✅⇧*
*.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*`])} 
 `.trim() 
 conn.sendFile(m.chat, a, null, teks, m)}
 
 handler.command = ['استقبال','استقبال','استقبال','الأستقبال',]
 
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
   }