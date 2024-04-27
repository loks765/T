let handler = async (m, { conn, args }) => {
    if (!args[0] || isNaN(args[0])) {
        return conn.reply(m.chat, '*يــرجــى تــقــديــم كــمــيــة صــالــحــة مــن نــقــاط الــخــبــرة*', m);
    }

    let expToSubtract = parseInt(args[0]);
    if (expToSubtract <= 0) {
        return conn.reply(m.chat, '*يــرجــى تــقــديــم كــمــيــة إيــجــابــيــة لتــخــفــيــض نــقــاط الــخــبــرة*', m);
    }

    let mentionedUser = m.mentionedJid[0];
    if (!mentionedUser) {
        return conn.reply(m.chat, '*مــنــشــن احــد الاعــضــاء لــتــخــفــيــض نــقــاط الــخــبــرة لــديــه*', m);
    }

    let userData = global.db.data.users[mentionedUser];
    if (!userData) {
        return conn.reply(m.chat, '*الــعــضــو غــيــر مــوجــود فــي قــاعــدة الــبــيــانــات*', m);
    }

    if (expToSubtract > userData.exp) {
        return conn.reply(m.chat, '*لــيــس لــدى الــعــضــو مــا يــكــفــي مــن نــقاــط الــخــبــرة لــلــخــصــم*', m);
    }

    userData.exp -= expToSubtract;

    let name = conn.getName(mentionedUser);
    let txt = `
*تــم خــصــم* *-${expToSubtract}* *نــقــاط الــخــبــرة مــن* ${name}. *اجــمــالــي الــخــبــرة الآن* ${userData.exp}
`.trim();

    conn.reply(m.chat, txt, m);
}

handler.help = ['subexp <amount> @mention'];
handler.tags = ['econ'];
handler.Group = true;
handler.admin = true;
handler.command = ['خصم-خبرة','خصم','subexp'];

export default handler;
