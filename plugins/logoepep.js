let fetch = require('node-fetch')
     let handler  = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
m.reply(wait)
  let res = await fetch(`https://api.zeks.me/api/epep?apikey=apivinz&text=${text}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.res) throw 'Err!'
  let thumbnail = await (await fetch(json.res)).buffer()
  conn.sendFile(m.chat, json.res, 'darkjoke.png', json.caption, m, 0, { thumbnail })
}
handler.help = ['logoepep'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(logoepep)$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
