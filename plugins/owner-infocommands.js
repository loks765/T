import fs from 'fs';

let handler = async (m, { conn }) => {
  try {
    const data = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
    const stats = data.stats;
    let message = 'إحصائيات استخدام الأوامر:\n\n';

    for (const [command, stat] of Object.entries(stats)) {
      message += `أمر: ${command}\n`;
      message += `إجمالي الاستخدام: ${stat.total}\n`;
      message += `النجاح: ${stat.success}\n\n`;
    }

    conn.reply(m.chat, message, m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ أثناء قراءة البيانات.', m);
  }
};

handler.help = ['stats'];
handler.tags = ['owner'];
handler.command = /^احصائيات|stats$/i;
handler.owner = true;

export default handler;
