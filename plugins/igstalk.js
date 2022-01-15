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
    Profile_pic,
    is_private
  } = json.result
  let caption = `
${Name} *(@${Username})* ${is_verified ? '✓' : ''}
https://instagram.com/${Username}
${is_private ? 'Post Hidden by User' : ('*' + media_count + '* Post(s)')}
Following *${Jumlah_Following}* User(s)
*${Jumlah_Followers}* Followers
*Bio:*
${Biodata}
`.trim()
  else m.reply(caption)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
