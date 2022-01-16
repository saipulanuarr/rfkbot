let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  m.reply(wait)
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/darkjokes?apikey=KingOfBear`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendButtonImg(m.chat, json.result, kasihcaption, footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
