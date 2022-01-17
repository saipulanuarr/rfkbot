let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/rkTg7B0/donasi.jpg`)).buffer(), `
┌〔 Donasi • Emoney 〕
├ DANA : [0882-7926-8363]
├ SAWERIA : [https://saweria.co/raraharsita2]
├ SELAIN DANA VIA QR AJA ATAU SAWERIA
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
