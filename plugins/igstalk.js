let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...username nya mana?'
  let res = await fetch(`https://hardianto.xyz/api/download/instadl?url=${args[0]}?utm_source=ig_web_copy_link&apikey=hardianto`)
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    fullName,
    username,
    is_verified,
    medias,
    followers,
    following,
    biography,
    downloadUrl,
    profilePicUrl,
    hd_profilePicUrl_info,
    is_private
  } = json.result.user
  let pp = hd_profilePicUrl_info.url || profilePicUrl
  let caption = `
${fullName} *(@${username})* ${is_verified ? '✓' : ''}
https://instagram.com/${username}
${is_private ? 'Post Hidden by User' : ('*' + medias + '* Post(s)')}
Following *${following}* User(s)
*${followers}* Followers
*Bio:*
${biography}${external_url ? '\n*External URL:* ' + downloadUrl : ''}
`.trim()
  if (pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

module.exports = handler
