const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} bear`

  let res = await fetch(global.API('xteam', '/tahta', {
    nama: args[0]
  }, 'APIKEY'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
await conn.sendFile(m.chat, json.result, 'Harta Tahta.png', 'Nih udah jadi Harta tahtamu...\n *_Tetap Support:_* *KING OF BEAR*', m)
}
handler.help = ['harta2'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(harta|ht|tahta)2$/i
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
