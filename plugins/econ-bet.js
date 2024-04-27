let confirm = {}

async function handler(m, { conn, args }) {
  // Check if the user is already in a gamble.
  if (m.sender in confirm) {
    throw '*أنــت لا تــزال فــي اســتــثــمــار. يــرجــى الانــتــظــار حــتــى يــتــم الانــتــهــاء مــنــه💹.*'
  }

  try {
    let user = global.db.data.users[m.sender]
    if (user.atm == 0) return m.reply('*┌─⊷*\n*‣ ❏ لأستخـدام البنك تحـتاج إلى بطاقة*\n*‣ ❏〘  ˼💳˹  〙*\n*└──────────────⊷*\n*┌───⊷﹝📜نــصــائــح📜﹞⊷*\n*▢ ~اكــتــب~ " .صــنــاعــة "*\n *⏎* *عـــشــان تــعــرف كــيــف تــصــنــع الــبــطــاقــة*\n*└──────────────⊷*')
    String.fromCharCode(8206);
    let done = '💹';
    m.react(done)
    let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(user.money) : 1) * 1

    // Limiting the maximum bet amount to 100000.
    if (count > 500000) {
      count = 500000
    }

    if (user.money < count) {
      return m.reply('*لــيــس لــديــك مــا يــكــفــي مــن الــمــال لــهــذا الأسـتـثـمـار💹*')
    }

    if (!(m.sender in confirm)) {
      confirm[m.sender] = {
        sender: m.sender,
        count,
        timeout: setTimeout(() => (m.reply('*انــتــهــت مــهــلــة الأسـتـثـمـار*'), delete confirm[m.sender]), 60000)
      }

      let txt = `*┌───⊷*\n*هـل أنـت مـتـأكـد أنـك تـريـد وضـع هـذا الـرهـان؟*\n*└──────────────⊷*\n*┌───⊷*\n*'نــعــم'* ~*او*~ *'لـا'*\n*┌───⊷*\n*مــبــلــغ الأسـتـثـمـار: ${count}* 💹\n*└──────────────⊷*\n*لــديــك 60 ثــانــيــة لــلــرد.*`
      return conn.sendMessage(m.chat, { text: txt, quoted: m, contextInfo: { mentionedJid: [m.sender] } });
    }
  } catch (e) {
    console.error(e)
    if (m.sender in confirm) {
      let { timeout } = confirm[m.sender]
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('*تــم إلــغــاء الأسـتـثـمـار بــســبــب خــطــأ❌.*')
    }
  }
}

handler.before = async m => {
  if (!(m.sender in confirm)) return
  if (m.isBaileys) return

  let { timeout, count } = confirm[m.sender]
  let user = global.db.data.users[m.sender]
  let initialMoney = user.money * 1
  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()

  try {
    if (/^(✔️|y(es|a)|نعم)?$/i.test(txt)) {
      let botScore = (Math.ceil(Math.random() * 51)) * 1  // Random score for the bot (1 to 51)
      let playerScore = (Math.floor(Math.random() * 51)) * 1  // Random score for the player (1 to 100)
      let status = 'خــــاســــر❌'

      if (botScore < playerScore) {
        user.money += count * 1
        status = 'فــــائــــز✔️'
      } else if (botScore > playerScore) {
        user.money -= count * 1
      } else {
        status = 'تــــعــــادل💹'
        user.money += Math.floor(count / 1.5) * 1
      }

      let result = `
| *الــلاعــبــيــن* | *نــقــاط* |
*ديــابــلــو: ${botScore}*
*انــــــــت: ${playerScore}*
*انــــــــت: ${status}*\n*رصــيــدك الــجــديــد: ${user.money}💹*
`.trim()

      m.reply(result)
      clearTimeout(timeout)
      delete confirm[m.sender]
      return true
    } else if (/^(✖️|no|لا)?$/i.test(txt)) {
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('*تــم إلــغــاء الأسـتـثـمـار❌.*')
      return true
    }

  } catch (e) {
    clearTimeout(timeout)
    delete confirm[m.sender]

    // If money was lost due to an error, restore it.
    if (initialMoney > user.money) user.money = initialMoney

    m.reply('*تــم إلــغــاء الأسـتـثـمـار بــســبــب خــطــأ❌.*')
    return true
  } finally {
    clearTimeout(timeout)
    delete confirm[m.sender]
    return true
  }
}

handler.help = ['bet [amount]']
handler.tags = ['rpg']
handler.command = /^(رهان|bet|استثمار|الأستثمار)$/i

handler.level = 15
handler.group = true

export default handler

/**
 * Detect if the input is a number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
