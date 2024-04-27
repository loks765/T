let ro = 59999
let handler = async (m, { conn, usedPrefix, command}) => {
    let done = '🥷';
    m.react(done);
    let time = global.db.data.users[m.sender].lastrob + 5200000
    if (new Date - global.db.data.users[m.sender].lastrob < 5200000) throw `> *˼🥷˹ الــــســــرقــــة╿↶*\n*╮──────────────────⟢ـ*\n*┇▢           انـــــتـــــظـــــر ⏱*\n*┇▢      ${msToTime(time - new Date())}*\n*┇▢     للــــســـرقــــة مــــرة أخــــرى*\n*╯──────────────────⟢ـ*\n> *إستخدم امر [ .لفل ] للإستطلاع على مستواك الحالي او الجديد!.*`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `*[❗] مــنــشــن الــشــخــص الــلــذي تــريــد ســرقــتــه ايــهــا الــحــرامــي*`
    if (!(who in global.db.data.users)) throw `✳️ *لــم يــتــم الــعــثــور عــلــى الــمــســتــخــدم فــي قــاعــدة الــبــيــانــات الــخــاصــة بــي*`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`😔 *@${who.split`@`[0]}* لــديــه أقــل مــن *${ro} خــبــرة*\nلا تــســرق رجــل فــقــيــر":`, null, { mentions: [who] })       
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob

m.reply(`> *˼☘️˹ لـقـد نـجـحـت╿↶*
*╮──────────────────⟢ـ*
*┆‣ لــقــد ســرقــت ${rob} خــبــرة مــن*
*┆‣ @${who.split`@`[0]}*
*╯──────────────────⟢ـ*
> *إستخدم امر [ .لفل ] للإستطلاع على مستواك الحالي او الجديد!.*`, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['سرق','سرقة','robar', 'rob']

  export default handler

  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " ســاعــة و " + minutes + " دقــيــقــة"
  }

