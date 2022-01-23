let fetch = require("node-fetch")

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (args.length == 0) return conn.reply(m.chat, `Silahkan masukan querynya`, m)
    if (args[0] == 'ara-ara' || args[0] == 'bacot' || args[0] == 'ara-ara2' || args[0] == 'aku-ngakak' || args[0] == 'arigatou' || args[0] == 'asu' || args[0] == 'bahagia-aku' || args[0] == 'baka' || args[0] == 'beat-box' || args[0] == 'beat-box2' || args[0] == 'biasalah' || args[0] == 'bidadari' || args[0] == 'canda-anjing' || args[0] == 'china' || args[0] == 'cuekin-terus' || args[0] == 'dengan-mu' || args[0] == 'gaboleh-gitu' || args[0] == 'gak-lucu' || args[0] == 'gay' || args[0] == 'gelay' || args[0] == 'gitar' || args[0] == 'gomenasai' || args[0] == 'hai-bot' || args[0] == 'hampa' || args[0] == 'hayo' || args[0] == 'hp-iphone' || args[0] == 'i-like-you' || args[0] == 'ih-wibu' || args[0] == 'india' || args[0] == 'karna-lo-wibu' || args[0] == 'ku-coba' || args[0] == 'maju-wibu' || args[0] == 'mastah' || args[0] == 'ngadi-ngadi' || args[0] == 'nuina' || args[0] == 'owner-sange' || args[0] == 'ownerku' || args[0] == 'pak-sapardi' || args[0] == 'pale' || args[0] == 'pasi-pasi' || args[0] == 'siapa-sih' || args[0] == 'sudah-biasa' || args[0] == 'summertime' || args[0] == 'tanya-bapak-lu' || args[0] == 'to-the-bone' || args[0] == 'wajib' || args[0] == 'waku' || args[0] == 'woi' || args[0] == 'yowaimo' || args[0] == 'yamete') {

  await m.reply('Searching...\nMohon tunggu sekitar 1 menit.')

     let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/${args[0]}.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    } else {
        conn.reply(m.chat, `Query yang tersedia :\n\n• ara-ara\n• bacot\n• ara-ara2\n• aku-ngakak\n• arigatou\n• asu\n• bahagia-aku\n• baka\n• beat-box\n• beat-box2\n• biasalah\n• bidadari\n• canda-anjing\n• china\n• cuekin-terus\n• dengan-mu\n• gaboleh-gitu\n• gak-lucu\n• gay\n• gelay\n• gitar\n• gomenasai\n• hai-bot\n• hampa\n• hayo\n• hp-iphone\n• i-like-you\n• ih-wibu\n• india\n• karna-lo-wibu\n• ku-coba\n• maju-wibu\n• mastah\n• ngadi-ngadi\n• nuina\n• owner-sange\n• ownerku\n• pak-sapardi\n• pale\n• pasi-pasi\n• siapa-sih\n• sudah-biasa\n• summertime\n• tanya-bapak-lu\n• to-the-bone\n• wajib\n• waku\n• woi\n• yowaimo\n• yamete\n\nMisal : ${usedPrefix + command} ara-ara`, m)
    }
}
handler.help = ['vn <query>']
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
