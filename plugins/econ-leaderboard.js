import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
  // جلب بيانات المــســتــخدمين وتحويلها إلى قائمة
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let more = String.fromCharCode(8206);
  let done = '🏆';
  m.react(done);

  // فرز البيانات حسب مختلف المعايير
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedRole = users.map(toNumber('role')).sort(sort('role'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let sortedJoincount = users.map(toNumber('joincount')).sort(sort('joincount'))
  let sortedPremium = users.map(toNumber('premium')).sort(sort('premium'))
  let sorteddiamond = users.map(toNumber('diamond')).sort(sort('diamond'))
  let sortedcredit = users.map(toNumber('credit')).sort(sort('credit'))
  let sortedbank = users.map(toNumber('bank')).sort(sort('bank'))

  // استخراج معرفات المــســتــخدمين مـــن البيانات المرتبة
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersRole = sortedRole.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersJoincount = sortedJoincount.map(enumGetKey)
  let usersPremium = sortedPremium.map(enumGetKey)
  let usersbank = sortedbank.map(enumGetKey)
  let userscredit = sortedcredit.map(enumGetKey)

  // تحديد عدد المــســتــخدمين المراد عرضهم
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)

  // إعداد الرسالة بالمعلومات المرتبة لكل معيار
  let text = `
*┓⊷❏ جــــدول الــــصــــدارة🏆⊶┏*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} مستوى 💪*
*أنــت:* *${usersLevel.indexOf(m.sender) + 1}* مـــن *${usersLevel.length} مــســتــخدم*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${level} 🔅*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} الــتــصــنــيــف 🌟*
*أنــت:* *${usersLevel.indexOf(m.sender) + 1}* مـــن *${usersLevel.length} مــســتــخدم*

${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${role}*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} خــبــرة 🧬*
*أنــت:* *${usersExp.indexOf(m.sender) + 1}* مـــن *${usersExp.length} مــســتــخدم*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${exp} ⚡*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} بـــنـــك 🏦*
*أنــت:* *${usersbank.indexOf(m.sender) + 1}* مـــن *${usersbank.length} مــســتــخدم*

${sortedbank.slice(0, len).map(({ jid, bank }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${bank} 👛*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} نـــقـــود 💲*
*أنــت:* *${usersMoney.indexOf(m.sender) + 1}* مـــن *${usersMoney.length} مــســتــخدم*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${money} 💸*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} ذهـــب 🪙*
*أنــت:* *${userscredit.indexOf(m.sender) + 1}* مـــن *${userscredit.length} مــســتــخدم*

${sortedcredit.slice(0, len).map(({ jid, credit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${credit} 🪙*`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 *أعــلــى ${len} الـــمـــاس 💎*
*أنــت:* *${usersLim.indexOf(m.sender) + 1}* مـــن *${usersLim.length} مــســتــخدم*

${sorteddiamond.slice(0, len).map(({ jid, diamond }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '*@'}${jid.split`@`[0]}* *${diamond} 💎*`).join`\n`}
`.trim()
 await m.reply(text, null, { mentions: conn.parseMention(text) })
/*await conn.sendButton(m.chat, wm, text, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', '#juegosmenu'], 
['𝙍𝙖𝙣𝙜𝙤𝙨 🚹', '#rol'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, { mentions: conn.parseMention(text) })   */
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
