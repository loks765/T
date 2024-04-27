import fs from 'fs';

let handler = async (m, { conn }) => {
  try {
    const data = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
    const users = data.users;
    const userCount = Object.keys(users).length;
    const message = `عدد المستخدمين: ${userCount}`;
    conn.reply(m.chat, message, m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ أثناء قراءة البيانات.', m);
  }
};

handler.help = ['usercount'];
handler.tags = ['owner'];
handler.command = /^usercount$/i;
handler.owner = true;

export default handler;
