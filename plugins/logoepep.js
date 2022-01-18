let fetch = require('node-fetch')
     let handler  = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Uhm...Teksnya mana?\nContoh: ${usedPrefix + command} Bear`
m.reply(wait)
heum = await fetch(`https://api.zeks.me/api/epep?apikey=HCea8n9SQlhEQsbVuBPTIEW3c8i&text=${text}`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

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
