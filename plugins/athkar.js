import pkg from './message-type.cjs'; 
const { MessageType } = pkg;
import fs from 'fs'

let shouldSendAthkar = false; 
let athkarInterval = null; 
let athkarIntervalMinutes = 30; 
const groupSettings = {};
const sendAthkar = async (m, {conn}) => {
  try {
    const filePath = './plugins/athkar-text.json';
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // console.log('File Content:', fileContent); // Log the file content for debugging
    const athkarText = JSON.parse(fileContent);
    // console.log('Athkar Text:', athkarText); // Log the parsed JSON for debugging

    const randomPhrase = pickRandom(athkarText);
    let teks = `
      ${pickRandom(athkarText)}  
    `.trim();
    // console.log("Sending message:", teks);
    await conn.sendMessage(m.key.remoteJid, { text: teks }, MessageType.text);
    // console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
const startAthkarInterval = async (m, { conn }) => {
  const groupId = m.key.remoteJid;
  if (!groupSettings[groupId]) {
    // If the group doesn't have settings yet, initialize them
    groupSettings[groupId] = {
      shouldSendAthkar: false,
      athkarInterval: null,
    };
  }

const { shouldSendAthkar, athkarInterval } = groupSettings[groupId];

  if (shouldSendAthkar) {
    // If shouldSendAthkar is already true for this group, don't start another interval
    await conn.sendMessage(m.key.remoteJid, { text: 'إرسال الأذكار مفعل بالفعل' }, MessageType.text);
  } else {
    clearInterval(athkarInterval);
    groupSettings[groupId].shouldSendAthkar = true;
    groupSettings[groupId].athkarInterval = setInterval(() => sendAthkar(m, {conn}), athkarIntervalMinutes * 60 * 1000);
    await conn.sendMessage(m.key.remoteJid, { text: `*تم تفعيل إرسال الأذكار كل ${athkarIntervalMinutes} دقائق*` }, MessageType.text);
  }
};

const stopAthkarInterval = async (m, { conn }) => {
  const groupId = m.key.remoteJid;
  const { shouldSendAthkar, athkarInterval } = groupSettings[groupId];

  if (shouldSendAthkar) {
    clearInterval(athkarInterval);
    groupSettings[groupId].shouldSendAthkar = false;
    await conn.sendMessage(m.key.remoteJid, { text: '*تم إيقاف إرسال الأذكار*' }, MessageType.text);
  } else {
    await conn.sendMessage(m.key.remoteJid, { text: '*إرسال الأذكار معطل بالفعل*' }, MessageType.text);
  }
};
const setAthkarInterval = async (m, { conn }, minutes) => {
  console.log(`Setting athkar interval to ${minutes} minutes`);
  if (minutes <= 0) {
    await conn.sendMessage(m.key.remoteJid, { text: '*الرجاء تحديد وقت إيجابي لإرسال الأذكار*' }, MessageType.text);
  } else {
    athkarIntervalMinutes = minutes;
    await conn.sendMessage(m.key.remoteJid, { text: `*تم تعيين وقت إرسال الأذكار إلى كل ${athkarIntervalMinutes} دقائق*` }, MessageType.text);
  }
};


const handler = async (m, { conn }) => {
  if (m.text === '.اذكار') {
    startAthkarInterval(m, { conn });
  } else if (m.text === '.ايقاف-الاذكار') {
    stopAthkarInterval(m, { conn });
  } else if (m.text.startsWith('.تعيين-وقت-الاذكار')) {
    const args = m.text.split(' ');
    if (args.length === 2) {
      const minutes = parseInt(args[1]);
      setAthkarInterval(m, {conn}, minutes);
    } else {
      await conn.sendMessage(m.key.remoteJid, { text: '*استخدم الأمر بشكل صحيح. مثال: .تعيين-وقت-الاذكار 5*' }, MessageType.text);
    }
  }
};

handler.command = ['اذكار', 'ايقاف-الاذكار', 'تعيين-وقت-الاذكار'];


export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

handler.admin = true;