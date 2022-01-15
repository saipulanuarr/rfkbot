let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...username nya mana?'
  let res = await fetch(global.API('xteam', '/dl/igstalk', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let caption = `
conn.sendFile(m.chat, json.result.Profile_pic, 'eror.jpg', `*Nama:* ${json.result.Name}\n*Bio:* ${json.result.Biodata}\n*Followers:* ${json.result.Jumlah_Followers}\n*Following:* ${json.result.Jumlah_Following}\n*Posts:* ${json.result.Jumlah_Post}\n*Private:* ${json.result.private ? 'Ya' : 'Tidak'}\n\nhttp://instagram.com/drak_ipul123`, m, 0, { thumbnail: await (await fetch(json.result.Profile_pic)).buffer() })
`.trim()
  else m.reply(caption)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
