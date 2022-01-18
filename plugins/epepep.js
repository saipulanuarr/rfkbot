
let fetch = require('node-fetch')
     let handler  = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Uhm...Namanya mana?\nContoh: ${usedPrefix + command} King Of Bear`
m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/epep?apikey=KingOfBear&text=${text}`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'Logo epep.png', 'Nih udah jadi Logo Epepmu...\n *_Tetap Support:_* *King Of Bear*', m)
}
handler.help = ['8bit']
handler.tags = ['anime']
handler.command = /^8bit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.limit = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
