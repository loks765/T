let handler = async (m, { conn, usedPrefix }) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let more = String.fromCharCode(8206);
  let done = '💗';
  m.react(done);
  let usuario = conn.getName(who)
  let user = global.db.data.users[who]
  let pareja = global.db.data.users[m.sender].pasangan

  if (pareja == "") return await conn.reply(m.chat, `*${usuario}* لــيــس لــديــك شــريــك\n\n*إذا كــنــت تــرغــب فــي الــحــصــول عــلــى شــريــك اســتــخــدم الأمــر ${usedPrefix}زواج و مــنــشــن شــخــص مــا*\n`, fkontak,  m)

  if (global.db.data.users[pareja].pasangan == m.sender) return await conn.reply(m.chat, `*╭•·–––––––––––––––––––·•*\n*│* *${usuario}*\n*│* *💗 أنـت فــي عــلاقــة مــع*\n*│* *${await conn.getName(pareja)}*\n*│* *✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]} 💖*\n*╰•·–––––––––––––––––––·•*`, fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})
  await conn.reply(m.chat, `*🤨 الــمــعــذرة، ولــكــن *${await conn.getName(pareja)}* لا يــقــبــل الــعــلاقــة مــعــك الآن\n\n*_ســيــتــم إلــغــاء هــذا الــطــلــب نــظــرًا لــلــظــروف*\n`, fkontak, m, {contextInfo: { mentionedJid: [ pareja, m.sender ] }})

  global.db.data.users[m.sender].pasangan = ""
}

//handler.help = ['حبي']
//handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove|زوجي|زوجتي|حبيبي|حبيبتي|حبي)$/i
handler.group = true
export default handler
