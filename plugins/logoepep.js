let fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let res = await fetch(`https://api.zeks.me/api/epep?apikey=HCea8n9SQlhEQsbVuBPTIEW3c8i&text=${text}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'darkjoke.png', json.caption, m, 0, { thumbnail })
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
