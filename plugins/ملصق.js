import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn }) => {
  let img1 = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjdrn58s3ob2u_yqHHh2y6dEIYShT1M69JnBdE6kfPbUkzTit_';
  let img2 = 'https://i.pinimg.com/236x/39/d6/af/39d6afdcf9f8a2133521c7bee3684565.jpg';
  let img3 = 'https://i.pinimg.com/736x/7a/1c/71/7a1c71d4cadf911e069f01c5348eae4f.jpg';
  let img4 = 'https://i.pinimg.com/236x/97/0d/d3/970dd31fa4d2a165200d475f82224f39.jpg';
  let img5 = 'https://i.pinimg.com/474x/6b/c8/6c/6bc86c74ce4e15b7f032a94cd658c5c2.jpg';
  let img6 = 'https://i.pinimg.com/236x/43/21/b9/4321b9188f4b07171b8312556a555367.jpg';
  let img7 = 'https://i.pinimg.com/236x/d2/68/ad/d268ad3489d5bbf554d2ca9294a9b44e.jpg';
  let img8 = 'https://i.pinimg.com/236x/b7/7b/10/b77b10a7f85bf837438a6f919497522d.jpg';
  let img9 = 'https://i.pinimg.com/236x/bd/bf/58/bdbf5813f6079b7f073fe87eec5ad41e.jpg';
  let img10 = 'https://i.pinimg.com/236x/2e/ba/22/2eba22a8c23e22ef7424ae40da1bdd1d.jpg';
  let randomNumber = Math.floor(Math.random() * 10);

  let sticker;
  if (randomNumber === 0) {
    sticker = await createSticker(false, img1, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 1) {
    sticker = await createSticker(false, img2, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 2) {
    sticker = await createSticker(false, img3, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 3) {
    sticker = await createSticker(false, img4, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 4) {
    sticker = await createSticker(false, img5, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 5) {
    sticker = await createSticker(false, img6, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 6) {
    sticker = await createSticker(false, img7, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 7) {
    sticker = await createSticker(false, img8, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 8) {
    sticker = await createSticker(false, img9, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 9) {
    sticker = await createSticker(false, img10, 'تــمــد يــدك اكــســرهــا˼😊˹\ 𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', '', 20);
  } else if (randomNumber === 10) {

  }

  m.reply(sticker);
};

handler.customPrefix = /^(احبك|اشتقت لك|اي منجدي|اموت فيك|زمان عنك)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, packname: authorName, quality };
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}
