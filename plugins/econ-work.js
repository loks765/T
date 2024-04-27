import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs';
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 500000)
  let done = '👨🏼‍💼';
  m.react(done);
  let time = global.db.data.users[m.sender].lastwork + 960000
  if (new Date - global.db.data.users[m.sender].lastwork < 960000) throw `⚔️ *انتظر لحظة أيها المغامر الصغير* ⚔️\n> *الـعـــودة إلــى الرحـــلـــة فــــي╿↶*\n> *${msToTime(time - new Date())}⏳*`;

    /*let w = await axios.get(global.API('fgmods', '/api/work', { }, 'apikey'))
    let res = w.data.result*/
    let anu =  JSON.parse(fs.readFileSync('./src/Game/work.json', 'utf8'));
    let res = pickRandom(anu)
 global.db.data.users[m.sender].money += hasil

m.reply(`> *˼💲˹ الرحــــلــــة╿↶*
*╮──────────────────⟢ـ*
*┇* ${res.fgwork}\n*┇ +${hasil} نــقــود💲*\n*╯──────────────────⟢ـ*\n> *إستخدم امر [ .محفظة ] للإستطلاع على نقودك الحالي او الجديد!.*`)
  global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['econ']
handler.command = ['شغل','عمل','work', 'w', 'majduri']

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + ' دقـــائـــق ' + seconds + ' ثــــوانـــي ';
  }
  
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
