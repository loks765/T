let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    let caption = `*تمت إزالة انتهاء الصلاحية لهذه المجموعة بنجاح*`
    conn.sendButton(m.chat, caption, wm, null, [['الاوامر ☘️', `/menu`]], m)
    
}
handler.help = ['delexpired']
handler.tags = ['owner']
handler.command = /^(delbot|delbottemporal|delbotemporal)$/i
handler.owner = true
handler.register = true
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *ايام* ☀️\n" + hours + " *ساعات* ⏳\n" + minutes + " *دقائق* ⏰\n" + sec + " *ثواني* 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
