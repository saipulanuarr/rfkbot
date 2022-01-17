let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  if (!text) throw `Uhm...Teksnya mana?`
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let res = await fetch(`https://api.xteam.xyz/tahta?text=${text}&APIKEY=${bearkey}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'harta2.png', json.caption, m, 0, { thumbnail })
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
