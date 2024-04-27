let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*افــضــل صــديــقــيــن فــي الــقــروب*\n\n *${toM(a)} اعــثــر عــلــى الاصــدقــاء هههه ${toM(b)}*  \n\n *تــبــدأ أفــضــل الــصــداقــات بــالالــعــاب 😂*`, null, {
mentions: [a, b]
})}
handler.help = ['amistad']
handler.tags = ['main', 'fun']
handler.command = ['اصدقاء','صديق','صداقة']
handler.register = true
handler.group = true
export default handler