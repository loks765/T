import moment from 'moment-timezone';

const salaries = {
  money: 9000000,
  exp: 1000000,
  credit: 250000,
};

// Set the cooldown to one month in milliseconds (30 days)
const cooldown = 30 * 24 * 60 * 60 * 1000;

let handler = async (m) => {
  let user = global.db.data.users[m.sender];

  // Set the timezone to "Asia/Kuwait"
  moment.tz.setDefault("Asia/Kuwait");

  // Get the current date in the specified timezone
  const currentDate = moment().tz("Asia/Kuwait");

  // Check if today is the 25th of the month
  if (currentDate.date() !== 1) {
    throw `*لا يــمــكــنــك اســتــلام الــراتــب الــمــخــصــص لــلــمــشــرفــيــن إلا فــي الــيــوم الـ 1 مــن كــل شــهــر*`;
  }

  // Check if the user has already received their salary this month
  if (user.lastsalary) {
    throw `*لــقــد اســتــلــمــت راتــبــك بــالــفــعــل هــذا الــشــهــر، انــتــظــر حــتــى الشــهــر الــقــادم ❗*`;
  }

  let text = '';
  for (let reward of Object.keys(salaries)) {
    if (reward in user) {
      user[reward] += salaries[reward];
      text += `*+${salaries[reward]}* ${rpg.emoticon(reward)}${reward}\n`;
    }
  }

  m.reply(`
💰 *لــقــد عــمــلــت بــجــهــد واســتــحــقــيــت راتــبــك*
${text}`);

  // Update the user's last salary date to prevent receiving it again this month
  user.lastsalary = currentDate.toDate();
};

handler.help = ['salary'];
handler.tags = ['salary'];
handler.admin = true;
handler.command = ['راتب', 'salary', 'راتبي'];
handler.group = true;
handler.cooldown = cooldown;

export default handler;