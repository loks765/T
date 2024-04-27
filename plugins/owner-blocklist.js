let handler = async (m, { conn }) => {	
    await conn.fetchBlocklist().then(async data => {
    let txt = `*≡ القائمة المحظورة*\n\n*المجموع :* ${data.length}\n\n┌─⊷\n`
    for (let i of data) {
    txt += `▢ @${i.split("@")[0]}\n`}
    txt += "└───────────"
    return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
    }).catch(err => {
    console.log(err);
    throw '*لا توجد أرقام محظورة*'})}
    handler.help = ['blocklist']
    handler.tags = ['main']
    handler.command = ['قائمة-البلوك','بلوك-ليست','البلوكات','بلوكات','blocklist', 'listblock'] 
    handler.rowner = true
    export default handler