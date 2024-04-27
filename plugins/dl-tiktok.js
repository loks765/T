import { tiktokdl } from '@bochilteam/scraper'; // استيراد وحدة tiktokdl من حزمة @bochilteam/scraper
import fg from 'api-dylux'; // استيراد وحدة fg من حزمة api-dylux

let handler = async (m, { conn, text, args, usedPrefix, command }) => { // إنشاء دالة لمعالجة البيانات المُعطاة

 if (!args[0] && m.quoted && m.quoted.text) { // التحقق مما إذا كانت هناك بيانات أو اقتباس لرسالة
  args[0] = m.quoted.text;
}
if (!args[0] && !m.quoted) throw `أعط رابط الفيديو من Tiktok أو قم بالإقتباس من رابط Tiktok`; // في حالة عدم توفر رابط TikTok
 if (!args[0].match(/tiktok/gi)) throw `تأكد من أن الرابط من TikTok`; // التحقق من أن الرابط هو رابط TikTok


  let txt = 'إليك الفيديو المطلوب'; // رسالة الإستجابة الإفتراضية

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]); // محاولة استخراج معلومات الفيديو من رابط TikTok
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd; // تحديد رابط الفيديو للتنزيل

    if (!url) throw global.error; // في حالة عدم العثور على رابط الفيديو

    conn.sendFile(m.chat, url, 'tiktok.mp4', '', m);// إرسال الملف المنزل إلى المستخدم
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0]); // محاولة استخراج معلومات الفيديو من رابط TikTok باستخدام حزمة fg
      conn.sendFile(m.chat, p.play, 'tiktok.mp4', txt, m); // إرسال الملف المنزل إلى المستخدم
    } catch {
      m.reply('*An unexpected error occurred*'); // إذا حدث خطأ غير متوقع
    }
  }
};

handler.help = ['tiktok'].map((v) => v + ' <الرابط>'); // الأوامر المتاحة لاستخدام البوت
handler.tags = ['downloader']; // تعليمات تصف البوت
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))|تيك$/i; // تعريف الأمر الذي يُشغّل البوت

export default handler; // تصدير الدالة المعالجة

