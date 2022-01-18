let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  m.reply(wait)
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/darkjokes?apikey=${bearkey}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'darkjoke.png', json.caption, m, 0, { thumbnail })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
