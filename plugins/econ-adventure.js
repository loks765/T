const itemMapping = {
  money: '💲‣ نــقــود',
  exp: '🆙‣ الــخــبــرة',
  trash: '🗑️‣ قــمــامــة',
  potion: '🏺‣ جــرعــة',
  diamond: '💎‣ الــمــاس',
  wood: '🪵‣  خــشــب',
  rock: '🪨‣  حــجــر',
  string: '🕸‣ خــيــط',
  emerald: ' ✧ ‣  زمــــرد',
  gold: '⚙‣ فــضــة',
  iron: '🔩‣ حــديــد',
  pet: '🦴‣ حــيــوان',
  petFood: '🍖‣ لــحــم',
  credit: '🪙‣ ذهــــب',
  uncommon: '📦‣ شائع',
  common: '📦‣ نادر',
  legendary: '📦‣ اسطوري',
  mythic: '📦‣ خرافي',
  };

function getArabicItemName(item) {
    return itemMapping[item] || item;
}
const cooldown = 1640000;

let handler = async (m, { usedPrefix }) => {
  let more = String.fromCharCode(8206);
  let done = '🎣';
  m.react(done);
  let user = global.db.data.users[m.sender];
  let time = user.lastadventure + cooldown;
  if (user.fishingrod == 0) return m.reply('*╮──────────────────⟢ـ*\n*┇‣ ❏ لـلـمـغـامـرة تـحـتـاج إلــى صــنــارة╿↶*\n*┇‣ ❏〘  ˼🎣˹  〙*\n*╯──────────────────⟢ـ*\n> *˼📜˹ نــــصــــائــــح╿↶*\n> *~اكــتــب~ " .صــنــاعــة "*\n> *⏎* *عـــشــان تــعــرف كــيــف تــصــنــع الــصــنــارة*')
  for (let i = 0; i < user.length; i++) {
    setTimeout(() => {
      user.health -= health * 1
      user[p].fishingroddurability -= fishingrod * 1
  if ((user[p].fishingroddurability * 1) < 1) {
    users.fishingrod -= 1
    users.fishingroddurability = (user.fishingrod * 1) * 50
      }
    }, (i * 1) * 1500)
  }

  let timers = cooldown - (new Date() - user.lastadventure);
  
  if (user.health < 80) {
        return m.reply(`*🎣يـتـطـلـب %80 صحة للمغامرة❤️‍🩹*\n> *يــرجــى تــعــبــئــة الصــحــة اولاً*\n> *بــاســتــخــدام الأمــر " .هــيــل "*`.trim());
    }

  if (new Date() - user.lastadventure < cooldown) {
    throw `*أنـت بالـفـعـل قـمـت بالـمـغـامـرة!!🎣*\n> *يــرجــى الإنــتــظــار╿↶*\n> *${msToTime(time - new Date())}🕒*`;
  }

    const rewards = reward(user);
    let text = "> *لـقـد غـامـرت ~وخــســرت🎣~*";

    for (const lost in rewards.lost) {
        if (user[lost]) {
            const total = rewards.lost[lost].getRandom();
            user[lost] -= total * 1;
            if (total) text += `~*-${total}*~\n> *نــقــطــة مــن صــحــتــك❤️‍🩹*`;
        }
    }

    text += '\n*ولــكــنــك حــصــلــت عــلــى 🎁╿↶*';

    for (const rewardItem in rewards.reward) {
        if (rewardItem in user) {
            const total = rewards.reward[rewardItem].getRandom();
            user[rewardItem] += total * 1;
            if (total) text += `\n*┇${itemMapping[rewardItem]}: ${total}*`;
        }
    }

    m.reply(text.trim());
    user.lastadventure = new Date() * 1;
};

handler.help = ['adventure', 'مغامرة', '', ''];
handler.tags = ['rpg'];
handler.command = /^(مغامرة|adventure|(ber)?petualang(ang)?|mulung)$/i;

handler.cooldown = cooldown;
handler.group = true;
handler.disabled = false;
handler.level = 10

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ' ســاعــة و ' + minutes + ' دقــائــق';
}

function reward(user = {}) {
    let rewards = {
        reward: {
          money: 19001,
          exp: 19001,
          credit: 0,
          trash: 1901,
          wood: 25,
          rock: 0,
          potion: 22,
          string: 20,
          emerald: 0,
          common: 30 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
          uncommon: [0, 0, 8, 0, 12, 0, 0, 6, 0].concat(
                              new Array(5 - (
                                  (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                              )).fill(0)
                          ),
                          mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                              new Array(8 - (
                                  (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                              )).fill(0)
                          ),
                          legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                              new Array(10 - (
                                  (user.dog > 8 && user.dog) || 4
                              )).fill(0)
                          ),
                          iron: [0, 0, 0, 0, 0, 0],
                          pet: 7,
                          petFood: 7,
                          gold: [0, 0, 0, 0, 0, 0, 0],
                          diamond: [0, 0, 0, 0, 0, 0, 0, 0].concat(
                              new Array(5 - (
                                  (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                              )).fill(0)
                          ),
                      },
                      lost: {
                          health: 101 - user.cat * 4
                      }
                  }
                  return rewards
              }

