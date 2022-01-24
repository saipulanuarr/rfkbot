let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? `${namabot} tidak aktif` : banned ? 'kamu dibanned' : `${namabot} disini, ada yang bisa saya bantu?`,
                footer,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup && !m.fromMe && !m.isOwner) {
        this.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 15000*
╠➥ *Permanen* : *Rp 30000*
╠➥ *Premium* :   *Rp 15000*
╠➥ *Sc Bot* :        *https://youtu.be/gk7euEW1vis*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2022 King Of Bear
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'GoPay', '#viagopay', m)
}

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let regg = /(bot|tes)/i
    let reggg = /(Ara ara)/i
    let regggg = /(Asu)/i
    let reggggg = /(Aku ngakak)/i
    let regggggg = /(Arigatou)/i
    let reggggggg = /(Anjay)/i
    let regggggggg = /(Bidadari)/i
    let reggggggggg = /(Biasalah)/i
    let regggggggggg = /(Beat box)/i
    let reggggggggggg = /(Beat boxx)/i
    let regggggggggggg = /(Baka)/i
    let reggggggggggggg = /(Bahagia aku)/i
    let regggggggggggggg = /(Bansos)/i
    let reggggggggggggggg = /(Buka Pintu)/i
    let regggggggggggggggg = /(Bot)/i
    let reggggggggggggggggg = /(Bye-bye)/i
    let regggggggggggggggggg = /(Cuekin Terus)/i
    let reggggggggggggggggggg = /(Canda anjg)/i
    let regggggggggggggggggggg = /(China)/i
    let reggggggggggggggggggggg = /(Dengan mu)/i
    let regggggggggggggggggggggg = /(Daisuki)/i
    let reggggggggggggggggggggggg = /(Daisuki dayo)/i
    let regggggggggggggggggggggggg = /(Gay)/i
    let reggggggggggggggggggggggggg = /(Gomenasai)/i
    let regggggggggggggggggggggggggg = /(Gitar)/i
    let reggggggggggggggggggggggggggg = /(Gelay)/i
    let regggggggggggggggggggggggggggg = /(Gak lucu)/i
    let reggggggggggggggggggggggggggggg = /(Gaboleh gitu)/i
    let regggggggggggggggggggggggggggggg = /(Gamau)/i
    let reggggggggggggggggggggggggggggggg = /(Hp iphone)/i
    let regggggggggggggggggggggggggggggggg = /(Hayoo)/i
    let reggggggggggggggggggggggggggggggggg = /(Hampa)/i
    let regggggggggggggggggggggggggggggggggg = /(Hai bot)/i
    let reggggggggggggggggggggggggggggggggggg = /(Ih wibu)/i
    let regggggggggggggggggggggggggggggggggggg = /(I like you)/i
    let reggggggggggggggggggggggggggggggggggggg = /(India)/i
    let regggggggggggggggggggggggggggggggggggggg = /(Kontol)/i
    let reggggggggggggggggggggggggggggggggggggggg = /(Karna lo wibu)/i
    let regggggggggggggggggggggggggggggggggggggggg = /(Ku coba)/i
    let reggggggggggggggggggggggggggggggggggggggggg = /(Makasih)/i
    let regggggggggggggggggggggggggggggggggggggggggg = /(Maju wibu)/i
    let reggggggggggggggggggggggggggggggggggggggggggg = /(Mastah)/i
    let regggggggggggggggggggggggggggggggggggggggggggg = /(Nuina)/i
    let reggggggggggggggggggggggggggggggggggggggggggggg = /(Ngadi ngadi)/i
    let regggggggggggggggggggggggggggggggggggggggggggggg = /(Nikah)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggg = /(Owner sange)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggg = /(Ownerku)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggg = /(Onichan)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggg = /(Punten)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Pak sapardi)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Pale)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Pasi pasi)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Sayang)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Summertime)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Tanya bapak lu)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(To the bone)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Woi)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Wajib)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Waku)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Wow)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Yoyowaimo)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Yowai)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Yowaimo)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Siapa sih)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Sudah biasa)/i
    let reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Yamete Kudasai)/i
    let regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg = /(Nani)/i

    let isSalam = reg.exec(m.text)
    let isTes = regg.exec(m.text)
    let isAraAra = reggg.exec(m.text)
    let isAsu = regggg.exec(m.text)
    let isAkuNgakak = reggggg.exec(m.text)
    let isArigatou = regggggg.exec(m.text)
    let isAnjay = reggggggg.exec(m.text)
    let isBidadari = regggggggg.exec(m.text)
    let isBiasalah = reggggggggg.exec(m.text)
    let isBeatBox = regggggggggg.exec(m.text)
    let isBeatBoxx = reggggggggggg.exec(m.text)
    let isBaka = regggggggggggg.exec(m.text)
    let isBahagiaAku = reggggggggggggg.exec(m.text)
    let isBansos = regggggggggggggg.exec(m.text)
    let isBukaPintu = reggggggggggggggg.exec(m.text)
    let isBot = regggggggggggggggg.exec(m.text)
    let isByeBye = reggggggggggggggggg.exec(m.text)
    let isCuekinTerus = regggggggggggggggggg.exec(m.text)
    let isCandaAnjg = reggggggggggggggggggg.exec(m.text)
    let isChina = regggggggggggggggggggg.exec(m.text)
    let isDenganMu = reggggggggggggggggggggg.exec(m.text)
    let isDaisuki = regggggggggggggggggggggg.exec(m.text)
    let isDaisukiDayo = reggggggggggggggggggggggg.exec(m.text)
    let isGay = regggggggggggggggggggggggg.exec(m.text)
    let isGomenasai = reggggggggggggggggggggggggg.exec(m.text)
    let isGitar = regggggggggggggggggggggggggg.exec(m.text)
    let isGelay = reggggggggggggggggggggggggggg.exec(m.text)
    let isGakLucu = regggggggggggggggggggggggggggg.exec(m.text)
    let isGabolehGitu = reggggggggggggggggggggggggggggg.exec(m.text)
    let isGamau = regggggggggggggggggggggggggggggg.exec(m.text)
    let isHpIphone = reggggggggggggggggggggggggggggggg.exec(m.text)
    let isHayoo = regggggggggggggggggggggggggggggggg.exec(m.text)
    let isHampa = reggggggggggggggggggggggggggggggggg.exec(m.text)
    let isHaiBot = regggggggggggggggggggggggggggggggggg.exec(m.text)
    let isIhWibu = reggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isILikeYou = regggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isIndia = reggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isKontol = regggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isKarnaLoWibu = reggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isKuCoba = regggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isMakasih = reggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isMajuWibu = regggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isMastah = reggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isNuina = regggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isNgadiNgadi = reggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isNikah = regggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isOwnerSange = reggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isOwnerku = regggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isOnichan = reggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isPunten = regggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isPakSapardi = reggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isPale = regggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isPasiPasi = reggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isSayang = regggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isSummertime = reggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isTanyaBapakLu = regggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isToTheBone = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isWoi = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isWajib = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isWaku = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isWow = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isYoyowaimo = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isYowai = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isYowaimo = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isSiapaSih = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isSudahBiasa = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isYamete = reggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)
    let isNani = regggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.exec(m.text)

    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/assalamualaikum.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isTes && !m.fromMe) {
        m.reply(`Iya sayang`)
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/sayang.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isAraAra && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/ara-ara2.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isAsu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/asu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isAkuNgakak && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/aku-ngakak.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isArigatou && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/arigatou.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isAnjay && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/anjay.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBidadari && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bidadari.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBiasalah && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/biasalah.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBeatBox && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/beat-box.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBeatBoxx && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/beat-box2.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBaka && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/baka.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBahagiaAku && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bahagia-aku.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBansos && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bansos.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBukaPintu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/buka-pintu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isBot && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bot.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isByeBye && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bot.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isCuekinTerus && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/cuekin-terus.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isCandaAnjg && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/canda-anjing.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isChina && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/china.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isDenganMu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/dengan-mu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isDaisuki && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/daisuki.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isDaisukiDayo && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/daisuki-dayo.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGay && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gay.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGomenasai && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gomenasai.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGitar && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gitar.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGelay && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gelay.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGakLucu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gak-lucu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGabolehGitu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gaboleh-gitu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isGamau && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/gamau.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isHpIphone && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/hp-iphone.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isHayoo && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/hayo.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isHampa && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/hampa.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isHaiBot && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/hai-bot.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isIhWibu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/ih-wibu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isILikeYou && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/i-like-you.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isIndia && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/india.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isKontol && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/kontol.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isKarnaLoWibu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/karna-lo-wibu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isKuCoba && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/ku-coba.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isMakasih && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/makasih.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isMajuWibu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/maju-wibu.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isMastah && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/mastah.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isNuina && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/nuina.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isNgadiNgadi && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/ngadi-ngadi.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isNikah && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/nikah.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isOwnerSange && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/owner-sange.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isOwnerku && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/ownerku.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isOnichan && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/onichan.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isPunten && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/punten.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isPakSapardi && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/pak-sapardi.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isPale && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/pale.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isPasiPasi && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/pasi-pasi.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isSayang && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/sayang.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isSummertime && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/summertime.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isTanyaBapakLu && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/bacot.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isToTheBone && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/to-the-bone.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isWoi && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/woi.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isWajib && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/wajib.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isWaku && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/waku.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isWow && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/wow.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isYoyowaimo && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/yoyowaimo.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isYowai && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/yowaimo.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isYowaimo && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/yowaimo.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isSiapaSih && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/siapa-sih.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isSudahBiasa && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/sudah-biasa.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isYamete && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/yamete.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }
    if (isNani && !m.fromMe) {
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/nani.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }

    
    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | ${namabot} by ${namalu}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
