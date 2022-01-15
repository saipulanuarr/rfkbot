const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} drak_ipul123`

  let res = await fetch(`https://api.xteam.xyz/dl/igstalk?nama=${args[0]}&APIKEY=KingOfBear`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  if (json.result.error) throw json.result.message
  let caption = `
  *Nama:* ${json.result.Name}\n*Bio:* ${json.result.Biodata}\n*Followers:* ${json.result.Jumlah_Followers}\n*Following:* ${json.result.Jumlah_Following}\n*Posts:* ${json.result.Jumlah_Post}\n*Private:* ${json.result.private ? 'Ya' : 'Tidak'}\n\nhttp://instagram.com/drak_ipul123
  `.trim()
  conn.sendFile(m.chat, json.result.Profile_pic, 'eror.jpg', m, 0, { thumbnail: await (await fetch(json.result.Profile_pic)).buffer() })
   else m.reply(caption)
}
handler.help = ['igstalk <username> (Dalam Perbaikan)']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
