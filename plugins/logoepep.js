
let fetch = require('node-fetch')
let handler  = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
m.reply(wait)
heum = await fetch(global.API('xteam', '/api/epep', 'APIKEY', { text, })
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'Harta Tahta.png', 'Nih udah jadi Harta tahtamu...\n *_Tetap Support:_* *King Of Bear*', m)
}
handler.help = ['logoepep'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(logoepep)$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
