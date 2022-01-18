let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
 m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
await conn.sendFile(m.chat, global.API('zeks', '/api/epep', 'APIKEY', { text, }), 'Logo Epep.png', 'Nih udah jadi Logo Epepmu...\n *_Tetap Support:_* *King Of Bear*', m)
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
