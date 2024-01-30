import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['917605902011', 'GURU', true],
  ['6281255369012', 'Ash', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '09133755183']
global.allowed = ['917605902011', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.idKING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR085VGlsbDBDUU5DM3FEbXBFbUlOemR1MitSMENWaWNxY0hWeW51ZGVXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXRHallBUGR6ZWtJU2tSVzVRNDh4Tk1TMUUvYThOWjIzVVp3STZLNE8yUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QndlcVBoRzVOY3ZCVGd5dUJib2RCanJSZUtReGphYWxwWXpubDRKRDA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwek5uclBTbEJYQ2xoNFBBM1Q5SGdqbVhwV2lhSWFENlNyc1RVZzdhQ1dzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGQWNJQWdnYk14R2lVOGV1NmdrRzBjOW4waGhmSkh3bzdkZFZTcWVsMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZUK1lSak9Tcmgya1F5bEppeU05Y2V4bzVlV0xKb3J5ZHMwOEY2eW1QUVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOFlUbFBDczNMR0lSWGVrN3VYR1ZYU2N0cmVhQWdXWGpKcFJFZUZxaXR0cFJVNTFENnlXYkRNUjZVbEE0dEZCS0ZaUnFUNFM1WDdZakFjOGhzMG9qUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0MiwiYWR2U2VjcmV0S2V5IjoiRy9HSEc0RTVQWVFvU1dEa2UxNVpPZWY5ZzVCbjIwaE1iYVlWK2xKSXdUUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNGdoTDlmQnFRUi1mUDd1bFJPRUpmQSIsInBob25lSWQiOiJhZDgwNWZlYi0zYWIyLTRkNGUtYTM0Yi00NDc2Y2QzOWRiZDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEVuMEc0QVV0NmtwZXB5QmtpRUwrQ3Y0S1UwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRGRyRmhreXNPOUdmdVZDaGZMbkVGMHF1SjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU2xodEFGRVBUSTQ2MEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KcHZidWlVTnRIdGhERmRTM2x1UW1oRkpiS3M1QklnTG9jUFdSU2tGa1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlY1K0Z3NXlWeGFRRUc1dU1ReDNneUxtZ09sRmZXalR0dFJoTlJSZ0I5dEpVcnFYQ2N5ZlJRUGZHTkpTTEhLWHhERWlLUzlEaWVBQXZDcVFyZ1Y5SkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWTEsyZy8yc2dFNE9TK2lBK2VaRjV3Y1BrTjc1UWtPc3FwSEFqalFtKzlNa2pvc1FvbWlhRnMvbjIzZmwvS0c0ZGRDT0NGS2hBblN3V09RUVltWHJqdz09In0sIm1lIjp7ImlkIjoiMjM0OTEzMzc1NTE4Mzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IllhcXViIE11aGFtbWFkIFNpeXVkaSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMzNzU1MTgzOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhYjI3b2xEYlI3WVF4WFV0NWJrSm9SU1d5ck9RU0lDNkhEMWtVcEJaRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNjYxNTkyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIQVMifQ==,
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
global.botname = 'ᴛʜᴇ ɢᴜʀᴜ-ʙᴏᴛ'
global.premium = 'true'
global.packname = 'GURU┃ᴮᴼᵀ' 
global.author = '@Asliguru' 
global.menuvid = 'https://i.imgur.com/AjDzGgG.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://chat.whatsapp.com/BFfD1C0mTDDDfVdKPkxRAA'
global.fgsc = 'https://github.com/Guru322/GURU-BOT' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
