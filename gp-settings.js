let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'افتح': 'not_announcement',
        'فتح': 'not_announcement',
        'أفتح': 'not_announcement',
        'اغلق': 'announcement',
        'اغلاق': 'announcement',
        'غلق': 'announcement',
        'أغلاق': 'announcement',
        'إغلاق': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ ارسل خيارًا:*
  *▢ ${usedPrefix + command} اغلق*
  *▢ ${usedPrefix + command} افتح*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['قروب','مجموعة','group', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler
