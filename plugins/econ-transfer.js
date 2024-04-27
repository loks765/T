const items = ['credit','exp','money','diamond','emerald','gold','iron','rock','string','wood','potion','trash','pet','petFood','uncommon','common','legendary','mythic','']
let confirmation = {}

async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('*أنـت تـقـوم بـعـمـلـيـة تـحـويـل*')
    let user = global.db.data.users[m.sender]
    String.fromCharCode(8206);
    let done = '💱';
    m.react(done)
    const item = items.filter(v => v in user && typeof user[v] == 'number')
let lol = `> *✳️ الاســتــخــدام الــصــحــيــح لــلأمــر*
> *${usedPrefix + command}*  [العنصر] [الكمية] [@شخص]
> *˼📌˹ مــثــال:╿↶*
> *˼💱˹ ${usedPrefix + command}* ${args[0] || '*خبرة*'} 65 @${m.sender.split('@')[0]}
> *˼💱˹ تـــحــويـــل الــعـــنـــاصـــر╿↶*
*╮──────────────────⟢ـ*
*┇▢〉🆙‣ خــبــرة =*
*┇▢〉💵‣ نـــقود =*
*┇▢〉🪙‣ ذهـــب =*
*┇▢〉💎‣ الــمــاس =*
*┇▢〉  ✧ ‣  زمــرد  =*
*┇▢〉⚙‣ فــضــة  =*
*┇▢〉🔩‣ حــديــد =*
*┇▢〉🪨‣ حــجــر  =*
*┇▢〉🕸‣ خــيــط =*
*┇▢〉🪵‣ خــشــب =*
*┇▢〉🏺‣ جــرعــة =*
*┇▢〉🗑️‣ قــمــامــة =*
*┇▢〉🦴‣ حــيــوان =*
*┇▢〉🍖‣ لــحــم =*
*┇▢〉📦‣ شــــائــــع =*
*┇▢〉📦‣ نــــــــادر =*
*┇▢〉📦‣ اســــطــــوري =*
*┇▢〉📦‣ خــــرافــــي =*
*╯──────────────────⟢ـ*
`.trim()
    let type = (args[0] || '').toLowerCase()


    if (type === 'خبرة') {
        type = 'exp';
        args[0] = type;
    }
    if (type === 'نقود') {
        type = 'money';
        args[0] = type;
    }
    if (type === 'ذهب') {
        type = 'credit';
        args[0] = type;
    }
    if (type === 'الماس') {
        type = 'diamond';
        args[0] = type;
    }
    if (type === 'زمرد') {
        type = 'emerald';
        args[0] = type;
    }
    if (type === 'فضة') {
        type = 'gold';
        args[0] = type;
    }
    if (type === 'حديد') {
        type = 'iron';
        args[0] = type;
    }
    if (type === 'حجر') {
        type = 'rock';
        args[0] = type;
    }
    if (type === 'خيط') {
        type = 'string';
        args[0] = type;
    }
    if (type === 'خشب') {
        type = 'wood';
        args[0] = type;
    }
    if (type === 'جرعة') {
        type = 'potion';
        args[0] = type;
    }
    if (type === 'قمامة') {
        type = 'trash';
        args[0] = type;
    }
    if (type === 'حيوان') {
        type = 'pet';
        args[0] = type;
    }
    if (type === 'لحم') {
        type = 'petFood';
        args[0] = type;
    }
    if (type === 'شائع') {
        type = 'uncommon';
        args[0] = type;
   }
    if (type === 'نادر') {
        type = 'common';
        args[0] = type;
   }

    if (type === 'اسطوري') {
        type = 'legendary';
        args[0] = type;
   }
    if (type === 'خرافي') {
        type = 'mythic';
        args[0] = type;
   }

    if (type === '') {
        type = '';
        args[0] = type;
   }
    if (type === '') {
        type = '';
        args[0] = type;
   }
  
    if (!item.includes(type)) return conn.reply(m.chat, lol, m, { mentions: [m.sender] })
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('*✳️ مــنــشــن أحــد الأشــخــاص @*')
    if (!(who in global.db.data.users)) return m.reply(`*✳️ الــمــســتــخــدم لــيــس فــي قــاعــدة الــبــيــانــات الــخــاصــة بــي*`)
    if (user[type] * 1 < count) return m.reply(`*✳️  ${type}  غــيــر كــافــيــة لــلــتــحــويــل*`)
    let confirm = `
*هــل انــت مــتــأكــد مــن تــحويــل* *${count}* _*${type}*_ الــى  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

 *لــديــك 60 ثــانــيــة* 
 *أجـــب* *نــعــم* او *لـــا*
`.trim()

    //conn.sendButton(m.chat, confirm, igfg, null, [['yes'], ['no']], m, { mentions: [who] })
     m.reply(confirm, null, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*⏳ نـــفـــذ الـــوقـــت!*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?|لا/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('*✅ تــم الــغــاء عــمــلــيــة الــتــحــويــل*')
    }
    if (/si?|نعم/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ *تـــم تـــحويـــل* *${count}* *${type}*  *الـــى* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`❎ *حــدث خــطــأ اثــنــاء عــمــلــيــة الــتــحــويــل* *${count}* ${type} *الــى* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [item] [quantity] [@tag]')
handler.tags = ['econ']
handler.command = ['payxp','paydi', 'transfer', 'darxp','dardi','تحويل']

handler.disabled = false

export default handler

function isNumber(x) {
    return !isNaN(x)
}
