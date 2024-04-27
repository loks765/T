
let handler = async (m, { conn, args, text, usedPrefix , command }) => {
//if (global.db.data.users[m.sender].level < 15) {
    //return conn.reply(m.chat, 'يــجــب أن تــكــون عــلــى الأقــل فــي المــســتــوى 15 لاســتــخــدام هـــذا الأمــر', m);
  //}

String.fromCharCode(8206);
  let done = '🥊';
  m.react(done)
  
    let fa = `
*┌─⊷「❏ بــكــم تــود ان تــصــارع؟ 🐥」⊶*
*▢〉📌‣ مــثــال :↶*
*▢〉🐥‣ ❮  ˼${usedPrefix + command} 5K˹  ❯*
*└──────────────⊷*`.trim()
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa

    let users = global.db.data.users[m.sender]
    let credit = users.credit
    let amount = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(parseInt(users.credit)) : 1) * 1

    let time = users.lastcf + 150000
        if (new Date - users.lastcf < 150000) throw `*يــمــكــنــك لــعــب مــصــارعــة الــبــطــة🐥مــرة أخــرى* ${msToTime(time - new Date())}`
        if (amount < 5000) throw `*🏦 لا يــمــكــنــك الــمــراهــنــة بــالــذهــب بــأقــل مــن 5K*`
        if (users.credit < amount) throw `🏦 *لــيــس لــديــك مــا يــكــفــي مــن الــذهــب لــهــذا الــرهــان.*\n*لــديــك حــالــيــا فــقــط ${credit} فــي الــذهــب.*`
        if (users.chicken < 1) {
        throw `🏦 *لــيــس لــديــك أي بــطــات🐥لــلــمــراهــنــة* \n*اســتــخــدم الأمــر ${usedPrefix} بــطــة*`
    }
  if (amount > 100000) throw `🏦 *لا يمكنك المراهنة على الذهب أكثر من 100K*`

    let botScore = (Math.ceil(Math.random() * 35)) * 1  // Random score for the bot (1 to 51)
    let playerScore = (Math.floor(Math.random() * 61)) * 1  // Random score for the player (1 to 100)
    let status = `مــــاتــــت بــــطــــتــــك🐥🪦`

      if (botScore < playerScore) {
        users.credit += amount * 1
        status = `*لــقــد فــازت بــطــتــك الــصــغــيــرة فــي الــمــعــركــة، وصــنــعــتــك 🪙 ${amount * 2} الــذهــب أكــثــر ثــراء! 🐥*`
      } else {
        users.credit -= amount * 1
        users.chicken -= 1
        users.lastcf = new Date * 1
      }

    let result = `${status}
      `.trim()

    m.reply(result)
    
}

handler.help = ['cock-fight','مصارعة']
handler.tags = ['economy']
handler.command = ['مصارعة','cock-fight', 'مصارعه']
handler.level = 15
handler.group = true

export default handler  

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "" + hours : hours
  minutes = (minutes < 10) ? "" + minutes : minutes
  seconds = (seconds < 10) ? "" + seconds : seconds

    return minutes + ' دقـــائـــق ' + seconds + ' ثــــوانـــي ';
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

/**
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}