import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let done = '⬆️';
    m.react(done);
    let name = conn.getName(m.sender);
    let user = global.db.data.users[m.sender];

    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
let txt = `> *﹝الـــــمـــــســـــتـــــوى﹞╿↶*
*╮──────────────────⟢ـ*
*┇〉🔖‣ الأســـــم:  ${name}*
*┇〉🏆‣ الـتــصـنـيـف: ${user.role}*
*┇〉🧬‣ الــخــبــرة: ${user.exp}*
*┇〉🎮‣ الــمــســتــوى: ${user.level}*
*╯──────────────────⟢ـ*
> *تــــحــــتــــاج إلــــى ${max - user.exp}-‼️*\n> *مـن نـقـاط الـخـبـرة* *لـرفـع مـسـتـواك⬆️*`.trim();

        try {
            conn.reply(m.chat, txt, m);
        } catch (e) {
            m.reply(txt);
        }
    } else {
let str =`*╮──────────────────⟢ـ*
*┇〉🔝‣ لــقــد ترقــى مــســتواك*
*┇〉📈‣ الـمـسـتـوى الـسـابـق: ${user.level - 1}*
*┇〉🆙‣ الـمــسـتـوى الــحـالـي: ${user.level}*
*┇〉🏆‣ الـتــصـنـيـف: ${user.role}*
*╯──────────────────⟢ـ*
> *▶‣ لـتـشـغـيـل الـتـرقـيـة الـتـلـقـائـيـة اكـتـب╿↶*
> *▶‣ ┇.ON autolevelup┇*`;

        try {
            conn.reply(m.chat, str, m);
        } catch (e) {
            m.reply(str);
        }
    }
}

handler.help = ['levelup'];
handler.tags = ['econ'];
handler.command = ['لفل', 'nivel', 'lvl', 'levelup', 'level'];

export default handler;
