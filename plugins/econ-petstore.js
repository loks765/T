let handler = async (m, { conn, command, args }) => {
  let type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let htki = '––––––『'
  let htka = '』––––––'
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

  let caption = `
🐈 • *قطة:* 
➞ ${hcat} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
🐕 • *كلب:*
➞ ${hdog} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
🐎 • *حصان:* 
➞ ${hhorse} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
🦊 • *ثعلب:* 
➞ ${hfox} ᴘᴇᴛ ᴛᴏᴋᴇɴ🔖
🍖 • *طعام-الحيوان*
➞ ${hpetfood} ᴍᴏɴᴇʏ 💹
- - - - - - - - - - - - - - - - - - - - -
*${htki} قدرة ${htka}*
*➞ 🐈 • قطة :*
*- زيادة الصحة بنسبة 5% / المستوى عند الاستخدام* *.هيل*
*➞ 🐕 • كلب :*
*- ᴄᴏᴍɪɴɢ sᴏᴏɴ...*
*➞ 🐎 • حصان :*
*- ᴄᴏᴍɪɴɢ sᴏᴏɴ...*
*➞ 🦊 • ثعلب :*
*- ᴄᴏᴍɪɴɢ sᴏᴏɴ...*
`

  try {
    if (/petshop|متجر-الحيوانات|متجرالحيوانات/i.test(command)) {
      switch (type) {
        case 'قطة':
          if (user.cat > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
          if (user.pet < hcat) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
          global.db.data.users[m.sender].pet -= hcat
          global.db.data.users[m.sender].cat += 1
          conn.sendMessage(m.chat, { text: `*${htki}* حيوان جديد ! ${htka}*\n\n*🎉 تهانينا، لقد اشتريت حيوانًا أليفًا قطة*`, quoted: m })
          break
        case 'كلب':
          if (user.dog > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
          if (user.pet < hdog) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
          global.db.data.users[m.sender].pet -= hdog
          global.db.data.users[m.sender].dog += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n*🎉 تهانينا، لقد اشتريت حيوانًا أليفًا كلب*`, quoted: m })
          break
        case 'ثعلب':
          if (user.fox > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
          if (user.pet < hfox) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
          global.db.data.users[m.sender].pet -= hfox
          global.db.data.users[m.sender].fox += 1
          conn.sendMessage(m.chat, { text: `*${htki}* حيوان جديد ! *${htka}*\n\n*🎉 تهانينا، لقد اشتريت حيوانًا أليفًا ثعلب*`, quoted: m })
          break
        case 'حصان':
          if (user.horse > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
          if (user.pet < hhorse) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
          global.db.data.users[m.sender].pet -= hhorse
          global.db.data.users[m.sender].horse += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n*🎉 تهانينا، لقد اشتريت حيوانًا أليفًا حصان*`, quoted: m })
          break
        case 'طعام-الحيوان':
          if (global.db.data.users[m.sender].money >= hpetfood) {
            global.db.data.users[m.sender].petFood += 1
            global.db.data.users[m.sender].money -= hpetfood
            conn.sendMessage(m.chat, { text: `*${htki} شراء ${htka}*\n\nعملية شراء ناجحة لـ *1* طعام للحيوانات الأليفة *${hpetfood}* مال!`, quoted: m })
          } else {
            conn.sendMessage(m.chat, { text: `*أموالك لا تكفي لشراء أغذية الحيوانات الأليفة!*`, quoted: m })
          }
          break
        default:
          conn.sendMessage(m.chat, { text: `*${htki} متجر الحيوانات ${htka}*\n\n${caption}` }, { quoted: m })
          break
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = ['متجرالحيوانات','petshop','متجر-الحيوانات']
handler.group = true

export default handler
