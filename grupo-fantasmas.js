let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*هــذه الــمــجــمــوعــة نــشــطــة ولــيــس بــهــا اصــنــام*`, m) 
m.reply(`*[ ⚠ الــنــاس اللــي مــاتــتــفاعــل ⚠ ]*\n\n*الــقــروب:* ${await conn.getName(m.chat)}\n*الاعــضــاء:* ${sum}\n\n*[ 👻 قــائــمــة الاصــنــام 👻 ]*\n${sider.map(v => '  ❈↲ تــفــاعــل ✨💜 @' + v.replace(/@.+/, '')).join('\n')}\n\n*مــلــحــوظــة : مــو شــرط ان الــبــوت يــكــون صــح 100% غــيــر انــه يــعــد الــرســايــل وهــو شــغــال بــس وقــت مــا دخــل الــقروب + الاشــبــاح هــنــا الــمــقــصــود فــيــهــم اللــي دخــلــو الــقــروب ومــاتــفــاعــلــو ابــدا*`, null, { mentions: sider })}
handler.command = /^(الاصنام|الاشباح|اشباح|الأصنام|الأشباح|أصنام|اصنام)$/i
handler.admin = true
handler.botAdmin = true
export default handler
