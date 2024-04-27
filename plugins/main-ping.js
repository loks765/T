import speed from 'performance-now'

let handler = async (m, { conn }) => {
    let timestamp = speed();
    let latensi = speed() - timestamp;
    m.reply(`🟢 *S P E E D* : ${latensi.toFixed(4)} _ms_`);
};

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed','بينق','بنق','السرعه','السرعة','البنق','البينق','بينغ','بنغ','البينغ','البنغ']


export default handler
