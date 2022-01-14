const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `contoh:\n${usedPrefix + command} stikerinbot`

  let res = await fetch(global.API('vinco', '/api/stalk/ig', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendMessage(m.chat, `Nama: ${json.result.Name}\n*Bio:* ${json.result.Biodata}\n*Followers:* ${json.result.Jumlah_Followers}\n*Following:* ${json.result.Jumlah_Following}\n*Posts:* ${json.result.Jumlah_Post}`, m, 0)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
