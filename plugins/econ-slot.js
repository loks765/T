// نسبة الفوز المطلوبة (مثال: 0.5 تعني نسبة 50% للفوز)
let winProbability = 0.5;

// وظائف التعاميل الخاصة باللعبة
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `> *˼🪙˹ بــكــم تــود ان تــلــعــب؟╿↶*
> *˼📌˹ ‣ مــــثــــال╿↶*
> *˼📌˹ ‣ ❮  ˼${usedPrefix + command} 500˹  ❯*`.trim()
    let done = '🪙';
    m.react(done);
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let amount = parseInt(args[0])
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 5000
    if (new Date - users.lastslot < 5000) throw `*⏳ انــتــظــر ${msToTime(time - new Date())} لاســتــخــدامــهــا مــرة أخــرى*`
    if (amount < 500) throw `✳️ *لا يــمــكــنــك الــمــراهــنــة بالــذهــب بأقــل مــن 500*`
    if (users.credit < amount) {
        throw `✳️ *لــيــس لــديــك مــا يــكــفــي مــن الــذهــب للــمــراهــنــة*`
    }
    if (amount > 300000) throw `🏦 *لا يــمــكــنــك الــمــراهــنــة بالــذهــب بأكــثــر مــن 300K*`

    // قائمة الرموز في اللعبة
    let emojis = ["🕊️", "🦀", "🦎"];

    // تحديد الرموز لكل عجلة
    let a = Math.random() < winProbability ? 0 : Math.floor(Math.random() * emojis.length);
    let b = Math.random() < winProbability ? a : Math.floor(Math.random() * emojis.length);
    let c = Math.random() < winProbability ? a : Math.floor(Math.random() * emojis.length);

    let x = [],
        y = [],
        z = [];

    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }

    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }

    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }

    let end;
    if (a == b && b == c) {
        end = `> *🎊 الـفـوز بـالـجـائـزة الـكـبـرى! لـقـد فـزت╿↶*\n*〉 +${amount + amount} ذهـــب 🪙*`
        users.credit += amount + amount
    } else {
        end = `> *🪦 لـــقـــد خـــســـرت╿↶*\n*〉 ${amount}- ذهـــب 🪙*`
        users.credit -= amount
    }
    users.lastslot = new Date().getTime();
    return await m.reply(
        `> *˼🎰˹ ┃ فــــتـــحـــات ╿↶* 
     *───────────*
        *${x[0]} : ${y[0]} : ${z[0]}*
        *${x[1]} : ${y[1]} : ${z[1]}*
        *${x[2]} : ${y[2]} : ${z[2]}*
     *───────────*     
${end}`) 
}
handler.help = ['slot <amount>']
handler.tags = ['game']
handler.command = ['ربح']
handler.group = true
handler.level = 10

export default handler

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    // ضبط قيم التنسيق
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes} دقـــائـــق و ${seconds} ثــــوانـــي`;
}
