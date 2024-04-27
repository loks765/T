
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `*🔴 وداعا وداعا* *${this.user.name}* *سوف يغادر المجموعة* \n\n *انتهى الإيجار الخاص بك*`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
