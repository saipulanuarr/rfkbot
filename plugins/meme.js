let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  m.reply(wait)
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/random/meme?apikey=KingOfBear`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Err!'
  let thumbnail = await (await fetch(json.url)).buffer()
  conn.sendFile(m.chat, json.url, 'meme.png', json.title, m, 0, { thumbnail })
}

handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(meme)$/i

module.exports = handler
