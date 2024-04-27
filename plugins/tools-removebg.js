import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

const handler = async (m, { conn, text, usedPrefix, command }) => {

  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    
    let [image, r] = mime.split`/`
    console.log("img: "+image)
    if ( image !== 'image') {
      m.reply('يجب أن ترسل صورة لإزالة الخلفية.')
      return;
    }

      const img = await q.download();
    //let apikey = 'HP1LME2sjA6BeBb6jHtfsU7h' //replace with your apikey if its dead
    let apikey = 'jf3DB4nBaYLnGjyfLnwTJUtX'
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', img, 'file.jpg');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': apikey,
      },
      responseType: 'arrayBuffer',
      encoding: null,
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const imageData = response.data;

    fs.writeFileSync('./tmp/no-bg.png', imageData);

    // إضافة التسمية التوضيحية إلى الصورة
    const caption = 'تم الصنع بواسطة, 𝑺𝒉𝒂𝒓𝒌𝒚᯽𝐒𝐚𝐦𝐚';
    conn.sendFile(m.chat, 'no-bg.png', '', caption, m);


    
  } catch (e) {
    console.error(e);
    m.reply('عذرًا، حدث خطأ أثناء معالجة الصورة، ربما تحقق من مفتاح API الخاص بك.');
  }
};

handler.command = /^rmbg|removebg|تفريغ|أفراغ|افراغ$/i;
export default handler;
