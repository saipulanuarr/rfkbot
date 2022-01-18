let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
conn.logoepep = conn.logoepep ? conn.logoepep : {}
 if (m.chat in conn.logoepep) throw 'Masih ada yang sedang membuat\nLogo Epep\ndi chat ini... tunggu sampai selesai'
 if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
 else conn.logoepep[m.chat] = true
 m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
 let url = await fetch(`https://api.zeks.me/api/epep?apikey=HCea8n9SQlhEQsbVuBPTIEW3c8i&text=${text}`)
if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'Logo Epep.png', json.caption, m, 0, { thumbnail })
}

handler.help = ['logoepep'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(logoepep)$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
