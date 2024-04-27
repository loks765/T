import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kuwait').format('HH A')
let wib = moment.tz('Asia/Kuwait').format('hh:mm:ss A')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = moment().tz('Asia/kuwait').locale('en').format('DD MM YYYY');
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`
let pp = './menu.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let done = '🤖';
// let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `*⧉┆📜 ☟ اقـتـبـاس مـن الـيـوم ☟ 📜*
*⧉┆↵ اهــلا بــك/ي @${who.replace(/@.+/, '')}*
> *˼🤖˹ مـعـلــومــات الـبــوت╿↶*
*╮──────────────────⟢ـ*
┆╻🤖اســم الــبــوت: *ديـآبــلــو*╹
┆╻💻الــنــوع: *ليــنــكــس*╹
┆╻🕓وقـت الـتـشـغـيـل: *${uptime}*╹
┆╻📚عــدد الـمـسـتـخـدمـيـن: *${totaluser}*╹
┆╻🦸إســم الـمــالـك: *شـاركـي سـامـا*╹
*╯──────────────────⟢ـ*
> *˼⏰˹ الــــيــــوم╿↶*
*╮──────────────────⟢ـ*
┆╻🇸🇦 بــتــوقــيـت آلــســـعــوديـة╹
┆╻📆  الــتــاريــخ: *${date}*╹
┆╻⏲️  الــوقــت: *${wib}*╹
*╯──────────────────⟢ـ*
> *˼📜˹ الأوامــــر╿↶*
*╮──────────────────⟢ـ*
┆╻✎ ارســــل *" .اوامــر "*╹
┆╻✎ ارســــل *" .شــرح "*╹
*╯──────────────────⟢ـ*
> *˼📜˹ الــدعــم╿↶*
_~*https://chat.whatsapp.com/F5S2DKWqOiq0o6SQ8SvZg2*~_
> *رابــــط مــــوثـــوق ⇧✅⇧*
> *.¸¸ ❝˼𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇˼❝ ¸¸.*`;

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['مساعدة','مساعده','الدعم','ساعدني','support'];
handler.tags = ['group'];
handler.command = ['دعم','القائمة','ساعدني','مساعدة','مساعده','الدعم'];

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
function ucapan() {
  const time = moment.tz('Asia/kuwait').format('HH A')
  let res = "صباح الخير ☀️"
  if (time >= 4) {
    res = "صباح الخير 🌄"
  }
  if (time >= 10) {
    res = "مساء الخير ☀️"
  }
  if (time >= 15) {
    res = "مساء الخير 🌇"
  }
  if (time >= 18) {
    res = "تصبح على خير 🌙"
  }
  return res;
};