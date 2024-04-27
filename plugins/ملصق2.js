import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn }) => {
  let img1 = 'https://i.pinimg.com/474x/81/24/d7/8124d7d7b4f8a31ebd69357077f0395c.jpg';
  let img2 = 'https://i.pinimg.com/474x/48/7c/6a/487c6ac5b53248a5c5a2517e4c8438f5.jpg';
  let img3 = 'https://i.pinimg.com/236x/02/6a/d8/026ad862da1132b0a9b4d5bb1f313276.jpg';
  let img4 = 'https://i.pinimg.com/474x/e9/2f/fa/e92ffab0b31aab842f522af57eb61e61.jpg';
  let img5 = 'https://i.pinimg.com/236x/cf/d2/23/cfd223d2294c355cb8f1c34ccc0bfa09.jpg';
  let img6 = 'https://i.pinimg.com/474x/38/f0/88/38f088eb5daca8eb5e4ff078f875da20.jpg';
  let img7 = 'https://i.pinimg.com/236x/f1/c3/bb/f1c3bbbefe1c3877d6d3f03be1f23c16.jpg';
  let img8 = 'https://i.pinimg.com/474x/d0/16/46/d016461f195410021b191dd0f72ab37f.jpg';
  let img9 = 'https://i.pinimg.com/236x/7e/32/3e/7e323ea0d39f5e9982a0cc1b3e3bc2cb.jpg';
  let img10 = 'https://i.pinimg.com/474x/f4/3f/a0/f43fa059fd79bb90ae0bc78854b66fe8.jpg';
  let randomNumber = Math.floor(Math.random() * 9);

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

handler.customPrefix = /^(وينك|كيفك|شتسوي|شتسوي؟|ايش تسوي؟|كيفك؟|ديابلو شتسوي|ديابلو شتسوي؟|ايش تسوي)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, packname: authorName, quality };
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}
