//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `*🙌مــرحــبــاً ، أنــت مــســجــل بالــفــعــل*\n\n*✳️تــريــد الــعــودة إلــى الــتــســجــيــل؟*\n~*اســتــخــدم الأمــر لإزالــة الــســجــل*~ \n*" ${usedPrefix}غــيــر-مــنــتــظــم "*\n*✳️الــرقــم الــســري*\nإذا كــنــت لا تــتــذكــر الــرقــم الـتـسـلـسـلـي اكــتــب\n*" ${usedPrefix}تــســلــســل "*`
  if (!Reg.test(text)) throw `*⚠️ الــتــنــســيــق غــيــر صــحــيــح*\n\n *✳️ استخدم هذا الأمر: ${usedPrefix + command} اسم.عمر*\n*📌مــثــال : ${usedPrefix + command} ريمورو.17*\n*ملاحظة📜‼️*\nاذا قمت بكتابة الرقم *بالعربي لن يقوم بالتعرف عــلــيــه*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ لا يمكن أن يكون الاسم فارغًا'
  if (!age) throw '✳️ لا يمكن أن يكون العمر فارغًا'
  if (name.length >= 30) throw '✳️ اوووف , الاسم كبير هديها و صغر الاسم' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 واو الجد يريد أن يلعب دور الروبوت'
  if (age < 5) throw '🚼  هناك جد طفل '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 4000
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 1500
global.db.data.users[m.sender].joincount += 2
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*┌─「 مسجل 」⊷*
*▢ •  الـلـقـب:  ${name}*
*▢ •  عــمــر : ${age} ســنــوات*
*▢ •  رقــم ســري :*
${sn}
*└──────────────⊷*
*${usedPrefix}سـاعــدنـي لــرؤيــة الــقــائــمــة*
*.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*`.trim())
}
handler.help = ['reg'].map(v => v + ' <اسم.عمر>')
handler.tags = ['rg']

handler.command = ['تسجيل','verify', 'reg', 'register', 'registrar'] 

export default handler

