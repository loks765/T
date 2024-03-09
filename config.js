import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

global.owner = [
  ['+966 56 904 4652', '𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ', true],
  ['+966 56 300 7262', '', false],
] //Number of owners

global.mods = ['917605902011','3246024864656'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SGWN']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇'
global.premium = 'true'
global.packname = 'تــمــد يــدك اكــســرهــا˼😊˹' 
global.author = '𝚂𝚑𝚊𝚛𝚔𝚢᯽𝚂𝚊𝚖𝚊あ' 
global.igfg = 
global.dygp = 
global.fgsc = 
global.fgyt = 
global.fgpyp = 
global.fglog = 


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = 3 // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

global.lenguajeGB = es  //Idioma de The-ShadowBot-MD, Ejemplo: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

//⊱ ━━━━━.⋅ Información ⋅.━━━━ ⊰

global.wm = '𝐷𝐼𝐴𝐵𝐿𝑂᯽𝐵𝑂𝑇'
global.igfg = '𝐵𝑌:𝑺𝒉𝒂𝒓𝒌𝒚あ𝐒𝐚𝐦𝐚'
global.wait = '*⌛ _انتظر لحظة..._ ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ _انتظر لحظة..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _انتظر لحظة..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _انتظر لحظة..._ ▬▬▬▬▬▬▭*'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = '1.4.9'
global.lb = '𝐵𝑌:𝑺𝒉𝒂𝒓𝒌𝒚あ𝐒𝐚𝐦𝐚'
global.yt = ''
global.ig = 'wa.me/966569044652'
global.md = ''
global.fb = 'wa.me/966569044652'

global.nna = 'wa.me/966569044652' //تحديث ، معلومات عن الروبوت
global.nn = 'wa.me/966569044652' // جروب 1
global.nnn = 'wa.me/966569044652' //جروب 2
global.nnnt = 'wa.me/966569044652' //Grupo del Colaboracion
global.nnntt = 'wa.me/966569044652' //Grupo COL 2 
global.nnnttt = 'wa.me/966569044652' //enlace lolibot
global.nnntttt = 'wa.me/966569044652' //Grupo ayuda sobre el bot
global.asistencia = 'wa.me/966569044652' //Dudas? escríbeme...G

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ