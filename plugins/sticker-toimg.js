import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let done = '🖼️'; 
       m.react(done);
  const notStickerMessage = `❀° ┄───────╭\n\n⃠┇قم بالرد على الملصق بـ :\n\n*${usedPrefix + command}*\n\n╯───────┄ °❀`
  if (!m.quoted) throw notStickerMessage
  const q = m.quoted || m
  let mime = q.mediaType || ''
  if (!/sticker/.test(mime)) throw notStickerMessage
  let media = await q.download()
  let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
  await conn.sendFile(m.chat, out, 'out.png', '🖼️╎تـفـضــل طـلـبــك˙⁠❥⁠', m)
}

handler.help = ['toimg <sticker>']
handler.tags = ['sticker']
handler.command = ['toimg', 'jpg', 'aimg','لصوره','لصورة']

export default handler