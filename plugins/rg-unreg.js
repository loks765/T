import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `*أدخل الرقم التسلسلي إذا كنت لا تعرف ما هو رقمك التسلسلي استخدم هذا الأمر* *'.تسلسل'*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `*للتفعيل الصحيح يرجي استخدام الامر*.تسلسل* للحصول على الرقم التسلسلي الخاص بك*`
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 4
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2
user.registered = false
m.reply(`*لم تعد مسجلا في قاعدة البيانات الخاصة بي 😢*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?|تسجيل-الخروج|تسجل-خروج|الغاء-التفعيل|غير منتظم|غير-منتظم|الغاء-التسجيل|الغاء التسجيل$/i
handler.register = true
export default handler
