let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*أدخل رقم الوقت للتميز*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} دقائق*\n*✤ ${gata} ${rpgshop.emoticon('diamond')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('diamond')}* لشراء 🎟️ بريميوم ${rpgshopp.emoticon('diamond')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الاسم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 لقد غادرت:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n*انت الان مستخدم متتميز ليس لديك حدود ف استخدام البوت*\n\n*يمكنك استخدام اي امر*\n\n${wm}`, fkontak, { mentions: [aa,] })}

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف رقم الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} دقائق*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('kyubi')}* لشراء 🎟️ بريميوم${rpgshopp.emoticon('kyubi')} في المتجر باستخدام ملف بأمر*${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 لقد غادرت:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n*انت الان مستخدم متتميز ليس لديك حدود ف استخدام البوت*\n\n*يمكنك استخدام اي امر*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} دقيقه*\n*✤ ${gata} ${rpgshop.emoticon('emerald')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('emerald')}* لشراء 🎟️ بريميوم  ${rpgshopp.emoticon('emerald')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n*انت الان مستخدم متتميز ليس لديك حدود ف استخدام البوت*\n\n*يمكنك استخدام اي امر*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} ايام*\n*✤ ${gata} ${rpgshop.emoticon('trash')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('trash')}* لشراء 🎟️ بريميوم  ${rpgshopp.emoticon('trash')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.trash -= gata * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n*انت الان مستخدم متتميز ليس لديك حدود ف استخدام البوت*\n\n*يمكنك استخدام اي امر*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} ايام*\n*✤ ${gata} ${rpgshop.emoticon('berlian')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('berlian')}* لشراء 🎟️ بريميوم  ${rpgshopp.emoticon('berlian')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.berlian -= gata * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الاسم*
*┃» ${user.name}*
*┃💰 الدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} دقائق*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n*انت الان مستخدم متتميز ليس لديك حدود ف استخدام البوت*\n\n*يمكنك استخدام اي امر*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} ايام*\n*✤ ${gata} ${rpgshop.emoticon('joincount')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('joincount')}* لشراء 🎟️ بريميوم  ${rpgshopp.emoticon('joincount')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.joincount -= gata * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no diamonds.*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} ايام*\n*✤ ${gata} ${rpgshop.emoticon('diamond')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('diamond')}* لشراء 🎟️ بريميوم  *${rpgshopp.emoticon('diamond')}* في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no diamonds.*\n\n${wm}`, fkontak, { mentions: [aa,] })}

	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*ضيف عدد الوقت*\n\n*✤ 🎟️ 1 = ${tiempoDecretado} ثواني*\n*✤ ${gata} ${rpgshop.emoticon('gold')}*\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}يتم قبول الأرقام فقط\n\n*مثال: ${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata) return conn.reply(m.chat, `${ag}ليس لديه ما يكفي *${rpgshop.emoticon('gold')}* لشراء 🎟️ بريميوم  ${rpgshopp.emoticon('gold')} في المتجر باستخدام ملف بأمر *${usedPrefix}buy* او يمكنك البيع للربح بأمر *${usedPrefix}sell*`, fkontak, m)
user.gold -= gata * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ انت الان مميز!!!*
*┃*
*┃✨ الرقم*
*┃» ${user.name}*
*┃💰 يدفع:* »  -${gata * text} ${rpgshopp.emoticon('diamond')}*
*┃👝 كان له:* » ${user.diamond + gata} ${rpgshopp.emoticon('diamond')}*
*┃🛄 غادرت في:* » ${user.diamond} ${rpgshopp.emoticon('diamond')}*
*┃🕐 الوقت:* » ${tiempoPremium} min*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no diamonds.*\n\n${wm}`, fkontak, { mentions: [aa,] })}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
await conn.reply(m.chat, `${htki} *🎟️ بريميوم 🎟️* ${htka}\n\n🌟 اشتري نوع من جواز السفر لتصبح مستخدم غالي!!!\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎 بريميوم - فصل ⓵\n✪${usedPrefix}prem1 1\n✪ تصريح اساسي\n✪ 15 ${rpgshop.emoticon('diamond')} ➟ بريميوم خمس دقايق\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🌀 بريميوم - تصريح ⓶\n✪${usedPrefix}prem2 1\n✪ ممر البرج الساحر\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min بريميوم\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💚 بريميوم - يمر ⓷\n✪${usedPrefix}prem3 1\n✪ الممر الأخضر\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min بريميوم\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🗑 بريميوم - يمر ⓸\n✪${usedPrefix}prem4 1\n✪ ممر النفايات\n✪ 50 ${rpgshop.emoticon('trash')} ➟ بريميوم ساعه\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n♦️ بريميوم - يمر ⓹\n${usedPrefix}prem5 1\n✪ مرر هانت برولانت\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h بريميوم\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🪙 بريميوم - يمر ⓺\n${usedPrefix}prem6 1\n✪ تمرير التشفير الرئيسي\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ بريميوم 7 سعات\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎+ بريميوم - فصل يمر ⓻\n${usedPrefix}prem7 1\nتصريح شادو بلس\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ بريميوم 24 ساعه\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n👑 بريميوم - فصل يمر ⓼\n${usedPrefix}prem8 1\n✪ تصريح الوقت الذهبي\n✪ 80 ${rpgshop.emoticon('gold')} ➟ بريميوم 3 ايام\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n${wm}`, fkontak, { mentions: [aa,] })

break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
