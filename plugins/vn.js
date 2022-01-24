let fetch = require('node-fetch')
let teks = `LIST VN`
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), `
┏━━〔 *LIST/DAFTAR VN* 〕━⬣
┃⬡ Dengan mu
┃⬡ Cuekin Terus
┃⬡ Hp iphone
┃⬡ To the bone
┃⬡ Hayoo
┃⬡ Bidadari
┃⬡ Biasalah
┃⬡ Beat boxx
┃⬡ Beat box
┃⬡ Baka
┃⬡ Bahagia aku
┃⬡ Bacot
┃⬡ Asu
┃⬡ Aku ngakak
┃⬡ Arigatou
┃⬡ Ara ara
┃⬡ Owner sange
┃⬡ Mastah
┃⬡ Ku coba
┃⬡ Karna lo wibu
┃⬡ Ih wibu
┃⬡ Gay
┃⬡ Gomenasai
┃⬡ I like you
┃⬡ Gitar
┃⬡ Yamete Kudasai
┃⬡ Nani
┃⬡ Gelay
┃⬡ Hampa
┃⬡ Gak lucu
┃⬡ Gaboleh gitu
┃⬡ Yowaimo
┃⬡ Woi
┃⬡ Wajib
┃⬡ Hai bot
┃⬡ Maju wibu
┃⬡ India
┃⬡ Tanya bapak lu
┃⬡ Summertime
┃⬡ Pasi pasi
┃⬡ Pale
┃⬡ Nuina
┃⬡ Ngadi ngadi
┃⬡ Ownerku
┃⬡ Waku
┃⬡ Pak sapardi
┃⬡ Siapa sih
┃⬡ Canda anjg
┃⬡ China
┃⬡ Makasih
┃⬡ Bansos
┃⬡ Buka Pintu
┃⬡ Yowai
┃⬡ Punten
┃⬡ Nikah
┃⬡ Yoyowaimo
┃⬡ Onichan
┃⬡ Daisuki
┃⬡ Anjay
┃⬡ Kontol
┃⬡ Daisuki dayo
┃⬡ Bot
┃⬡ Gamau
┃⬡ Denganmu
┃⬡ Wow
┃⬡ Siapa sih
┃⬡ Sudah biasa
┃⬡ Assalamualaikum
┃⬡ Menu
┃⬡ Bye-bye
┃⬡ Sayang
┗━━⬣ *Total : 67* ━⬣
`.trim(), footer, 'Owner', '.owner')

handler.help = ['vn']
handler.tags = ['tools']
handler.command = /^(vn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
