const response = {
    lick: 'لعق',
    bite: 'عض',
    poke: 'غرز',
    kick: 'ركل',
    smile: 'ابتسام',
    slap: 'كف',
    pat: 'تربيت',
    kiss: 'بوسة',
    hug: 'حضن',
    cry: 'بكاء',
    dance: 'رقص',
};

import fetch from 'node-fetch';
import GIFBufferToVideoBuffer from '../lib/Gifbuffer.js';

const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("فشل الحصول على المخزن المؤقت", error);
    throw new Error("فشل الحصول على المخزن المؤقت");
  }
}
      

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  } else {
    who = m.chat;
  }

  if (!who) throw `*✳️ ضع علامة أو أذكر شخصًا ما*\n\n*📌 مثال :* ${usedPrefix + command} *@منشن*`;

  let name = conn.getName(who);
  let name2 = conn.getName(m.sender);
  m.react(rwait);

  let reaction = await fetch(`https://api.waifu.pics/sfw/${command}`);
  if (!reaction.ok) throw await reaction.text();
  
  let json = await reaction.json();
  let { url } = json;
  const gifBuffer = await getBuffer(url);
  const gifToVideoBuffer = await GIFBufferToVideoBuffer(gifBuffer);

  conn.sendMessage(
    m.chat,
    { video: gifToVideoBuffer, caption: `(${name2}) ${command} ${name}`, gifPlayback: true, gifAttribution: 0 },
    { quoted: m }
  );

  m.react('☺️'); 
}

handler.tags = ['reaction'];
handler.help = [
  'bully @tag',
  'cuddle @tag',
  'cry @tag',
  'hug @tag',
  'awoo @tag',
  'kiss @tag',
  'lick @tag',
  'pat @tag',
  'smug @tag',
  'bonk @tag',
  'yeet @tag',
  'blush @tag',
  'smile @tag',
  'wave @tag',
  'highfive @tag',
  'handhold @tag',
  'nom @tag',
  'bite @tag',
  'glomp @tag',
  'slap @tag',
  'kill @tag',
  'kick @tag',
  'happy @tag',
  'wink @tag',
  'poke @tag',
  'dance @tag',
  'cringe @tag'
];

handler.command = /^(bully|cuddle|cry|hug|awoo|بوسة|lick|pat|smug|bonk|yeet|blush|smile|wave|highfive|handhold|nom|bite|glomp|slap|kill|kick|happy|wink|poke|dance|cringe)$/i;
handler.group = true;

export default handler;
