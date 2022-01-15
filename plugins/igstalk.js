let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...username nya mana?'
  let res = await fetch(global.API('xteam', '/dl/igstalk', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    Name,
    Username,
    is_verified,
    media_count,
    Jumlah_Followers,
    Jumlah_Following,
    Biodata,
    external_url,
    Profile_pic,
    hd_profile_pic_url_info,
    is_private
  } = json.result
  let pp = Profile_pic.url || Profile_pic
  let caption = `
  *Nama:* ${json.result.Name}
  *Bio:* ${json.result.Biodata}
  *Followers:* ${json.result.Jumlah_Followers}
  *Following:* ${json.result.Jumlah_Following}
  *Posts:* ${json.result.Jumlah_Post}
`.trim()
   conn.sendFile(m.chat, json.result.Profile_pic, m, 0, { thumbnail: await (await fetch(json.result.Profile_pic)).buffer() })
  else m.reply(caption)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
