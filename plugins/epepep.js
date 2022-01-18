
let fetch = require('node-fetch')
     let handler  = async (m, { conn, text, usedPrefix, command }) => {
conn.logoepep = conn.logoepep ? conn.logoepep : {}
if (m.chat in conn.logoepep) throw 'Masih ada yang sedang membuat\nLogo Epep\ndi chat ini... tunggu sampai selesai'
if (!text) throw `Uhm...Namanya mana?\nContoh: ${usedPrefix + command} King Of Bear`
else conn.logoepep[m.chat] = true
m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/epep?apikey=KingOfBear&text=${text}`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['8bit']
handler.tags = ['anime']
handler.command = /^8bit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
