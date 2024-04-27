export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
> *˼👩‍🏫˹ رجــــــعــــــت╿↶*
*╮──────────────────⟢ـ*
*┇✅‣ لقد توقـفت عن كونك مختفي*
*╯──────────────────⟢ـ*
${user.afkReason ?  '> *˼❓˹ ‣ الــســبــب╿↶*\n> ˼❓˹ ‣ ' + user.afkReason : '> *˼❓˹ ‣ الــســبــب╿↶*\n> *بــلا ســبــب أو لــم يذكــر ســبــب*'}
> *˼⏳˹ ‣ مــدة الأخــتــفــاء╿↶*\n> *${msToTime(new Date - user.afk)}*`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
> *˼😴˹ مــشــغــول╿↶*
*╮──────────────────⟢ـ*
*┇💤‣ الشخص الذي ذكرته مختفي حاليا* 
*╯──────────────────⟢ـ*
${reason ?  '> *˼❓˹ ‣ الــســبــب╿↶*\n> ˼❓˹ ‣ ' + reason : '> *˼❓˹ ‣ الــســبــب╿↶*\n> *بــلا ســبــب أو لــم يذكــر ســبــب*'}
> *˼⏳˹ ‣ مــدة الأخــتــفــاء╿↶*
> *${msToTime(new Date - afkTime)}*`.trim())
    }
    return true
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ' ســاعــة و ' + minutes + ' دقــائــق';
}