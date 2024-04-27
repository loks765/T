import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn }) => {
  let img1 = 'https://i.pinimg.com/564x/39/49/b8/3949b80cc6b46e3c2065f5ad6319ef7c.jpg';
  let img2 = 'https://i.pinimg.com/236x/c6/50/af/c650afc9f45ace2c60859f5d8d88236f.jpg';
  let img3 = 'https://i.pinimg.com/236x/76/27/58/7627585758bb8f5db2602dd46362d218.jpg';
  let img4 = 'https://i.pinimg.com/236x/a0/5e/d8/a05ed85c9d99f4d553ce3c4791985a07.jpg';
  let img5 = 'https://i.pinimg.com/236x/10/83/98/1083982cf4ebfffb1eb9703412f7f1d3.jpg';
  let img6 = 'https://i.pinimg.com/236x/6b/12/df/6b12df6a9c98aa7ba3d4aa828c794d29.jpg';
  let img7 = '';
  let img8 = '';
  let img9 = '';
  let img10 = '';
  let randomNumber = Math.floor(Math.random() * 6);

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

handler.customPrefix = /^(انزلي|اتحداك)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, packname: authorName, quality };
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}
