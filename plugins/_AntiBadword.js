const isToxic = /$انيك|^زبي$|^كس$|^اير$|مايا خليفة|منيوك|اركب عليه|خنيث|مخنث|خكري|^قي$|شاذ|متناك|انيك امك$|كسمك|منيوكتي|ياقحبتي|بطيزك$|قحبه|يلعن|^العن$|يلعنك|اباحي|^بخش$|^بخشي$|^ناك$|زرقها|^ناكك$|افتحك$|مص$|زبي$|كس امك|شرموطه متناكه|قحبتي|خنثه|خنث|على ايري|^كسك|زبك|شرموطتك|^ايري$|تلحس|بنيك|شرفك|^شرف$|طيز|^نيك$|انتاك|نيكو|يا كس|انتا كس|ياكس|انت كس|ديود|ديودك|^صدرك$|بنيكك|عرص|منيك|قحب|عرصه|بغتصب|بغتصبك|اغتصاب|بنيكك|شرموطه|شرموطة|على زبي|مغتصبك|نيك عاري|ممارسة جنس|ممارسة الجنس|.صورة كس|هنتاي|هينتاي|hentai|.صوره كس|.بحث كس|طيزي|^زب$|عرص|انيكك|شرموط|قحبة|سكس|قحبه|شرموط|قحبة^/i

import axios from "axios"
import fetch from "node-fetch"

export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe)
      return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  const isAntiToxic = isToxic.exec(m.text)
  let removeParticipant = m.key.participant
  let messageId = m.key.id

  if (chat.antiToxic && isAntiToxic) {
  var analysisResult = await Analyze(m.text)
  var toxicityLevels = [
            "❤️  ❤️  ❤️  ❤️  ❤️",
            "☠️  ❤️  ❤️  ❤️  ❤️",
            "☠️  ☠️  ❤️  ❤️  ❤️",
            "☠️  ☠️  ☠️  ❤️  ❤️",
            "☠️  ☠️  ☠️  ☠️  ❤️",
            "☠️  ☠️  ☠️  ☠️  ☠️"
        ];
        var toxicityVerdict = [
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*",
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*",
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*",
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*",
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*",
            "*لـقـد تـلـقـيـت تـحـذيـرًا مــن ديـابـلـو⚠️*"
        ];


    const toxicityPercentage = Number(analysisResult.toxicity * 100).toFixed(2)
    let toxicityIndex;
    if (toxicityPercentage < 15) {
        toxicityIndex = 0
    } else if ((toxicityPercentage > 14) && (toxicityPercentage < 35)) {
        toxicityIndex = 1
    } else if ((toxicityPercentage > 34) && (toxicityPercentage < 51)) {
        toxicityIndex = 2
    } else if ((toxicityPercentage > 50) && (toxicityPercentage < 76)) {
        toxicityIndex = 3
    } else if ((toxicityPercentage > 75) && (toxicityPercentage < 95)) {
        toxicityIndex = 4
    } else {
        toxicityIndex = 5
    }


        var caption = `> *˼⚠️˹ الــقــوة الــســامــة╿↶*\n> *${toxicityLevels[toxicityIndex]}*\n> ${toxicityVerdict[toxicityIndex]}\n`

        await this.fakeReply(m.chat, `*تــم اكــتــشــاف الــكــلمــات الــســيــئــة!*\n${caption} ${isBotAdmin ? '' : '\n> *الــبــوت لــيــس ادمــن⭐!*'}`, m)

        if (isBotAdmin) {
            // Remove the participant from the group
          
            return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: messageId, participant: removeParticipant }})
        } 
    }
    return !0
}

async function Analyze(text) {
    try {
        const result = await axios.post("https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=", {
            comment: {
                text: text,
                type: 'PLAIN_TEXT'
            },
            languages: ['en'],
            requestedAttributes: { SEVERE_TOXICITY: {}, INSULT: {} }
        });
        return { toxicity: result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value, insult: result.data.attributeScores.INSULT.summaryScore.value, combined: (result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value + result.data.attributeScores.INSULT.summaryScore.value) / 2 };
    } catch (error) {
        console.error(error);
        return { toxicity: NaN, insult: NaN, combined: NaN };
    }
}
