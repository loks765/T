const xppercredit = 1;
const exchangeRate = 10; // عدد النقود التي تحصل عليها مقابل كل واحد ذهب

// دالة وهمية للحصول على إجمالي الذهب والنقود
function getTotalGoldAndMoney(sender) {
    // الخوارزمية لحساب إجمالي الذهب والنقود
    // قم بتغيير هذا بالتنفيذ الفعلي لديك
    return { totalGold: 0, totalMoney: 0 };
}

let handler = async (m, { conn, command, args }) => {
    let done = '💲';
    m.react(done)
    let user = global.db.data.users[m.sender];
    let count = command.replace(/^tomoney|نقود/i, '');
    count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].credit / xppercredit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
    count = Math.max(1, count);

    // حساب إجمالي الذهب والنقود الحالي
    const { totalGold, totalMoney } = getTotalGoldAndMoney(m.sender);

    if (global.db.data.users[m.sender].credit >= xppercredit * count) {
        global.db.data.users[m.sender].credit -= xppercredit * count;
        global.db.data.users[m.sender].money += count * exchangeRate; // تحويل الذهب إلى نقود باستخدام معدل الصرف
        conn.reply(m.chat, `
*┌─⊷「▧ مـلاحـظـة الـدفـع 🗒」⊶*
*▢〉💰‣ الــشــراء : +${count * exchangeRate} نــقــود*
*▢〉🪙‣ أنــفــق : -${xppercredit * count} ذهــب*
*└──────────────⊷*
*┌───⊷*
*▢〉🪙‣ مـجـمـوع الـذهـب الـحـالـي: ${user.credit}*
*▢〉💲‣ مـجـمـوع الـنـقـود الـحـالـي: ${user.money}*
*└──────────────⊷*`, m);
    } else {
        conn.reply(m.chat, `*❎ عذرًا، ليس لديك ما يكفي من الذهب لشراء ${count * exchangeRate} 💰نقود*\n*└──────────────⊷*\n*┌───⊷﹝📜نصائح📜﹞⊷*\n *يمكنك الحصول على الذهب باستخدام الأوامر المتوفرة في قائمة الألعاب والاقتصاد*\n*└──────────────⊷*`, m);
    }
};

handler.help = ['tomoney <amount>']
handler.tags = ['xp']
handler.command = /^نقود|tomoney([0-9]+)|tomoney|tomoneyall$/i

export default handler
