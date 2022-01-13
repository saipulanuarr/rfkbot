let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^tod$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', footer, 'Truth', '#truth', 'Dare', '#dare', { contextInfo: { forwardingScore: 999, isForwarded: true }})
  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod)$/i

module.exports = handler
