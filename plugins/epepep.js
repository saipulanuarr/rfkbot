let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  m.reply(wait)
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/epep?apikey=${bearkey}&text=KingOfBear`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, '8bit.png', json.caption, m, 0, { thumbnail })
}
handler.help = ['8bit']
handler.tags = ['internet']
handler.command = /^(8bit)$/i

module.exports = handler
