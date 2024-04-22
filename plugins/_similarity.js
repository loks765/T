import didyoumean from 'didyoumean';
import similarity from 'similarity';

export async function before(m, { conn, match, usedPrefix, command }) {
    if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '');
        let args = noPrefix.trim().split` `.slice(1);
        let text = args.join` `;
        let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
        if (help.includes(noPrefix)) return;
        let mean = didyoumean(noPrefix, help);
        let sim = similarity(noPrefix, mean);
        let som = sim * 100;
        let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let user = global.db.data.users[m.sender]
        let mentionedUsername = conn.getName(who); // اسم المستخدم المنشن
        let caption = `*اهــلاً  ⌊ ${mentionedUsername} ⌉ كـيـف حـالـك الـيـوم؟ هــل تــحــاول اســتــخــدام〘  ˼ ${usedPrefix + mean} ˹ ?  〙*`;

        if (mean) {
            let imgurl = 'https://telegra.ph/file/311cb0b0ac4693bfbec62.jpg'; // رابط الصورة
            let filename = 'imgerror.jpg';
            conn.sendFile(m.chat, imgurl, filename, caption, m, { thumbnail: Buffer.alloc(0), mentions: [who] });
        }
    }
}

export const disabled = false;
