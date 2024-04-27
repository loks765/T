let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
  if (!text) throw "*اذكــر الــشــخــص الــذي تــريــد الــتــحــقــق مــن شــخــصــيــتــه @مــنــشــن*"
  const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
const userChar = [
    "ســيــجــمــا انــســان قــد الــمــســؤولــيــة🫡♠",
    "كــريــم الــكــرم يــشــرشــر مــنــه🍧",
    "مــثــقــف انــســان ذكــي🎓",
    "ثــقــة مــفرطــة😎",
    "انــســان مــطــيــع جــدا🐶",
    "حــبــوب و الــيــف جــدا🦮",
    "جــيــد لا بــأس بــه👏🏼",
    "مــغــفــل انــســان فــاشــل👎🏻",
    "عــطــوف🧚🏼‍♀️",
    "مــريــض نــفــســيــا وعــقــلــيــا🤒",
    "مــنــحــرف بــاكــا👚",
    "رائــع انــســان مــبــدع🎆",
    "مــتــعــاون و طــيــوب🌟",
    "بــاهِــر جــدا☃",
    "مــز يــالــبــيــه🐝",
    "عــســل عــســول🍯",
    "خــلاب اويــلاو🦋",
    "لــطــيــف مــره كــيــوت🤏",
    "انــســان خــاروف🐑",
    "انــســان كــلــب🐕",
  ]
  const userCharacterSeletion =
    userChar[Math.floor(Math.random() * userChar.length)]

  let message = `*شــخــصــيــة*\n*@${mentionedUser.split("@")[0]} يـــكـــون* *${userCharacterSeletion}*`

  conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })

}
handler.help = ["نوعية"]
handler.tags = ['fun']
handler.command = /^(نوع|نوعية|نوعيه)/i

export default handler 