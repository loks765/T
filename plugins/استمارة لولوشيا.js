let handler  = async (m, { conn }) => { 
 let a ='./reg.jpg'
 let more = String.fromCharCode(8206);
  let done = '✅';
      m.react(done);
 let teks = ` 
 ${pickRandom([`
 `])} 
 `.trim() 
 conn.sendFile(m.chat, a, null, teks, m)}


 //handler.command = [''];
 handler.group = true

 export default handler 

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
   }