let handler = async (m, { conn, args, text, usedPrefix , command }) => {
    let done = '🎡';
    m.react(done)
    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `*🎡 اســتــخــدام الأوامــــر:* ${usedPrefix + command} *<كــمــيــة> <احــمــر-اســود>*\n*مــثــال: ${usedPrefix + command} 500 أحــمــر*`
    let colores = ['احمر', 'اسود']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `*🎡لا يــمــكــنــك الــمــراهــنــة بــالــذهــب بــأقــل مــن 500*`
    if (!colores.includes(color)) throw '*🎡 يجب تحديد لون صالح:*\n*🔴احمر أو اسود⚫*'
    if (user.credit < amount) throw '*🎡 لــيــس لــديــك مــا يــكــفــي مــن الــذهــب!*'
    if (amount > 100000) throw `*🟥🎡 لا يــمــكــنــك الــمراهــنــة بــالــذهــب بــأكــثــر مــن 100000*`
   let result = ''
    if (colour == color) {
        result = `${colour == '*🎡احــمــر*' ? '*هــبــطــت الــكــرة عــلــى🎡* 🔴' : '*هــبــطــت الــكــرة عــلــى* ⚫'} \n\n*🏆لــقــد فزت* ${amount * 2} *ذهــب*`
        user.credit += amount * 2
    } else {
        result = `${colour == '*🎡احــمــر*' ? '*هــبــطــت الــكــرة عــلــى🎡* 🔴' : '*هــبــطــت الــكــرة عــلــى* ⚫'} \n\n*🪦لــقــد خــســرت* ${amount} *ذهــب*`
        user.credit -= amount
    }
    m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['عجله','عجلة','rt']
handler.level = 15

export default handler