import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text, args }) => {
  if (!m.quoted) throw '*الرد على ملصق*'

  let stiker = false
  let stick = args.join(" ").split("|")
  let f = stick[0] !== "" ? stick[0] : packname
  let g = typeof stick[1] !== "undefined" ? stick[1] : ''

  try {
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '*الرد على ملصق*'

    let img = await m.quoted.download()
    if (!img) throw '*الرد على الملصق*!'

    stiker = await addExif(img, f, g)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    let myCustomFileName = 'sticker-wm.js' 
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, null, myCustomFileName)
    else throw '*فشل تحويل*'
  }
}

handler.help = ['take <name>|<author>']
handler.tags = ['sticker']
handler.command = ['أخذ','حقوقي','اخذ','حقوق','wm']

export default handler