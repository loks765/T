/*
DON'T MODIFY THIS CODE
This code is responsible for handling donation related commands..
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    console.log(`Command received: ${command}`);

    let message = `
*ونحن نقدر دعمكم! 🙏*
    
لمساعدتنا على مواصلة التحسن، فكر في متابعتنا على Instagram. كل متابع جديد يجلب لنا الفرح والتحفيز!

حسابنا على الانستغرام: 

وتذكر أنه حتى أصغر الدعم يمكن أن يحدث فرقًا كبيرًا!

بالإضافة إلى ذلك، إذا كنت ترغب في المساهمة بشكل مباشر، فيمكنك استخدام رمز الاستجابة السريعة Google Pay المرفق. ما عليك سوى مسحه ضوئيًا باستخدام تطبيق Google Pay لإرسال التبرع. دعمكم يعني العالم بالنسبة لنا!`;

    let img = ''; 

    console.log("Sending message and image...");
    await conn.sendFile(m.chat, img, 'donation.jpg', message, m, false, rpyp);
    console.log("Message and image sent.");
};

handler.help = ['Donate'];
handler.tags = ['Main'];
handler.command = ['donate', 'support', 'contribute'];

export default handler;
