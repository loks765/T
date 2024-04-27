let handler  = async (m, { conn }) => { 
const name = conn.getName(m.sender);
let a='./Guru.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let more = String.fromCharCode(8206);
let done = '✅';
      m.react(done);
 let teks = ` 
 ${pickRandom([`
*┓✥━═━═•《•🩸•》•═━═━✥┏*
*✦↜╎ ﹝الــــدعــــم﹞*
~*https://chat.whatsapp.com/F5S2DKWqOiq0o6SQ8SvZg2*~
*▢ رابــــط مــــوثـــوق ⇧✅⇧*
*┛✥━═━═•《•🩸•》•═━═━✥┗*
*.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*`])} 
 `.trim() 
 conn.sendFile(m.chat, a, null, teks, m)}

 handler.command = ['الروبوت','روبوت','الدعم','دعم',]

 export default handler;

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
   }