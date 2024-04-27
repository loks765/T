// const { MessageType } = require('@adiwajshing/baileys'); // Import MessageType from the Baileys library

// let handler = async ({ conn }) => {
//   setInterval(async () => {
//     try {
//       let teks = `
//       ${pickRandom([
//         "سبحان الله ",
//         "الحمدلله",
//         "لا اله الا الله",
//         "الله اكبر",
//       ])}
//       `.trim();
//       console.log("Sending message:", teks); // Add this line for debugging
//       await conn.sendMessage(conn.user.jid, teks, MessageType.text);
//       console.log("Message sent successfully!"); // Add this line for debugging
//     } catch (error) {
//       console.error("Error sending message:", error); // Add this line for error logging
//     }
//   }, 60000); // 60000 milliseconds = 1 minute
// };

// handler.customPrefix = /.اذكار/i;

// handler.command = new RegExp;

// export default handler;

// function pickRandom(list) {
//   return list[Math.floor(Math.random() * list.length)];
// }