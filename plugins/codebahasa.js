let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'codebahasa')).buffer(), `
┌〔 𝙆𝙤𝙙𝙚 𝘽𝙖𝙝𝙖𝙨𝙖 〕
├ Afrikaans	af
├ Albanian	sq
├ Amharic	am
├ Arabic	ar
├ Armenian	hy
├ Azerbaijani	az
├ Basque	eu
├ Belarusian	be
├ Bengali	bn
├ Bosnian	bs
├ Bulgarian	bg
├ Catalan	ca
├ Cebuano	ceb (ISO-639-2)
├ Chinese (Simplified)	zh-CN or zh (BCP-47)
├ Chinese (Traditional)	zh-TW (BCP-47)
├ Corsican	co
├ Croatian	hr
├ Czech		cs
├ Danish	da
├ Dutch		nl
├ English	en
├ Esperanto	eo
├ Estonian	et
├ Finnish	fi
├ French	fr
├ Frisian	fy
├ Galician	gl
├ Georgian	ka
├ German	de
├ Greek		el
├ Gujarati	gu
├ Haitian Creole	ht
├ Hausa	ha
├ Hawaiian	haw (ISO-639-2)
├ Hebrew	he or iw
├ Hindi		hi
├ Hmong		hmn (ISO-639-2)
├ Hungarian	hu
├ Icelandic	is
├ Igbo		ig
├ Indonesian	id
├ Irish		ga
├ Italian	it
├ Japanese	ja
├ Javanese	jv
├ Kannada	kn
├ Kazakh	kk
├ Khmer		km
├ Kinyarwanda	rw
├ Korean	ko
├ Kurdish	ku
├ Kyrgyz	ky
├ Lao		lo
├ Latvian	lv
├ Lithuanian	lt
├ Luxembourgish	lb
├ Macedonian	mk
├ Malagasy	mg
├ Malay		ms
├ Malayalam	ml
├ Maltese	mt
├ Maori		mi
├ Marathi	mr
├ Mongolian	mn
├ Myanmar (Burmese)	my
├ Nepali	ne
├ Norwegian	no
├ Nyanja (Chichewa)	ny
├ Odia (Oriya)	or
├ Pashto	ps
├ Persian	fa
├ Polish	pl
├ Portuguese (Portugal, Brazil)	pt
├ Punjabi	pa
├ Romanian	ro
├ Russian	ru
├ Samoan	sm
├ Scots Gaelic	gd
├ Serbian	sr
├ Sesotho	st
├ Shona		sn
├ Sindhi	sd
├ Sinhala (Sinhalese)	si
├ Slovak	sk
├ Slovenian	sl
├ Somali	so
├ Spanish	es
├ Sundanese	su
├ Swahili	sw
├ Swedish	sv
├ Tagalog (Filipino)	tl
├ Tajik		tg
├ Tamil		ta
├ Tatar		tt
├ Telugu	te
├ Thai		th
├ Turkish	tr
├ Turkmen	tk
├ Ukrainian	uk
├ Urdu		ur
├ Uyghur	ug
├ Uzbek		uz
├ Vietnamese	vi
├ Welsh		cy
├ Xhosa		xh
├ Yiddish	yi
├ Yoruba	yo
├ Zulu		zu 
└────
`.trim(), footer, 'Translate', '.translate')
handler.help = ['codebahasa']
handler.tags = ['tools']
handler.command = /^(codebahasa|kodebahasa)$/i

module.exports = handler
