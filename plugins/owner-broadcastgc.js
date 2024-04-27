let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw '*أدخــل الــرســالــة الــتــي تــريــد بــثــهــا*'
    for (let i of anu) {
    await delay(500)
    conn.relayMessage(i, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: '[انــتــبــاه]\n\n' + pesan + '\n\nهــذا بــيــان رســمــي',
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {}).catch(_ => _)
    }
  m.reply(`*تــم إرســال الــرســالــة إلــى ${anu.length} الــمــجــمــوعــات/S*\n\n*مــلــحــوظــة: قــد يــفــشــل هــذا الأمــر ولا يــتــم إرســالــه إلــى جــمــيــع الــدردشــات، نــأســف فــي الــوقــت الــحــالــي*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

export default handler
