const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} drak_ipul123`

  let res = await fetch(global.API('xteam', '/dl/igstalk', {
    nama: args[0]
  }, 'xteamkey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.result.Profile_pic, 'eror.jpg', `*Nama:* ${json.result.Name}\n*Bio:* ${json.result.Biodata}\n*Followers:* ${json.result.Jumlah_Followers}\n*Following:* ${json.result.Jumlah_Following}\n*Posts:* ${json.result.Jumlah_Post}\n*Private:* ${json.result.private ? 'Ya' : 'Tidak'}\n\nhttp://instagram.com/${args[0]}`, m, 0, { thumbnail: await (await fetch(json.result.Profile_pic)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
