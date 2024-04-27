let handler = m => m
let more = String.fromCharCode(8206);
let done = '⭐';
m.react(done);
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`${ag}*@${m.sender.split`@`[0]} انتي وقتك كمستخدم بريميوم!*\nولم تعد مستخدما متميزا يرجي التواصل مع المطور ليجعلك مميزا`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false
}}}
