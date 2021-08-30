
//----------------------------------------LOAD baileys MODULES-----------------------------------------//

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,  
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')


//------------------------------------------LOAD .js FILE--------------------------------------------------//

const { convertSticker } = require('./lib/swm.js')
const { isFiltered, addFilter } = require('./lib/antispam.js')
const { fetchJson } = require('./lib/fetcher.js')
const { color, bgcolor } = require('./lib/color.js')
const { recognize } = require('./lib/ocr.js')
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { addMetadata } = require('./lib/addMetadata.js')
const { payLimit, limitAdd, checkLimit, isLimit } = require('./lib/limit.js')
const { addATM, addMoney, checkMoney, confirmMoney } = require('./lib/money.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions.js')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')
const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC } = require('./lib/tictactoeIA.js')
const { validmove, setGame } = require('./lib/jogodavelha.js')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//-------------------------------------LOAD npm PACKAGE-----------------------------------------------//

const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const speed = require('performance-now')
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const axios = require('axios')
const util = require('util');
const request = require('request')
const cd = 4.32e+7
//const { Sticker } = require('wa-sticker-formatter')

//-----------------------------------------LOAD .json FILE-------------------------------------------------//

const antilink = JSON.parse(fs.readFileSync('./json/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./json/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./json/nsfw.json'))
const leveling = JSON.parse(fs.readFileSync('./json/leveling.json'))
const level = JSON.parse(fs.readFileSync('./json/level.json'))
const event = JSON.parse(fs.readFileSync('./json/event.json'))
const limit = JSON.parse(fs.readFileSync('./json/limit.json'))
const money = JSON.parse(fs.readFileSync('./json/money.json'))
const samih = JSON.parse(fs.readFileSync('./json/simi.json'))
const antifake = JSON.parse(fs.readFileSync('./json/antifake.json'))
const totalcmd = JSON.parse(fs.readFileSync('./json/totalcmd.json'))[0].totalcmd
const registered = JSON.parse(fs.readFileSync('./json/registered.json'))
const tictactoe = JSON.parse(fs.readFileSync('./lib/ttt/tictactoe.json'))
const giftC = JSON.parse(fs.readFileSync('./json/giftcard.json'))
const atsticker = JSON.parse(fs.readFileSync('./json/atsticker.json'))
const vip = JSON.parse(fs.readFileSync('./json/vip.json'))
            
var tttset = require('./lib/ttt/TTTconfig/tttset.json');
var esp = require('./lib/ttt/TTTconfig/tttframe.json');

//-----------------------------------------------LOAD .js FILE-----------------------------------------------//

const { nsfwloli } = require('./src/nsfwloli')
const { ttthelp } = require('./lib/ttt/TTTconfig/ttthelp')
const { tttme } = require('./lib/ttt/TTTconfig/tttme')

//-------------------------------------------LOAD v-card--------------------------------------------------//

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:gauger\n' 
            + 'ORG:Owner Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=555180614158:+55 51 8061-4158\n' 
            + 'END:VCARD'
prefix = '!'
blocked = []
limitawal = '100'
const timestamp = speed();
const latensi = speed() - timestamp
fromMe = false

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./gauger.json') && client.loadAuthInfo('./gauger.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./gauger.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
	if (antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				client.sendMessage(mdata.id, '👮🏻‍♀️Números fakes não são permitidos, apenas +55👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O NÚMERO FAKE...','red'))
				client.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = './logos/.noPicure.jpg'
				}
				teks = `*Olá _@${num.split('@')[0]}_\n*Bem vindo ao grupo _${mdata.subject}_*\n*Não se esqueça de ler as regras*\n\n\n*Sinta-se avontade no grupo :)*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = './logos/.noPicure.jpg'
				}
				teks = `*Tchauzinho _@${num.split('@')[0]}_, Não volte por favor*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('FALHA : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
	    
	    function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
	    
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return             
              mek = mek.messages.all()[0]              
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return       
         if (mek.key.fromMe && fromMe === true) return
			global.prefix
			global.blocked
			const comandost = totalcmd
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		    const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            const hour_now = moment().format('HH:mm:ss')            
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1) 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
            const tescuk = ["0@s.whatsapp.net"]
            const q = args.join(' ')           
            sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
 
        
			mess = {
				wait: 'Aguarde, estou fazendo.. 🥃',
				twotxt: `Precido de 2 textos para essa logo, use da seguinte forma\n${prefix}${command} texto/texto`,
				onetxt: `Precido de um textos para essa logo, use da seguinte forma\n${prefix}${command} texto`,
				success: 'Funciona',
				limitC: '*não quero responder você*',
				error: {
					stick: 'Erro, tente novamente'
				},
				only: {
				    pv: '*❌ Esse comando só pode ser usado no pv amigo ❌*',
					group: '*❌ Esse comando só pode ser usado em grupos ❌*',
					ownerG: '*❌ Esse comando só pode ser usado pelo dono do grupo ❌*',
					ownerB: '*❌ Esse comando só pode ser usado pelo gauger kk ❌*',
					admin: '*❌ Membro comum não tem o poder de usar esse comando ❌*',
					Badmin: '*❌ Este comando só pode ser usado quando o bot se torna administrador ❌*',
					nsfw: `Modo nsfw desativado, ative para comandos +18\n${prefix}nsfw 1`
				}
			}
			const botNumber = client.user.jid
			const ownerNumber = ["555180614158@s.whatsapp.net","14015990270@s.whatsapp.net","12342434899@s.whatsapp.net"]
			const botNum = ["12342434899@s.whatsapp.net"]
			const isBot = botNum.includes(sender)
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const isPv = from.endsWith('s.whatsapp.net')
			const totalchat = await client.chats.all()
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isSimi = isGroup ? samih.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isAuto = isGroup ? atsticker.includes(from) : true
            const isUser = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isVip = vip.includes(sender)
			const isOwner = ownerNumber.includes(sender)
            const isLevelingOn = isGroup ? leveling.includes(from) : true
            const NomerOwner = '555180614158@s.whatsapp.net'
            const isEventon = isGroup ? event.includes(from) : false            
            const isGift = giftC.includes(budy)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined        
            const botName = 'BOT BAIANO'
            const ownerName = 'gauger'


            const createCode = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
			const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek, contextInfo: {forwardingScore: 508, isForwarded: true}})
			}
			
			try {
		pporang = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		//	if (antibot === true) return
const gauger = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "555196741133-1490367661@g.us" } : {}) }, message: { 'imageMessage': { 'caption': `Olá ${pushname}\n⎇ ${command}\n`, 'jpegThumbnail': ofrply} } }

		const catalogo = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© Dcode Denpa_*", "thumbnail": ofrply, "surface": 'CATALOG'}}, {quoted: mek})
             client.relayWAMessage(res)
        }
        
        
			const replyA = (tujuh) => {
		     	client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

           const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './exif' + names + '.png', async function () {
                    console.log('pronto');
                    let filess = './exif' + names + '.png'
                    let asw = './exif' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: gauger})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            } 
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
		  		(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
            const sendImage = (teks) => {
		         client.sendMessage(from, teks, image, {quoted:mek})
		        }
		    const costum = (pesan, tipe, target, target2) => {
			     client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		         client.sendMessage(from, audio, mp3, {quoted:mek})
		        }          
            const msgReceived = pes.toLowerCase();
            const argss = body.split(/ +/g)
            
            const buttonsRM = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''                            

            const listRM = (type === 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
            
            const {
                wa_version,
                mcc,
                mnc,
                os_version,
                device_manufacturer,
                device_model
            } = client.user.phone
            
            colors = ['red','white','black','blue','yellow','green']
            client.chatRead(from)
            
      //_TIPO DE MENSAGEM
            const isImage = type == 'imageMessage'
            const isCatalog = type == 'orderMessage'
            const isVideo = type == 'videoMessage'
            const isAudio = type == 'audioMessage'
            const isSticker = type == 'stickerMessage'
            const isContact = type == 'contactMessage'
            const isLocation = type == 'locationMessage'
            const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
            typeMessage = body.substr(0, 50).replace(/\n/g, '')
            if (isImage) typeMessage = "Image"
            else if (isVideo) typeMessage = "Video"
            else if (isAudio) typeMessage = "Audio"
            else if (isSticker) typeMessage = "Sticker"
            else if (isContact) typeMessage = "Contact"
            else if (isLocation) typeMessage = "Location"
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
            const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			
							
	       

            
      
            
        	const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = '𝗛𝗼𝗿𝗮 𝗱𝗮 𝗠𝗲𝗶𝗮-𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 1: waktoo = '𝗛𝗼𝗿𝗮 𝗱𝗮 𝗠𝗲𝗶𝗮-𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 2: waktoo = '𝗗𝗲 𝗺𝗮𝗻𝗵*ã* 𝗰𝗲𝗱𝗼🌒'; break;
                case 3: waktoo = '𝗗𝗲 𝗺𝗮𝗻𝗵*ã* 𝗰𝗲𝗱𝗼🌓'; break;
                case 4: waktoo = '𝗔𝗹𝘃𝗼𝗿𝗲𝗰𝗲𝗿🌔'; break;
                case 5: waktoo = '𝗔𝗹𝘃𝗼𝗿𝗲𝗰𝗲𝗿🌔'; break;
                case 6: waktoo = '𝗕𝗼𝗺 𝗗𝗶𝗮🌝'; break;
                case 7: waktoo = '𝗕𝗼𝗺 𝗗𝗶𝗮🌝'; break;
                case 8: waktoo = '𝗕𝗼𝗺 𝗗𝗶𝗮🌝'; break;
                case 9: waktoo = '𝗕𝗼𝗺 𝗗𝗶𝗮🌝'; break;
                case 10: waktoo = '𝗕𝗼𝗺 𝗗𝗶𝗮🌝'; break;
                case 11: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌞'; break;
                case 12: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌞'; break;
                case 13: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌞'; break;
                case 14: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌞'; break;
                case 15: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌝'; break;
                case 16: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌝'; break;
                case 17: waktoo = '𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲🌖'; break;
                case 18: waktoo = '𝗤𝘂𝗮𝘀𝗲 𝗮 𝗡𝗼𝗶𝘁𝗲🌘'; break;
                case 19: waktoo = '𝗤𝘂𝗮𝘀𝗲 𝗮 𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 20: waktoo = '𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 21: waktoo = '𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 22: waktoo = '𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲🌚'; break;
                case 23: waktoo = '𝗠𝗲𝗶𝗮-𝗡𝗼𝗶𝘁𝗲🌚'; break;
            }
            var tampilUcapan = '' + waktoo;
            
            //buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 1: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 2: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 3: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 4: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 5: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 6: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 7: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 8: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 9: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 10: waktoonyabro = `𝗕𝗼𝗺 𝗗𝗶𝗮 ✨`; break;
                case 11: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🔥`; break;
                case 12: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🔥`; break;
                case 13: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🔥`; break;
                case 14: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🔥`; break;
                case 15: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🌹`; break;
                case 16: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🌹`; break;
                case 17: waktoonyabro = `𝗕𝗼𝗮 𝗧𝗮𝗿𝗱𝗲 🌹`; break;
                case 18: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 19: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 20: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 21: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 22: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
                case 23: waktoonyabro = `𝗕𝗼𝗮 𝗡𝗼𝗶𝘁𝗲 🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
          

            const nivelAtual = getLevelingLevel(sender)
            var patt = 'Bronze I🥉'
            if (nivelAtual === 1) {
                patt = 'Bronze  I🥉'
            } else if (nivelAtual === 2) {
                patt = 'Bronze II🥉'
            } else if (nivelAtual === 3) {
                patt = 'Bronze  III🥉'
            } else if (nivelAtual === 4) {
                patt = 'Bronze  IV🥉'
            } else if (nivelAtual === 5) {
                patt = 'Bronze  V🥉'
            } else if (nivelAtual === 6) {
                patt = 'Prata I🥈'
            } else if (nivelAtual === 7) {
                patt = 'Prata II🥈'
            } else if (nivelAtual === 8) {
                patt = 'Prata III🥈'
            } else if (nivelAtual === 9) {
                patt = 'Prata IV🥈'
            } else if (nivelAtual === 10) {
                patt = 'Prata V🥈'
            } else if (nivelAtual === 11) {
                patt = 'Ouro I🥇'
            } else if (nivelAtual === 12) {
                patt = 'Ouro II🥇'
            } else if (nivelAtual === 13) {
                patt = 'Ouro III🥇'
            } else if (nivelAtual === 14) {
                patt = 'Ouro IV🥇'
            } else if (nivelAtual === 15) {
                patt = 'Ouro V🥇'
            } else if (nivelAtual === 16) {
                patt = 'Campeão I🏆'
            } else if (nivelAtual === 17) {
                patt = 'Campeão II🏆'
            } else if (nivelAtual === 18) {
                patt = 'Campeão III🏆'
            } else if (nivelAtual === 19) {
                patt = 'Campeão IV🏆'
            } else if (nivelAtual === 20) {
                patt = 'Campeão V🏆'
            } else if (nivelAtual === 21) {
                patt = 'Diamante I 💎'
            } else if (nivelAtual === 22) {
                patt = 'Diamante II 💎'
            } else if (nivelAtual === 23) {
                patt = 'Diamante III 💎'
            } else if (nivelAtual === 24) {
                patt = 'Diamante IV 💎'
            } else if (nivelAtual === 25) {
                patt = 'Diamante V 💎'
            } else if (nivelAtual === 26) {
                patt = 'Mestre I 🐂'
            } else if (nivelAtual === 27) {
                patt = 'Mestre II 🐂'
            } else if (nivelAtual === 28) {
                patt = 'Mestre III 🐂'
            } else if (nivelAtual === 29) {
                patt = 'Mestre IV 🐂'
            } else if (nivelAtual === 30) {
                patt = 'Mestre V 🐂'
            } else if (nivelAtual === 31) {
                patt = 'Mítico I 🔮'
            } else if (nivelAtual === 32) {
                patt = 'Mítico II 🔮'
            } else if (nivelAtual === 33) {
                patt = 'Mítico III 🔮'
            } else if (nivelAtual === 34) {
                patt = 'Mítico IV 🔮'
            } else if (nivelAtual === 35) {
                patt = 'Mítico V 🔮'
            } else if (nivelAtual === 36) {
                patt = 'God I🕴'
            } else if (nivelAtual === 37) {
                patt = 'God II🕴'
            } else if (nivelAtual === 38) {
                patt = 'God III🕴'
            } else if (nivelAtual === 39) {
                patt = 'God IV🕴'
            } else if (nivelAtual === 40) {
                patt = 'God V🕴'
            } else if (nivelAtual >= 777) {
                patt = '*😈 𝗗𝗢𝗡𝗢 😈*'
            }

            //_TIPO DE USUÁRIO
            if (isOwner) {
                var tuser =  '*😈 𝗗𝗢𝗡𝗢 😈*'
           } else if (isGroupAdmins) {
                var tuser = '*Administrador 🔐*' 
            } else if (sender == isUser) {
                var tuser = '*Registrado✅*'  
            } else {
                var tuser = '*Membro comum🗿*'
            }            
            
            if(pushname === undefined || isBot) {
            var pushname = '*botBaiano🔥*'
            }
            
            
        
        
                                                                                   
                                    
            //_XP COM LEVELING ATIVO
               if (!mek.key.fromMe) {
                if (isGroup && isLevelingOn && !isBanned) {
                    const currentLevel = getLevelingLevel(sender)
                    const checkId = getLevelingId(sender)
                    try {
                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                        const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) 
                        const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 
                        const getLevel = getLevelingLevel(sender)
                        const namelv = checkId
                        addLevelingXp(sender, amountXp)
                        if (requiredXp <= getLevelingXp(sender)) {
                            addLevelingLevel(sender, 1)
                            const lvup = {
                                text: `    ════❖LEVEL UP❖════
      ➣ Nome: @${namelv.split('@')[0]}
  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │➣ XP: ${getLevelingXp(sender)}
  │➣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  │➣ Patente: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  
   ════❖LEVEL UP❖════`,
                                contextInfo: {
                                    mentionedJid: [namelv]
                                }
                            }
                            client.sendMessage(from, lvup, text, {
                                quoted: mek
                            })
                        }
                    } catch (err) {
                        console.error(err)
                    }
                }
            }   
        


            //function balance
            if (isGroup ) {
            const checkMoneyUser = checkMoney(sender)
            try {
                if (checkMoneyUser === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 50)
                addMoney(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 



        /*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/jogodavelha/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "sim" ||
               budy.toLowerCase() == "ok"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/jogodavelha/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } 
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "não" ||
               budy.toLowerCase() == "no"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/jogodavelha/${from}.json`);
                    client.sendMessage(
                         from,
                         `@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } 
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/jogodavelha/${from}.json`);
                    cmd = `rm ${from}.json`
               exec(cmd, (err, stdout) => {
		           if(err) console.log(`rm ${from}.json`)
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                    return;
               }
               const dinherowin = Math.ceil(Math.random() * 5000)
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
         
            addMoney(winnerJID + "@s.whatsapp.net", dinherowin)           
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
setTimeout( () => {
if (fs.existsSync("./lib/jogodavelha/" + from + ".json")) {
 fs.unlinkSync("./lib/jogodavelha/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 cmd = `rm ${from}.json`
               exec(cmd, (err, stdout) => {
		           if(err) console.log(`rm ${from}.json`)
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 300000) //5 minutos
                reply(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
               fs.unlinkSync(`./lib/jogodavelha/${from}.json`);
               cmd = `rm ${from}.json`
               exec(cmd, (err, stdout) => {
		           if(err) console.log(`rm ${from}.json`)
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                             
          } else {
               const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }     		    			

            
            

            
           if (isCmd) cmdadd()   
                    

             
            
        
       if (isCmd && isBanned && isGroup) {
            console.log(`\x1b[1;31m${hr}`, '\x1b[1;37m[\x1b[1;31m➻\x1b[1;37m]', color('BAN:', 'white'), color(pushname, 'red'), color(' COMANDO', 'white'), color('➻', 'red'), color(`${command}`, 'red'), color('NO GRUPO', 'white'), color(groupName, 'red'))

                   const ttt = {
                  text:`❌ Olá: @${sender.split('@')[0]}...\nVocê está banido do bot! Não envie mais comandos!\nCaso acredite que isso seja um erro, contate o dono❌ `,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ttt)}
        
               if (isCmd && isBanned && !isGroup) {
                    console.log(`\x1b[1;31m${hr}`, '\x1b[1;37m[\x1b[1;31m➻\x1b[1;37m]', color('BAN:', 'white'), color(pushname, 'red'), color(' COMANDO', 'white'), color('➻', 'red'), color(`${command}`, 'red'), color('NO', 'white'), color('PRIVADO', 'red'))
                   const ttt = {
                  text:`❌ Olá: @${sender.split('@')[0]}...\nVocê está banido do bot! Não envie mais comandos!\nCaso acredite que isso seja um erro, contate o dono❌ `,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ttt)}
        
     if (isCmd && isFiltered(from) && !isGroup) {
console.log(`\x1b[1;31m${hr}`, '\x1b[1;37m[\x1b[1;31m➻\x1b[1;37m]', color('SPAM:', 'white'), color(pushname, 'red'), color(' COMANDO', 'white'), color('➻', 'red'), color(`${command}`, 'red'), color('NO', 'white'), color('PRIVADO', 'red'))
        const ff = {
                  text:`Oi @${sender.split('@')[0]}...\nMelhor não floodar comandos, então, aguarde 5 segundos entre cada comando blz?`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
             if (isCmd && isFiltered(from) && isGroup) {
          console.log(`\x1b[1;31m${hr}`, '\x1b[1;37m[\x1b[1;31m➻\x1b[1;37m]', color('SPAM:', 'white'), color(pushname, 'red'), color(' COMANDO', 'white'), color('➻', 'red'), color(`${command}`, 'red'), color('NO GRUPO', 'white'), color(groupName, 'red'))

        const ff = {
                  text:`Oi @${sender.split('@')[0]}...\nMelhor não floodar comandos, então, aguarde 5 segundos entre cada comando blz?`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }       
        return reply(ff)}

			
			
if (!isGroup && isCmd) console.log(`\x1b[1;32m${hr}`, '\x1b[1;37m[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'white'), color(pushname, 'green'), color('ENVIOU', 'white'), color('O', 'white'), color('COMANDO', 'white'), color('➻', 'green'), color(command), color('NO', 'white'), color('PRIVADO', 'green'))
			
if (isCmd && isGroup) console.log(`\x1b[1;32m${hr}`, '\x1b[1;37m[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'white'), color(pushname, 'green'), color('ENVIOU', 'white'), color('O', 'white'), color('COMANDO', 'white'), color('➻', 'green'), color(command), color('NO GRUPO', 'white'), color(groupName, 'green'))


if (!isCmd && !isGroup) console.log(`\x1b[1;32m${hr}`, '\x1b[1;37m[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'white'), color(pushname, 'green'), color('ENVIOU', 'white'), color('UMA', 'white'), color('MENSAGEM', 'white'), color('NO', 'white'), color('PRIVADO', 'green'))

if (!isCmd && isGroup) console.log(`\x1b[1;32m${hr}`, '\x1b[1;37m[\x1b[1;32m➻\x1b[1;37m]', color('NOME', 'white'), color(pushname, 'green'), color('ENVIOU', 'white'), color('UMA', 'white'), color('MENSAGEM', 'white'), color('NO GRUPO', 'white'), color(groupName, 'green'))
		
	

                    const useLevel = getLevelingLevel(sender)                                
                    const requireXp = 5 * Math.pow(useLevel, (5 / 2)) + 50 * useLevel + 100
                    const chec = getLevelingId(sender)
                    if (useLevel === undefined && chec === undefined) addLevelingId(sender)
                    uptime = process.uptime()                   
                    const users = `${registered.length}`
                    const chatss = `${totalchat.length}`                   
 														
        const gaugerxyz = `
╔────────¤◎¤────────╗
    
                𝗕𝗼𝘁𝗕𝗮𝗶𝗮𝗻𝗼
                             
*Bem Vindo ao menu @${sender.split("@s.whatsapp.net")[0]}*

*Tipo de usuário: ${tuser}*   
    
*Total de usuários registrados: ${users}*

*Total de chats: ${chatss}*

*Total de comandos usados: ${comandost}*

*Sistema online à ${kyun(uptime)}*

*Tempo de resposta: ${latensi.toFixed(4)}*
       
*Versão do whatsapp: ${wa_version}*

*Android: ${os_version}*

*Cell: ${device_manufacturer} ${device_model}*

 ╚────────¤◎¤────────╝
 

┌──────────────┐
├ 💡 *𝙉𝙊𝙑𝙄𝘿𝘼𝘿𝙀𝙎*
├──────────────────┐
├𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘢𝘥𝘪𝘤𝘪𝘰𝘯𝘢𝘥𝘰𝘴:
├Várias logos novas
├Alguns comandos de imagem
├
├!smeme txt/txt
├escreve dois textos em uma fig, em cima e embaixo
├
├!femoji 😈
├Transforma o emoji em uma foto idêntica
├
├!emoji
├Transforma o emoji em figurinha(módulo)
├
├!metadinha
├Manda metadinha de anime
└──────────────────┘

┌──────────────┐
├ ⬆️⬇️ *𝗠𝗢𝗗𝗢𝗦*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}modos
├─────────────────┤
├〘✘${prefix}bemvindo 1/0
├─────────────────┤
├〘✘${prefix}leveis 1/0
├─────────────────┤
├〘✘${prefix}antilink 1/0
├─────────────────┤
├〘✘${prefix}antifake 1/0
├─────────────────┤
├〘✘𝘢𝘯𝘵𝘪𝘳𝘦𝘷𝘰𝘬𝘦 𝘦𝘮 𝘣𝘳𝘦𝘷𝘦...
└──────────────────┘

┌──────────────┐
├🔥 *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}play  
└──────────────────┘

┌──────────────┐
├ 📸 *𝗜𝗠𝗔𝗚𝗘𝗠*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}coala
├─────────────────┤
├〘✘${prefix}panda
├─────────────────┤
├〘✘${prefix}gato
├─────────────────┤
├〘✘${prefix}dog
├─────────────────┤
├〘✘${prefix}raposakk
└──────────────────┘

┌──────────────┐
├ 👾 *𝗝𝗢𝗚𝗢 𝗗𝗔 𝗩𝗘𝗟𝗛𝗔 𝘅 𝗕𝗢𝗧*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}ttthelp
└──────────────────┘

┌──────────────┐
├ 👾 *𝗝𝗢𝗚𝗢 𝗗𝗔 𝗩𝗘𝗟𝗛𝗔 𝘅 𝗣𝗟𝗔𝗬𝗘𝗥*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}jogodavelha @adversário
└──────────────────┘

┌──────────────┐
├ 👻 *𝗦𝗜𝗠𝗜 𝗜.𝗔*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}simi
└──────────────────┘

┌──────────────┐
├ 🎆 *𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}f 𝘮𝘪𝘥𝘪𝘢 » 𝘧𝘪𝘨𝘶𝘪𝘯𝘩𝘢
├─────────────────┤
├〘✘${prefix}fg 𝘮𝘪𝘥𝘪𝘢 » 𝘧𝘪𝘨 𝘮𝘢𝘪𝘰𝘳
├─────────────────┤
├〘✘${prefix}foto 𝘧𝘪𝘨𝘶𝘳𝘪𝘯𝘩𝘢 » 𝘧𝘰𝘵𝘰
├─────────────────┤
├〘✘${prefix}tomp4 𝘧𝘪𝘨 𝘢𝘯𝘪𝘮𝘢𝘥𝘢 » mp4
├─────────────────┤
├〘✘${prefix}attp 𝘵𝘹𝘵
├─────────────────┤
├〘✘${prefix}attp1 𝘵𝘹𝘵
├─────────────────┤
├〘✘${prefix}attp2 txt
├─────────────────┤
├〘✘${prefix}attp3 txt
├─────────────────┤
├〘✘${prefix}attp4 txt
├─────────────────┤
├〘✘${prefix}attp5 txt
├─────────────────┤
├〘✘${prefix}attp6 txt
├─────────────────┤
├〘✘${prefix}smeme txt/txt
├─────────────────┤
├〘✘${prefix}figulixo
├─────────────────┤
├〘✘${prefix}figurip
├─────────────────┤
├〘✘${prefix}figulgbt
├─────────────────┤
├〘✘${prefix}figublur
├─────────────────┤
├〘✘${prefix}figupalito
├─────────────────┤
├〘✘${prefix}figuface
├─────────────────┤
├〘✘${prefix}figuquadro
├─────────────────┤
├〘✘${prefix}figuwanted
├─────────────────┤
├〘✘${prefix}figuwasted
├─────────────────┤
├〘✘${prefix}figuarma
├─────────────────┤
├〘✘${prefix}figudrip
├─────────────────┤
├〘✘${prefix}figuinvert
├─────────────────┤
├〘✘${prefix}figupreso
├─────────────────┤
├〘✘${prefix}figutrigger
├─────────────────┤
├〘✘${prefix}figupet
├─────────────────┤
├〘✘${prefix}missing
└──────────────────┘

┌──────────────┐
├ 🎉 *𝗗𝗜𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}perfil
├─────────────────┤
├〘✘${prefix}gay 
├─────────────────┤
├〘✘${prefix}lgbt
├─────────────────┤
├〘✘${prefix}gado
├─────────────────┤
├〘✘${prefix}safadeza
├─────────────────┤
├〘✘${prefix}lesbica
├─────────────────┤
├〘✘${prefix}gatinha
├─────────────────┤
├〘✘${prefix}corno
├─────────────────┤
├〘✘${prefix}perfect
├─────────────────┤
├〘✘${prefix}cringe
├─────────────────┤
├〘✘${prefix}golpe
├─────────────────┤
├〘✘${prefix}chato 
├─────────────────┤
├〘✘${prefix}gostosa 
├─────────────────┤
├〘✘${prefix}amor 
├─────────────────┤
├〘✘${prefix}ship 
├─────────────────┤
├〘✘${prefix}ppp
├─────────────────┤
├〘✘${prefix}casal
├─────────────────┤
├〘✘${prefix}gostosas
├─────────────────┤
├〘✘𝘦𝘯𝘷𝘪𝘦 𝘴𝘶𝘨𝘦𝘴𝘵õ𝘦𝘴 𝘤𝘰𝘮 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰:
├─────────────────┤
├〘✘${prefix}sugest 
└──────────────────┘

┌───────────────┐
├ 🎶 *EFEITOS ÁUDIO/VÍDEO*
└───────────────┘
┌──────────────────┐
├〘✘${prefix}reversevid
├─────────────────┤
├〘✘${prefix}slowvid
├─────────────────┤
├〘✘${prefix}fastvid
├─────────────────┤
├〘✘${prefix}nightcore
├─────────────────┤
├〘✘${prefix}esquilo
├─────────────────┤
├〘✘${prefix}grave
├─────────────────┤
├〘✘${prefix}tirargrave
├─────────────────┤
├〘✘${prefix}slow
├─────────────────┤
├〘✘${prefix}rapido
├─────────────────┤
├〘✘${prefix}bebado
├─────────────────┤
├〘✘${prefix}demonio
├─────────────────┤
├〘✘${prefix}diabolico
├─────────────────┤
├〘✘${prefix}estourar
├─────────────────┤
├〘✘${prefix}estourar1
├─────────────────┤
├〘✘${prefix}estourar2
├─────────────────┤
├〘✘${prefix}tomp3
├─────────────────┤
├〘✘${prefix}tts
├─────────────────┤
├〘✘${prefix}siglas
└──────────────────┘

┌──────────────┐
├ 🫂 *𝗚𝗥𝗨𝗣𝗢𝗦*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}ownergp
├─────────────────┤
├〘✘${prefix}linkgp
├─────────────────┤
├〘✘${prefix}fechargp
├─────────────────┤
├〘✘${prefix}abrirgp
├─────────────────┤
├〘✘${prefix}setname
├─────────────────┤
├〘✘${prefix}setdesc
├─────────────────┤
├〘✘${prefix}promover
├─────────────────┤
├〘✘${prefix}rebaixar
├─────────────────┤
├〘✘${prefix}add
├─────────────────┤
├〘✘${prefix}kick
├─────────────────┤
├〘✘${prefix}kickgp
├─────────────────┤
├〘✘${prefix}admins
├─────────────────┤
├〘✘${prefix}viplist
├─────────────────┤
├〘✘${prefix}banlist
├─────────────────┤
├〘✘${prefix}hidetag
├─────────────────┤
├〘✘${prefix}tag
├─────────────────┤
├〘✘${prefix}level
├─────────────────┤
├〘✘${prefix}map
├─────────────────┤
├〘✘${prefix}qrcod
├─────────────────┤
├〘✘${prefix}fakereply 𝘵𝘢𝘨/𝘵𝘹𝘵/𝘳𝘦𝘱𝘭𝘺
├─────────────────┤
├〘✘𝘦𝘮 𝘣𝘳𝘦𝘷𝘦...
└──────────────────┘

┌──────────────┐
├ 📲 *𝗟𝗢𝗚𝗢𝗦*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}marvel
├─────────────────┤
├〘✘${prefix}plaquinha
├─────────────────┤
├〘✘${prefix}bpink
├─────────────────┤
├〘✘${prefix}3dtext
├─────────────────┤
├〘✘${prefix}pornhub
├─────────────────┤
├〘✘${prefix}glogo
├─────────────────┤
├〘✘${prefix}bitext
├─────────────────┤
├〘✘${prefix}caderno
├─────────────────┤
├〘✘${prefix}chatlogo
├─────────────────┤
├〘✘${prefix}leao
├─────────────────┤
├〘✘${prefix}modern
├─────────────────┤
├〘✘${prefix}naruto
├─────────────────┤
├〘✘${prefix}matrix
├─────────────────┤
├〘✘${prefix}neon
├─────────────────┤
├〘✘${prefix}breakwall
├─────────────────┤
├〘✘${prefix}vidro
├─────────────────┤
├〘✘${prefix}wolflogo
├─────────────────┤
├〘✘${prefix}crossfire
├─────────────────┤
├〘✘${prefix}flametext
├─────────────────┤
├〘✘${prefix}silktext
├─────────────────┤
├〘✘${prefix}bokeh
├─────────────────┤
├〘✘${prefix}pubg
├─────────────────┤
├〘✘${prefix}csgo
├─────────────────┤
├〘✘${prefix}night
├─────────────────┤
├〘✘${prefix}inverno
├─────────────────┤
├〘✘${prefix}snow
├─────────────────┤
├〘✘${prefix}pinkpaper
├─────────────────┤
├〘✘${prefix}spark
├─────────────────┤
├〘✘${prefix}beach
├─────────────────┤
├〘✘${prefix}fogolivre
├─────────────────┤
├〘✘${prefix}ytgolden
├─────────────────┤
├〘✘${prefix}3dtextb
├─────────────────┤
├〘✘${prefix}avengers
├─────────────────┤
├〘✘${prefix}phlogo
├─────────────────┤
├〘✘${prefix}glitch
├─────────────────┤
├〘✘${prefix}glitch1
├─────────────────┤
├〘✘${prefix}glitch2
├─────────────────┤
├〘✘${prefix}toxic
├─────────────────┤
├〘✘${prefix}transformer
├─────────────────┤
├〘✘${prefix}graffiti
├─────────────────┤
├〘✘${prefix}harrypotter
├─────────────────┤
├〘✘${prefix}neon3d
├─────────────────┤
├〘✘${prefix}horrorblood
├─────────────────┤
├〘✘${prefix}neondevil
├─────────────────┤
├〘✘${prefix}dropwater
├─────────────────┤
├〘✘${prefix}glow
├─────────────────┤
├〘✘${prefix}captainamerica
├─────────────────┤
├〘✘${prefix}jokerlogo
├─────────────────┤
├〘✘${prefix}magma
├─────────────────┤
├〘✘${prefix}matrix
├─────────────────┤
├〘✘${prefix}breakwall
└──────────────────┘

┌──────────────┐
├ 🈯 *𝗔𝗡𝗜𝗠𝗘*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}animeneko
├─────────────────┤
├〘✘${prefix}animewaifu
├─────────────────┤
├〘✘${prefix}smile
├─────────────────┤
├〘✘${prefix}lick
├─────────────────┤
├〘✘${prefix}kiss
├─────────────────┤
├〘✘${prefix}cry
├─────────────────┤
├〘✘${prefix}hug
├─────────────────┤
├〘✘${prefix}nekonime
├─────────────────┤
├〘✘${prefix}nekofig
└──────────────────┘

┌──────────────┐
├ 🔞 *+𝟭𝟴*
└──────────────┘
┌──────────────────┐
├〘✘${prefix}sexyloli
├─────────────────┤
├〘✘${prefix}blowjob
├─────────────────┤
├〘✘${prefix}waifu
├─────────────────┤
├〘✘${prefix}neko
├─────────────────┤
├〘✘${prefix}trap
└──────────────────┘

╔──────¤◎¤──────╗

       📵𝘤𝘰𝘱𝘺𝘳𝘪𝘨𝘩𝘵© 𝘣𝘺 𝘨𝘢𝘶𝘨𝘦𝘳📵

*Faça uma doação via pix e me ajude a manter este bot*
*Você pode até ganhar a script liberada deste bot ;)*
*Chave disponível em ${prefix}pix*
    
╚──────¤◎¤──────╝
`                                      

	switch(command) {





     
case 'tourl':
       var imgbb = require('imgbb-uploader')
                    
       ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	                
					                                      
                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        reply(`${anu.display_url}`)

break
case 'reversevid':

if (!isQuotedVideo) return reply('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':

if (!isQuotedVideo) return reply('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':

if (!isQuotedVideo) return reply('precisa ser video')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'nightcore':

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   
case 'apostar':

           
           if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
		   const dinheiro = checkMoney(sender)
		   const checkxpr = checkMoney(sender, dinheiro)
		   const quantidader = `10000`
			if (checkxpr <= quantidader) return reply(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
			if (args.length !== 1) return reply('Especifique a quantidade de dinheiro para apostar.')
			if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return reply(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, /*e nosso limite de apostas é de ${quantidader} dinheiro por vez!*/\n\nSeu dinheiro: ${checkxpr}`)
			if (Number(args[0]) < 1000) return reply(`O minimo para se apostar é de 1000 dinheiro`)
			if (isNaN(args[0])) return reply('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
		    const double = Math.floor(Math.random() * 2) + 1
			const nrolxp = Number(-args[0])
			const prolxp = double + Number(args[0])
           if (double == 1) {
					await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
					addMoney(sender, nrolxp, dinheiro)
				//	addKoinUser('556181496039@s.whatsapp.net', prolxp)
		   } else if (double == 2) {
					await reply(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
					addMoney(sender, prolxp, dinheiro)
			}
			break
case 'cassino':
const stoy = [
		'🍊 : 🍋 : 🔔',
		'🍌 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍇 : 🍋 : 🔔',	
        '🔔 : 🍇 : 🍐',
        '🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		]
	const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',	
        '🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',			
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍊 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		] 
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somoy = stoy[Math.floor(Math.random() * stoy.length)]
            const somy = stoy[Math.floor(Math.random() * stoy.length)]
            const moneyWin = Math.ceil(Math.random() * 5000)
       
                 yow = `[  🎰 | CASSINO ]\n-----------------\n${somoy}\n${somtoy}<=====\n${somy}\n[  🎰 | CASSINO ]\n\nDesculpe mas você não ganho dessa vez :/`
                 
            if (somtoy === '🍇 : 🍇 : 🍇') {yow = `[  🎰 | CASSINO ]\n-----------------\n${somoy}\n${somtoy}<=====\n${somy}\n[  🎰 | CASSINO ]\n\n Parabéns você ganhouu!! R$${moneyWin} `
               addMoney(sender, moneyWin)  
               }
else if (somtoy === '🍒 : 🍒 : 🍒') {yow = `[  🎰 | CASSINO ]\n-----------------\n${somoy}\n${somtoy}<=====\n${somy}\n[  🎰 | CASSINO ]\n\n Parabéns você ganhouu!! R$${moneyWin} `
               addMoney(sender, moneyWin)  
               }
else if (somtoy === '🔔 : 🔔 : 🔔') {yow = `[  🎰 | CASSINO ]\n-----------------\n${somoy}\n${somtoy}<=====\n${somy}\n[  🎰 | CASSINO ]\n\n Parabéns você ganhouu!! R$${moneyWin} `
               addMoney(sender, moneyWin)  
               }
else if (somtoy === '🍌 : 🍌 : 🍌') {yow = `[  🎰 | CASSINO ]\n-----------------\n${somoy}\n${somtoy}<=====\n${somy}\n[  🎰 | CASSINO ]\n\n Parabéns você ganhouu!! R$${moneyWin} `
               addMoney(sender, moneyWin)  
               }
            reply(yow)
	            break

/*if (porcentagem < 20 ) {frase = 'Você não é😔'} else if (porcentagem == 21 ) {frase = '+/- ${algo}'} else if (porcentagem == 23 ) {frase = '+/- ${algo}'} else if (porcentagem == 24 ) {frase = '+/- ${algo}'} else if (porcentagem == 25 ) {frase = '+/- ${algo}'} else if (porcentagem == 26 ) {frase = '+/- ${algo}'} else if (porcentagem == 27 ) {frase = '+/- ${algo}'} else if (porcentagem == 28 ) {frase = '+/- ${algo}'} else if (porcentagem == 29 ) {frase = '+/- ${algo}'} else if (porcentagem == 30 ) {frase = '+/- ${algo}'} else if (porcentagem == 31 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 32 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 33 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 34 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 35 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 36 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 37 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 38 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 39 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 40 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 41 ) {frase = 'É sim em...'} else if (porcentagem == 42 ) {frase = 'É sim em...'} else if (porcentagem == 43 ) {frase = 'É sim em...'} else if (porcentagem == 44 ) {frase = 'É sim em...'} else if (porcentagem == 45 ) {frase = 'É sim em...'} else if (porcentagem == 46 ) {frase = 'É sim em...'} else if (porcentagem == 47 ) {frase = 'É sim em...'} else if (porcentagem == 48 ) {frase = 'É sim em...'} else if (porcentagem == 49 ) {frase = 'É sim em...'} else if (porcentagem == 50 ) {frase = '50% agora pra saber só ele dizendo🧐'} else if (porcentagem > 51) {frase = 'você é concerteza🙈'

}
*/
case 'pombinhos':
case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'gostosas':
				
      if (!isGroup) return reply(mess.only.group)
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break 	
	case 'attp1':	//@Kratos æ„›

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	     
case 'attp2':	//@Kratos æ„›	

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp3': //@Kratos æ„›	
	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
	case 'attp4': //@Kratos æ„›

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	
		case 'attp5':	//@Kratos æ„›
		
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break
case 'attp6':	//@Kratos æ„›	

if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: mek})
			     	break	 


	case 'viplist':

					teks = '╭────*「 *VIPS👑* 」\n'
					for (let V of vip) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${vip.length}\n╰──────*「 *BOT BAIANO* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": vip}})
					break
case 'banlist':

					teks = '╭────*「 *USUÁRIOS BANIDOS❌* 」\n'
					for (let V of ban) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${ban.length}\n╰──────*「 *BOT BAIANO* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
	
	case 'ytsrc':     
teks = body.slice(7)  
anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
const objs = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultados[i].title,
title: `${prefix}play`,
description: anu.resultados[i].title
}
objs.push(data)
}
payload = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objs
}
]
}
}
let preparedPayload = await client.prepareMessageFromContent(from, payload,{});
await client.relayWAMessage(preparedPayload, {waitForAck: true})
break
	
	
	case 'gift':

texto = body.slice(6)
var tipo = texto.split("/")[0]
var code = texto.split("/")[1]
if (args.length < 1) return reply('Uso correto: !gift "tipo/código"\n\nExemplo: !gift vip/a4394797e2')
if (code.length < 1) return reply('Cade o GiftCard?')
if (!giftC.includes(code)) return reply('GifCard incorreto ou já foi usado')
if (tipo.length < 1 ) return reply('Que tipo de recompensa quer?')
if (!tipo === 'vip') return reply('Tipo de recompensa errado')
if (giftC.includes(code)) {
giftC.splice(`${code}`)
fs.writeFileSync('./json/giftcard.json', JSON.stringify(giftC))
if (tipo === 'vip') {
vip.push(sender)
fs.writeFileSync('./json/vip.json', JSON.stringify(vip))
reply('GiftCard Vip ativado com sucesso!\nAgora você é um membro vip💸🥃')
}}

break
case 'addvip':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
vip.push(`${mentioned}`)
fs.writeFileSync('./json/vip.json', JSON.stringify(vip))
susp = `💸🪙 @${mentioned[0].split('@')[0]}você virou Vip no bot 🪙💸`
mentions(`${susp}`, mentioned, true)   
break
case 'rmvip':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
vip.splice(`${mentioned}`)
fs.writeFileSync('./json/vip.json', JSON.stringify(vip))
susp = `❕ @${mentioned[0].split('@')[0]} foi removido da lista vip do bot :v ❕`
mentions(`${susp}`, mentioned, true)   
break	
	

	case 'autostk':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}autostk 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isAuto) return reply('❎O recurso AUTO STICKER já está ativado no grupo❎')
                        atsticker.push(from)
                        fs.writeFileSync('./json/atsticker.json', JSON.stringify(atsticker))
                        reply('✅O recurso AUTO STICKER foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAuto) return reply('❎O recurso AUTO STICKER não está ativado no grupo❎')
                        let position = false
                        Object.keys(atsticker).forEach((i) => {
                            if (atsticker[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            atsticker.splice(position, 1)
                            fs.writeFileSync('./json/atsticker.json', JSON.stringify(atsticker))
                        }
                        reply('❌O recurso AUTO STICKER foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}autostk 1, para ativar e 0 para desativar`)
                    }
                    break
	
	
	case 'play1':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
reply('Baixando.. aguarde 🥃')
query = args.join(" ")
get_result = await fetchJson(`http://brizas-api.herokuapp.com/sociais/ytplaymp3?apikey=brizaloka&query=${query}`)
get_result = get_result
ini_buffer = await getBuffer(get_result.thumb)
get_audio = await getBuffer(get_result.audio)
client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `audio.mp3`, quoted: { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "555196741133-1490367661@g.us" } : {}) }, message: { 'imageMessage': { 'caption': `⎇ ${get_result.titulo}\nDuração: ${get_result.duration}\n`, 'jpegThumbnail': ini_buffer} } }, ptt:true})

break
	
	case 'playmp4':
  
  if (!isGroup) return reply(mess.only.group)
					  if (args.length < 1) return reply('Cadê o nome do vídeo ?')
            reply('Baixando.. aguarde 🥃')              
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=gaugerkkkxyz&q=${q}`)            
if (anu.error) return reply('deu erro bro')
if (anu.duration > 1) return reply('Teste de limite de duração')
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                client.sendMessage(from, lagu, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "555196741133-1490367661@g.us" } : {}) }, message: { 'imageMessage': { 'caption': `⎇ ${anu.result.title}\n`, 'jpegThumbnail': buffer} } }})

                break

	
	case 'play':
  
  if (!isGroup) return reply(mess.only.group)
					  if (args.length < 1) return reply('Cadê o nome da música ?')
            reply('Baixando.. aguarde 🥃')
                const ytbt = args.join(" ")
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=gaugerkkkxyz&q=${ytbt}`)        
if (anu.error) return reply('deu erro bro')
if (anu.duration > 1) return reply('Teste de limite de duração')
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                client.sendMessage(from, lagu, MessageType.audio, { mimetype: Mimetype.mp4Audio, filename: `audio.mp3`, quoted: { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "555196741133-1490367661@g.us" } : {}) }, message: { 'imageMessage': { 'caption': `⎇ ${anu.result.title}\n`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)} } }, ptt:true})

                break


case 'doc':
tope = fs.readFileSync('./teste.html')
client.sendMessage(from, tope, MessageType.document, {mimetype: 'text/html', title: 'teste'})
break
	
case 'catalogo':
catalogo(gaugerxyz)
break
	
	case 'emoji':
            if (!q) return reply('Y el emoji?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            const emojitext = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${emojitext}`) 
            console.log(emojitext)
            })
            break

	case 'addgift':
	if (!isOwner) return reply('Sem permissão para isso')
	 const giftCode = createCode(10)
   giftC.push(`${giftCode}`)
fs.writeFileSync('./json/giftcard.json', JSON.stringify(giftC))
   reply('GiftCard adicionado com sucesso')
   reply(`${giftCode}`)
   break

case 'gift':
if (args.lengh < 1) return reply('Cade o GiftCard?')
if (!isGift) return reply('GifCard incorreto ou já foi usado')
reply('GiftCard ativado com sucesso!')
giftC.splice(`${q}`)
fs.writeFileSync('./json/giftcard.json', JSON.stringify(giftC))
break

	case '78':
	reply(q)
	break
	
	
	
	
	case 'tban':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.updatePresence(from, Presence.composing) 
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else {return reply("*Selecionar:*\nsegundos\nminutos\nhora\n\n*Exemplo*\n10 segundos")}
setTimeout( () => {
const close = {
text: `Grupo fechado pelo administrador @${sender.split("@s.whatsapp.net")[0]}\nagora* apenas admin* pode enviar mensagens`, contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
break
	
	
	
case 'smeme': case 'stickmeme':
gh = body.slice(7)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
await limitAdd(sender)
break

/*case 'stickerf': //by gauger
if (!isQuotedSticker) return reply('marque a fig')
const sticker = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await client.downloadAndSaveMediaMessage(sticker)
//gg = body.slice(10)
// txt1 = gg.split("/")[0];
//  txt2 = gg.split("/")[1];

   const stickerMetadata = {
        type: 'full',
        pack: `by gaugerrr`,
        author: `💸`,
        categories: [
            '🌹'
        ]
    }
    sticker = await new Sticker(image, stickerMetadata).build()

client.sendMessage(from, sticker, sticker, {quoted: mek})
break  
*/

case 'stickerfm':
if (!isQuotedSticker) return reply(`Menciona el sticker que quieres robar junto al comando *${prefix}robar*`)
                  const encmediia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  const meidia = await client.downloadAndSaveMediaMessage(encmediia, `./exif/${sender}`)
                  const webpWithMetadata = await WSF.setMetadata
                  cash.sendMessage(from, webpWithMetadata, MessageType.sticker, {quoted: msg, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                  fs.unlinkSync(meidia)
break 
case 'quoted1':
client.sendMessage(from, 'test', text, {quoted: ftroli2})
break
case 'quoted2':
client.sendMessage(from, 'test', text, {quoted: say1})
break
case 'quoted3':
client.sendMessage(from, 'test', text, {quoted: ffoto})
break
case 'quoted4':
client.sendMessage(from, 'test', text, {quoted: say2})
break
case 'quoted5':
client.sendMessage(from, 'test', text, {quoted: gauger})
break
case 'quoted6':
client.sendMessage(from, 'test', text, {quoted: gxyz})
break
case 'quoted7':
client.sendMessage(from, 'test', text, {quoted: fkontak})
break
case 'quoted8':
client.sendMessage(from, 'test', text, {quoted: fdoc})
break
case 'quoted9':
client.sendMessage(from, 'test', text, {quoted: say3})
break
case 'quoted10':
client.sendMessage(from, 'test', text, {quoted: foto3})
break
case 'quoted11':
client.sendMessage(from, 'test', text, {quoted: foto2})
break


case 'coala':
team = await fetchJson (`https://api-team-of-hero.herokuapp.com/api/imagens/koala?apikey=apiteam`)
buffer = await getBuffer(team.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'panda':
team = await fetchJson (`https://api-team-of-hero.herokuapp.com/api/imagens/panda?apikey=apiteam`)
buffer = await getBuffer(team.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'raposakk':
team = await fetchJson (`https://api-team-of-hero.herokuapp.com/api/imagens/shiba?apikey=apiteam`)
buffer = await getBuffer(team.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'gato':
team = await fetchJson (`https://api-team-of-hero.herokuapp.com/api/imagens/gato?apikey=apiteam`)
buffer = await getBuffer(team.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'dog':
team = await fetchJson (`https://api-team-of-hero.herokuapp.com/api/imagens/cachorro?apikey=apiteam&tipo=dog`)
buffer = await getBuffer(team.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'femoji':
  
reply(mess.wait)
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/emoji2png?text=${emoji}`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, { quoted: mek })
break

case 'metadinha':
               
			
				reply(mess.urachin)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
				cowo = await getBuffer(anu.result.male)
				client.sendMessage(from, cowo, image, {quoted: mek, thumbnail:null})
				cewe = await getBuffer(anu.result.female)
				client.sendMessage(from, cewe, image, {quoted: mek, thumbnail:null})
				
				break
	/*-------------[ Tictactoe Handler ]-------------*/
                case 'jogodavelha':
                if (!isUser) return reply('usuario nao registrado')                                 
						if(!isGroup) return reply('comando apenas para grupos')
                    if (fs.existsSync(`./lib/jogodavelha/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
     [❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     se estiver bugado, null e null, use ${prefix}reset
     `;
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: gauger,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `*⟅❗⟆ Jogue com Alghem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/jogodavelha/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} _está te desafiando para uma partida de jogo da velha..._
     
     _[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._     
     `;
                    client.sendMessage(from, strChat, MessageType.text, {
                         quoted: gauger,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    await limitAdd(sender)
                    break
         /*             case  'reset':
                    if (fs.existsSync("./lib/jogodavelha/" + from + ".json")) {

                         fs.unlinkSync("./lib/jogodavelha/" + from + ".json");

                         reply(`Jogo da velha resetado com sucesso nesse grupo!`);

                    } else {

                         reply(`Não a nenhuma sessão em andamento...`);

                    }
                    break */
    case  'reset':
 
 if (fs.existsSync("./lib/jogodavelha/" + from + ".json")) {

                      if (isOwner) {                    
                         fs.unlinkSync("./lib/jogodavelha/" + from + ".json")
                         reply(`Jogo da velha resetado com sucesso nesse grupo!`)
                         }
                         
                    if (isGroupAdmins) {                     
                         fs.unlinkSync("./lib/jogodavelha/" + from + ".json")
                         reply(`Jogo da velha resetado com sucesso nesse grupo!`)
                         }
                         
                    } else {
                     reply(`Não a nenhuma sessão em andamento...`)
                    }

break

                                                  
                          case 'comandos':
               
                                
           if (!isUser) return reply(`❌Usuário não registrado, por favor, faça seu registro com o comando ${prefix}registrar (nome)\nExemplo: ${prefix}registrar gauger❌`)  
           
             
                            
             client.sendMessage(from, gaugerxyz, text, { quoted: gauger, contextInfo: {forwardingScore: 508, isForwarded: true}})		
                   
                            break  
                        
       case 'pix':
       reply(`Chave Aleatória do pix para doações ;)\nFale com o dono caso for doar`)
      reply('d3e9199f-1fb8-4b9c-9d3b-dcd0584fa6f6')
break
case 'tcmd':
reply(`${comandost}`)
break

case 'infocell':
reply(`${wa_version}\n${mcc}\n${mnc}\n${os_version}\n${device_manufacturer}\n${device_model}`)

break 	
	case 'perfil':
	if (!isUser) return reply(`Usuário nãl registrado, use:\n${prefix}registrar (seu nome)`)
  
                    const usLevel = getLevelingLevel(sender)
                    const usXp = getLevelingXp(sender)
                    const usTime = getRegisterTime(sender)
                    const serh = getRegisterSerial(sender)                
                    const regin = getRegisterName(sender)
                    const requirXp = 500 * (Math.pow(2, usLevel) - 1)                            
                    const chek = getLevelingId(sender)
                    if (usLevel === undefined && chek === undefined) addLevelingId(sender)
                    try {
                        ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                    } catch {
                        ppimg = './logos/.noPicure.jpg'
                    }
                    const pf =
                        `
  *◍₊ิ۪͡୭⇾ Nome: @${sender.split("@")[0]}
  *◍₊ิ۪͡୭⇾ Registrado: ✅
  *◍₊ิ۪͡୭⇾ Nome de registro: ${regin}
  *◍₊ิ۪͡୭⇾ Registrado desde: ${usTime}
  *◍₊ิ۪͡୭⇾ Level: ${usLevel}
  *◍₊ิ۪͡୭⇾ XP: ${usXp}/${requirXp}
  *◍₊ิ۪͡୭⇾ Patente: ${patt}
  *◍₊ิ۪͡୭⇾ link: wa.me/${sender.split("@")[0]}
  *◍₊ิ۪͡୭⇾ Código: ${serh}
`
                    its = await getBuffer(ppimg)
                    client.sendMessage(from, its, image, {
                        quoted: mek,
                        thumbnail: null,
                        caption: pf,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    })

                    break

                case 'registrar':
                    if (isUser) return reply('✅Você já está registrado✅')
                    if (args.length < 1) return reply(`Escreva seu nome ou nick\nExemplo: ${prefix}registrar gauger`)
                   
                   const namaUser = body.slice(11)
                    const serialUser = createSerial(20)                
                    if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
     
                    veri = sender
                    try {
                        ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                        ppimg = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'
                    }
                    captionnya =
                        `    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╔════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚════════════════
você se registrou, digite ${prefix}menu para listar meus comandos`
                    daftarimg = await getBuffer(ppimg)
                    addRegisteredUser(sender, namaUser, time, serialUser)
                    client.sendMessage(from, captionnya, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    })
                    break

	
	case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
client.sendMessage(from, `${anu.success}`, text, {quoted: mek})
} catch {
reply("erro ao executar comando")
}
break


case 'baiano':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://api.simsimi.net/v1/?lang=pt&text=${q}`, {method: 'get'})
if (anu.error) return reply(';-;')
client.sendMessage(from, `${anu.success}`, text, {quoted: mek})
} catch {
reply('Não entendi, pode repetir?')
}
break	
	


/*case 'playmp4':
  
  
					  if (args.length < 1) return reply('Cadê o nome do vídeo?')
                reply('🔎 Procurando vídeo, aguarde...🔎')
            const tytbt = body.slice(9)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=gaugerkkkxyz&q=${tytbt}`)
                 infomp3 = `𒊹︎︎︎ Enviando seu vídeo..🎬`
if (anu.error) return reply(mess.error.play)
if (anu.duration > 1) return reply('Teste de limite de duração')
          //      buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
           //    client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3/n${anu.result.size}`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}, caption: infomp3})
                client.sendMessage(from, lagu, MessageType.video, {quoted: gauger, mimetype: 'video/mp4'})
                break
*/
case 'play2':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`http://brizas-api.herokuapp.com/sociais/ytplaymp4?apikey=brizaloka&query=${query}`)
get_result = get_result
ini_buffer = await getBuffer(get_result.thumb)
client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `Titulo: ${get_result.titulo}\nEnviando sua música, aguarde 🎬`})
get_audio = await getBuffer(get_result.video)
client.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `audio.mp3`, quoted: mek})
break
case 'playa':
  
  if (!isGroup) return reply(mess.only.group)
					  if (args.length < 1) return reply('Cadê o nome da música ?')
                reply('🔎 Procurando música, aguarde...🔎')
                const ytbtt = body.slice(6)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=gaugerkkkxyz&q=${ytbtt}`, {method: 'get'})
                 infomp3 = `𒊹︎︎︎𝐄𝐍𝐕𝐈𝐀𝐍𝐃𝐎 𝐒𝐔𝐀 𝐌𝐔𝐒𝐈𝐂𝐀 𝐀𝐆𝐔𝐀𝐑𝐃𝐄🎬`
if (anu.error) return reply(mess.error.play)
if (anu.duration > 1) return reply('Teste de limite de duração')
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}, caption: infomp3})
                client.sendMessage(from, lagu, MessageType.audio, {quoted: gauger, mimetype: 'audio/mp4', ptt:true})
                break
                         case 'musica':
                          if (isLimit(sender)) return reply(mess.limitC)
                         if (args.length < 1) return reply('*Digite o nome da música desejada \n\nObs: a música demora até 2 minutos para ser enviada, paciência�?*')
			mus = body.slice(6)
                mus1 = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${mus}&apikey=gaugerkkkxyz`, {method: 'get'})
                
               if (isLimit(sender)) return reply(mess.limitC)
               if (mus1.error) return reply(mus1.error)
                 muss = `*Musica encontrada!!*\nTitulo : ${mus1.result.title}\nTamanho : ${mus1.result.size}\nLink : ${mus1.result.source}\nA música está sendo enviada... Aguarde!!`
                buffer = await getBuffer(mus1.result.thumbnail)
                muss2 = await getBuffer(mus1.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: muss})
                client.sendMessage(from, muss2, audio, {mimetype: 'audio/mp4', filename: `${mus1.result.title}.mp3`, quoted: mek, ptt:true})
                
                break

                case 'addxp':
                if (!isOwner) return reply('só o dono pode')
                    if (!isGroup) return reply('so grupo')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pru = '.\n'
                    for (let _ of mentioned) {
                        pru += `@${_.split('@')[0]}\n`
                    }
                    susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
                    mentions(`${susp}`, mentioned, true)
                    addLevelingXp((mentioned[0]), Number(args[1]))
                   
                    break
            //levEL ATUAL
                   case 'level':
                    
                    if (!isLevelingOn) return reply(`❌ Leveis não ativados no grupo, por favor ative com o comando:\n${prefix}leveis 1`)
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                //    const userTime = getRegisterTime(sender)
                    if (userLevel === undefined && userXp === undefined) return reply('não registrado, em testes')
                    const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
                    client.sendMessage(from, leveltab(pushname, userLevel, userXp, patt), text, {
                            quoted: mek,
                            contextInfo: {
                                mentionedJid: [sender]
                            }
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await reply(`Error!\n${err}`)
                        })
                      
                    break

//-----------------------------------------------------------------MODOS ON/OFF--------------------------------------------------------------------//

	case 'antifake':
     if (!isUser) return reply(yag.rg(p))
     if (isBanned) return reply(yag.ban())
       if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     await limitAdd(sender)
break


                case 'leveis':

                    if (!isGroup) return reply(mess.only.group)

                    if (!isGroupAdmins) return reply('so adm pd usar')

                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)

                    if (Number(args[0]) === 1) {

                        if (isLevelingOn) return reply('❎O recurso LEVEIS já está ativado no grupo❎')

                        leveling.push(from)

                        fs.writeFileSync('./json/leveling.json', JSON.stringify(leveling))

                        reply('✅O recurso LEVEIS foi ativado✅')

                    } else if (Number(args[0]) === 0) {

                        if (!isLevelingOn) return reply('❎O recurso LEVEIS não está ativado no grupo❎')

                        let position = false

                        Object.keys(leveling).forEach((i) => {

                            if (leveling[i] === from) {

                                position = i

                            }

                        })

                        if (position !== false) {

                            leveling.splice(position, 1)

                            fs.writeFileSync('./json/leveling.json', JSON.stringify(leveling))

                        }

                        reply('❌O recurso LEVEIS foi desativado❌')

                    } else {

                        reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)

                    }

                    break




                                case 'bv':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('o recurso está ativo')
						welkom.push(from)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('bv foi ativado nesse grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('bv foi desativado nesse grupo')
					} else {
						reply('digite 1 para ativar, 0 para desativar o recurso')
					}
                                        break
                                case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						antilink.push(from)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Grupo anti-link ativado com sucesso neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					                    break
				
                                 case 'nsfw':
                                 if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)				
					if (args.length < 1) return reply('Digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('O recurso está ativo')
						nsfw.push(from)
						fs.writeFileSync('./json/nsfw.json', JSON.stringify(nsfw))
						reply('O recurso nsfw foi ativado nesse grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./json/nsfw.json', JSON.stringify(nsfw))
						reply('O recurso nsfw foi desativado nesse grupo')
					} else {
						reply('digite 1 para ativar e 0 para desativar nsfw')
					}
					break


//-------------------------------------------------------------------------GRUPOS-------------------------------------------------------------------------//

case 'kickgp': 

   if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
 client.sendMessage("Alvo removido com sucesso")

break           



case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
//if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./json/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break
case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
//if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono 🌚🤙🏼 * ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

/*case 'mensagem':
if(args.length < 1) return reply(`Use o comando da seguinte forma\n${prefix}mensagen (número da pessoa)/(mensagem)\nExemplo: ${prefix}mensagem 555180614158/oi, te amo mano`)
if(args.length < 300) return reply('Máximobde 300 caracteres')
txt = body.slice(10)
var txt1 = txt.split("/")[0];
var txt2 = txt.split("/")[1];
client.sendMessage(`${txt1}@s.whatsapp.net`, ${txt2}, text
  */
  case 'sugest':
  	if (args.length < 2) return reply('*Cade a sugestão?*')
  	if (args.length > 300) return reply('*Máximo de 300 caracteres*')
  reply('*Sua sugestão foi enviada ao meu dono com sucesso!*')
  suggestion = [body.slice(8)]
  barra = '/'
  client.sendMessage(`555180614158@s.whatsapp.net`, `*Nova Sugestão*\n*Número:* https:/${barra}wa.me/${sender.split("@s.whatsapp.net")[0]}\n*Nome:* ${pushname}\n\n*Sugestão:*\n${suggestion}`, text)          
break

  
  case 'report':
  	if (args.length < 2) return reply('*Quer reportar oque?*')
  	if (args.length > 100) return reply('*Máximo de 100 caracteres*')
  reply('*Seu report foi enviado ao meu dono com sucesso!*')
  report = [body.slice(8)]
  barra = '/'
  client.sendMessage(`555180614158@s.whatsapp.net`, `*Novo Report*\n*Número: *https:/${barra}wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Nome: ${pushname}*\n\n*Sugestão:\n${report}*`, text)
  break

  
  case 'convite':
  	if (args.length < 2) return reply('*Cade o link?*')
  	if (args.length > 50) return reply('*Máximo de 50 caracteres*')
  reply('*Seu convite foi envjado e será analisado..\nSe for aceito o bot irá entrar no seu grupo*')
  convite = [body.slice(8)]
  barra = '/'
  client.sendMessage(`555180614158@s.whatsapp.net`, `*Novo convite*\n*Número: *https:/${barra}wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Nome: ${pushname}*\n\n*Sugestão:\n${convite}*`, text)          
break


	case 'fg':
		   //     reply('Comando de fig com problema, desativado por tempo indeterminado')	       
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)                      
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('botBaiano', 'gauger')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply('ERROR')
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('espere..')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('botBaiano', 'gauge')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
} 
break

           case 'tag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${prefix}supertag para marcar`)
        }
        break


case 'tomp4': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(mess.wait)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/mp4',duration:99999999, filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
case 'swm':
	    case 'stickerwm':

			        if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('/')[0]
                    var author = kls.split('/')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: gauger})
                    } else {
                    reply('Formato incorreto, marque uma imagem!')
                    }
                    break










/* case  'rename':

		    		if (!isQuotedSticker) return reply('Apenas figuriha tio')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('/')
		            satu = anu[0] !== '' ? anu[0] : `gauger`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `botBaiano`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break

case  'steal':
if (!isOwner) return reply('Isso é só pro meu dono')
		    		if (!isQuotedSticker) return reply('Apenas figuriha tio')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            require('./lib/fetcher.js').createExif(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@gaugerrr`, ``)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break
						
*/
	
		case 'safada':        
		
             client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 200)}`            	 
			 body = [body.slice(8)]   
               rspst = `*Eitaaa, quanta safadeza em @${sender.split('@')[0]} 😈😈🔥*\n\n*_${body}_ você é ${random}% SAFADA(O)😈🤤🔥* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)	  
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid 			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Eita eita eita😈😈🔥*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% SAFADA(O)🤤😈🔥*`, mentioned, true)}
                break								
	
	
		case 'cringe':          
	         client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 101)}`
			 body = [body.slice(8)]   
               rspst = `*Tmnc, cringe dms🤢🤢🤮*\n\n*_${body}_ você é ${random}% CRINGE👽* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Eca, q cringe🤨🤢*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% CRINGE🤮*`, mentioned, true)}
                break											
						
	case 'safadeza':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 200)}`
			 body = [body.slice(10)]   
               rspst = `*Eitaaa, quanta safadeza em bb😈😈🔥*\n\n*_${body}_ você é ${random}% SAFADA(O)😈🤤🔥* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Eita eita eita😈😈🔥*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% SAFADA(O)🤤😈🔥*`, mentioned, true)}
                break															
						
case 'gado':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(6)]   
               rspst = `*Gado dms pqp🧐*\n\n*_${body}_ você é ${random}% GADO (A)KJK🐂😲* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Gado dms🧐*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GADO(A) KJK🐂😲*`, mentioned, true)}
                break
     
               				             case 'golpe':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(6)]   
               rspst = `*Vc é do golpe?🤪🤑*\n\n*_${body}_ você é ${random}% GOLPISTA😳🤠* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Vc é do golpe?🤑🤪*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GOLPISTA🤠🔥*`, mentioned, true)}
                break

case 'gay': //by gauger 
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(5)]   
               rspst = `*Tu é mano?😳😌*\n\n*_${body}_ você é ${random}% GAY🤭🌈* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Tu é mano?😳😌*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GAY🌈🤭*`, mentioned, true)}
                break

case 'lgbt':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(6)]   
               rspst = `*Vc é desse país 🏳️‍�??*\n\n*_${body}_ você é ${random}% LGBT🤭🌈* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Vc é desse país 🏳️‍�??*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% LGBT🌈🤭*`, mentioned, true)}
                break

case 'lesbica':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(9)]   
               rspst = `*You like girls?🤭💞*\n\n*_${body}_ você é ${random}% LÉSBICA🤭😛* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*You like girls?💞🤭*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% LÉSBICA🤭😛*`, mentioned, true)}
                break

case 'gatinho':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(9)]   
               rspst = `*Miaaww😼👀*\n\n*_${body}_ você é ${random}% GATINHO😻💘* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Miawww😼👀*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GATINHO💘😻*`, mentioned, true)}
                break

case 'gatinha':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(9)]   
               rspst = `*Miaaww😼👀*\n\n*_${body}_ você é ${random}% GATINHA😻💘* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Miawww😼👀*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GATINHA💘😻*`, mentioned, true)}
                break
                
       case 'perfect':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(9)]   
               rspst = `*Pefeição? será?🤔*\n\n*_${body}_ você é ${random}% PERFEITO(A)🥳🤩* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Perfeição? será?🤔*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% PERFEITO(A)🤩🥳*`, mentioned, true)}
                break         

case 'lerdeza':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 120)}`
			 body = [body.slice(9)]   
               rspst = `*Oq man?🤔*\n\n*_${body}_ você é ${random}% LERDA(O)🤔😑* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*nn entendi kk😑*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% LERDA(O)😒🙄*`, mentioned, true)}
                break



case 'gostosa':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 200)}`
			 body = [body.slice(9)]   
               rspst = `*Uuiii, gostosa on🔥😳*\n\n*_${body}_ você é ${random}% GOSTOSA😏🥵* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Uiiii gostosa on🔥🔥*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GOSTOSA😏🥵*`, mentioned, true)}
                break

case 'chato':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 100)}`
			 body = [body.slice(7)]   
               rspst = `*Nmrl man cê é chato😑*\n\n*_${body}_ você é ${random}% CHATO🤨* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*KKK chatão em😑*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% CHATO🤨*`, mentioned, true)}
                break

case 'amor':          
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(6)]   
               rspst = `*amor?*\n\n*_${body}_ você é ${random}% o amor da vida do(a) ${pushname}💘* __`
                if(args.length < 1) return reply('*Escreva o nome de alguém, ou marque a pessoa*')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*amor?*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% o amor da vida do ${pushname}💘*`, mentioned, true)}
                break

	        case 'ship':
	           client.updatePresence(from, Presence.composing)	
	        if(args.length < 1) return reply('*Escreva 2 nomes!*\n\n*Exemplo: .ship joão e maria*')
	      body = [body.slice(6)]   
	      random = `${Math.floor(Math.random() * 100)}`       
	      hasil = `O casal *${body}* é *${random}%* compatível😍`
	      reply(hasil)
	      break

	      case 'ppp':		

					const ta =['penso','passo','pego','PEGOO DMS😍','penso..','passokk','passo com ctz','pegaria todo dia ain','penso com carinho😏']
					const ka = ta[Math.floor(Math.random() * ta.length)]

					client.sendMessage(from, ''+ ka+'', text, { quoted: mek })

					break	                        





                         
                                        
    
    
    		case 'dado':
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
		//	if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
    
    

                             
		
					
			
	
	case 'attp':
	 if (isLimit(sender)) return reply(mess.limitC)
			     	if (args.length < 1) return reply(`Coloque o texto _\n\n*Exemplo ${prefix}attp atari*`)
                                url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	client.sendMessage(from, attp2, sticker, {quoted: mek})			    	
				 			 	
				 			break	
				 			
			
 	case 'bateria':
let batans = global.batrei[global.batrei.length - 1]
  batter =`🔋 : ${batans}%`
 url = encodeURI(`https://api.xteam.xyz/attp?file&text=${batter}`)
		    		attp2 = await getBuffer(url)
			    	client.sendMessage(from, attp2, sticker, {quoted: mek})
  break 						


    
    
    
                                    case 'antilink':                                  
        if (isLimit(sender)) return reply(mess.limitC)      
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Antilink ativado com sucesso �?')
						client.sendMessage(from,`*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
					} else if (Number(args[0]) === 0) {
						if (!iAntiLink) return reply('O anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
    
                case 'speed':
                case 'ping':        
             
                    //const timestamp = speed();
              //      const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Samsung*\nRAM: *4/64*\nRede: *45mbps*\nTipo do bot: *Termux Somente*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
                                                                                              

//------------------------------------------------------------------------AUDIOS---------------------------------------------------------------------------//

            
                case 'tirargrave':    
                if (isLimit(sender)) return reply(mess.limitC) 
                if (!isQuotedAudio) return reply('*Marca um aúdio bro*')        
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "firequalizer=gain_entry='entry(0,-23);entry(250,-11.5);entry(1000,0);entry(4000,8);entry(16000,16)" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break

case 'estourar1':    
   if (isLimit(sender)) return reply(mess.limitC)
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')           
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break

case 'estourar2':      
  if (isLimit(sender)) return reply(mess.limitC)
      if (!isQuotedAudio) return reply('*Marca um aúdio bro*')       
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "superequalizer=1b=20:2b=20:3b=20:4b=20:5b=20:6b=20:7b=20:8b=20:9b=20:10b=20:11b=20:12b=20:13b=20:14b=20:15b=20:16b=20:17b=20:18b=20,volume=10" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break


                case 'normal':       
       if (isLimit(sender)) return reply(mess.limitC)          
                     if (!isQuotedAudio) return reply('*Marca um aúdio bro*')        
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break

			case 'slow':
		 if (isLimit(sender)) return reply(mess.limitC)	
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.8,asetrate=43800" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				
				break
				case 'bebado':
				 if (isLimit(sender)) return reply(mess.limitC) 
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break
				case 'demonio':
		 if (isLimit(sender)) return reply(mess.limitC)		
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break
				case 'grave':         
			 if (isLimit(sender)) return reply(mess.limitC)	        
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af bass=g=6:f=150:w=0.8 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break
 if (isLimit(sender)) return reply(mess.limitC)
				case 'diabolico':       
		   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')		          
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=3:width_type=o:width=50:g=80 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break
				case 'estourar':    
			 if (isLimit(sender)) return reply(mess.limitC)	    
				   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')         
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=200:width_type=o:width=200:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					
				break	
				case 'kkx':
				 if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					client.sendMessage(from, media, audio, {mimetype: 'audio/mp4', duration:9999999, ptt:true, quoted: mek})
					break
case 'esquilo':
 if (isLimit(sender)) return reply(mess.limitC)
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					buz = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=65100" ${buz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						bah = fs.readFileSync(buz)
						client.sendMessage(from, bah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(buz)
					    })
					    
				       break

case 'rapido':
 if (isLimit(sender)) return reply(mess.limitC)
   if (!isQuotedAudio) return reply('*Marca um aúdio bro*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					buz = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=2.0" ${buz}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('*Ocorreu um erro, tente novamente.*')
						bah = fs.readFileSync(buz)
						client.sendMessage(from, bah, audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: mek})
						fs.unlinkSync(buz)
					    })
					    
				       break
                  
//-----------------------------------------------------------------------------------------------------------------------------------------------------//

                  
                  
 
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marca o alvo que deseja rebaixar*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pedido recebido, rebaixado do cargo de administrador :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, rebaixado do cargo de administrador @${mentioned[0].split('@')[0]}\n\nVirou membro comum no *${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                               
                        case 'getadm':
               
					client.updatePresence(from, Presence.composing) 
                                         
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)				
						client.groupMakeAdmin(from, sender)
			
					break
          
                  case 'promover':
                  case 'promote':
					client.updatePresence(from, Presence.composing) 
                                         
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marca o alvo que você deseja promover*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, foi promovido como administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, adicionando posição como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'wa.me':
				  case 'wame':
				   if (isLimit(sender)) return reply(mess.limitC)
				   barra = `/`
  client.updatePresence(from, Presence.composing) 
      options = {
          text: ` *SELF WHATSAPP* \n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSeu link do Whatsapp : *https:/${barra}wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Ou*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text)
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				
				break
			
              case 'owner':
                case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Contato do dono, ou https://wa.me/555180614158',MessageType.text, { quoted: mek} )
                break
	
	case 'cmd':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break

case 'fix':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmdgt = `git add . && git commit -am "melhorias adicionadas"`
	               exec(cmdgt, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break

		case 'deploy':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	              const cmdgit = `git push heroku master`
	              reply('deploying the bot on the heroku server..')
	              exec(cmdgit, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })                  
	             setTimeout( () => {	                 
					reply('full deployment, starting worker:1') 					
					}, 60000)
			
		         setTimeout( () => {
					reply('worker was started') 
					}, 75000)
	              	               	             	       
                  break
case 'kjj':

					setTimeout( () => {
					reply('worker started') 
					}, 10000)
					
					setTimeout( () => {
					reply('full deployment, starting worker:1') 
					}, 20000)
break
		
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'Tempo limite', text) // ur cods
					}, 30000) // 1000 = 1s,
							setTimeout( () => {
					client.sendMessage(from, '5 segundos', text) // ur cods
					}, 20000) // 1000 = 1s,
							setTimeout( () => {
					client.sendMessage(from, '10 segundos', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 20 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '30 segundos restantes', text) // ur cods
					}, 0) // 1000 = 1s,
					
					break

				case 'blocklist':
					teks = '*Esta é a lista de números bloqueados :\n*'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

				case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, `*Qual é a sigla do pais?*\n\n*Veja as siglas em:*\n*${prefix}siglas*`, text, {quoted: mek})
				            if (isLimit(sender)) return reply(mess.limitC)
                                    
                                   if (isLimit(sender)) return reply(mess.limitC)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde está o texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('*a maior parte do texto é merda*')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        
					break
				case 'listadmins':
				case 'adminlist':
				case 'admins':
					client.updatePresence(from, Presence.composing) 
                                         
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

             case 'img': 

				    client.updatePresence(from, Presence.composing) 
				    txt = [body.slice(5)]
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${txt}`)
				    reply('Baixando, espere..')
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    client.sendMessage(from, pok, image, { quoted: mek, thumbnail: null})
				    break
				    
     
				case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Forvalget ble endret til : ${prefix}`)
					break

				

 
break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(8)}@c.us`, text)
					break
				case 'marcar':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                     
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪�? *Mention All* 〙✪══\n╠➥'+teks+'╚═�? - - - - �?', members_id, true)
					
					break
                case 'marcar2':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪�? Mention All 〙✪══\n╠➥'+teks+'╚═�? - - - - �?', text, {quoted: mek})
					break
                case 'marcar3':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪�? Mention All 〙✪══\n╠➥'+teks+'╚═�? - - - - - �?', text, {detectLinks: false, quoted: mek})
					break
                        case 'marcar4':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, '╔══✪�? Mention All 〙✪══\n╠➥'+teks+'╚═�? - - - - - �?', text, {quoted: mek})
					break
                case 'marcar5':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪�? Mention All 〙✪══\n╠➥'+teks+'╚═�? - - - - - �?')
					break
				case 'bugarbot':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('*Obrigado pelo novo perfil😃*')
					break
	case 'tm':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐓𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐚̃o ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐓𝐫𝐚𝐬𝐦𝐢𝐬𝐚̃𝐨 ]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
case 'aviso':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐀𝐯𝐢𝐬𝐨 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐀𝐯𝐢𝐬𝐨 ]\n\n${body.slice(7)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break

                     case 'sairgp':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner) return reply('*vc não é o dono porra')
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Tchauzinho', text) // ur cods
					}, 0)
                     break


                    case 'ownergp':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `O proprietario do grupo é : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
 

				case 'add':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`*Quem voce quer adicionar?\n\nUso correto: ${prefix}add 5551XXXXXXXXX*`)
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break

				case 'remover':
				case 'kick':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			          
			    
			         if (args[0].startsWith('@12342434899')) return client.groupRemove(from, sender)
			     
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca quem voce deseja remover')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Tchauzinho otário :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mention<ed)
					} else {
						mentions(`Tchauzinho otário : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, '*Se fodeo ksksk*', text)
					}
					break
				
                 case 'linkgp':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                      
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                 if (args.length < 1) return reply('*Cade o link?�?*')
                if (isLimit(sender)) return reply(mess.limitC)
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                                
				break

                 

      

			case 'fechargp':
			case 'group close':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `O grupo foi fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens😏`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'abrirgp':
                case 'group open':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens😴`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break


//FIGURINHA 
				case 'f':
   
  //     reply('Comando de fig com problema, desativado por tempo indeterminado')
				if (isBanned) return reply('Banido!')
					await limitAdd(sender)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait) 
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
					} 
					
					break

/*//COMANDO ST STICKER
case 'st':

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)                      
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('client-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply('ERROR')
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('*「 ❗ 」 Espere só um pouquinho amigo, a sua figurinha está sendo feita...*',)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('client-BOT', 'sayo')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos.`)
}

break*/
  /* 

				case 'f':
				case 'figu':
				case 'sticker':			
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('gauger', 'botBaiano')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})				
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter $ {type} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('gauger', 'botBaiano')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})						
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply(`Erro, tente novamente\nCertifique-se que se for um vídeo, ou gif, ele deve ser de no máximo 10 segundos para a figurinha ser feita`)
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('gauger', 'botBaiano')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})							
							})
						})
	
					} else {
						reply(`Envie uma imagem com a legenda ${prefix}f ou imagem marcada já enviada`)
					}
					break
			*/

				case 'foto':
				 if (isLimit(sender)) return reply(mess.limitC)
				    client.updatePresence(from, Presence.composing)
	                                     
					if (!isQuotedSticker) return reply('❌ Responda uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`❌ Apenas figurinha de foto, se quer fazer uma figurinha virar um gif, use ${prefix}tomp4 ❌`)
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					
					break
                	case 'tomp3':
                	 if (isLimit(sender)) return reply(mess.limitC)
                	client.updatePresence(from, Presence.composing) 
                         
					if (!isQuotedVideo) return reply('❗Responda um video�?')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('�? Falha ao converter vídeo para mp3 �?')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					
					break

  	
	
                     case 'apagar':
					case 'del':
					case 'delete':
     			if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)                                         
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					reply('Apaguei 😳')
					break

                

				case 'fakereply':
				 if (isLimit(sender)) return reply(mess.limitC)
				if (args.length < 1) return reply(`*Uso correto:\n${prefix}calunia [marque alguém|mensagem|resposta]]\n\nExemplo : \n${prefix}calunia @tagmember|oie|oi mano`)
				var fitn = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace3 = fitn.split("|")[0];
					var target3 = fitn.split("|")[1];
					var bot3 = fitn.split("|")[2];
					client.sendMessage(from, `${bot3}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
					
					break

       
                                case 'clearall':
					if (!isOwner) return reply('*Vc não é meu dono🤪�?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Todo o chat foi limpo :)')
					break

				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('*Comando só pode ser usado pelo gauger, pois ele clona a foto de perfil do bot�?*')
					if (args.length < 1) return reply('Qual a tag de quem voce deseja clonar?')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil desse otário foi roubada😛 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('FALHA')
					}
					break

case 'bal':
  reply(`Agora é ${prefix}money`)
                    
                                        break
                                
                                case 'money':
                                const kantong = checkMoney(sender)
                                      const moneyy = `❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${kantong}`
     reply(moneyy)
                                        break
                                case 'buylimite':
                                        if (args.length < 1) return reply(`Qual é o limite que você quer comprar?\n\ndigite ${prefix}buylimite 1 por exemplo\n\nCertifique-se de ter dinheiro suficiente, mana! \n\nComo verificar dinheiro: .bal`)
                                         
                                        payout = body.slice(10)
                                        const koinPerlimit = 2000
                                        const total = koinPerlimit * payout
                                        if ( checkMoney(sender) <= total) return reply(`desculpe, seu dinheiro não é suficiente. por favor colete e compre mais tarde`)
                                        if ( checkMoney(sender) >= total ) {
                                                confirmMoney(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*PAGAMENTO CONCLUIDO*\n\n*remetente* : Admin\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n *limite de preço* : ${koinPerlimit}/limit\n *o resto do seu dinheiro* : ${checkMoney(sender)}\n\nprocesso bem sucedido com número de pagamento`)
                                        }
                                        break
                                case 'limite':                                        
                                        checkLimit(sender)
                                        break
                                case 'event':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (args.length < 1) return reply('digite 1 para ativar')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*ATIVADO* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./json/event.json', JSON.stringify(event))
                                                reply('*Evento ativo nesse grupo!*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./json/event.json', JSON.stringify(event))
                                                reply('*Evento desativado nesse grupo!*')
                                        } else {
                                                reply('1 para ativar\n0 para desativar')
                                        }
                                        break

                                case 'minerar':
                                         
                                            if (isLimit(sender)) return reply(mess.limitC)
                                        if (!isEventon) return reply(`Desculpe, ${pushname} o evento de mineração está desativado`)
                                        if (isOwner) {
                                                const one = 999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`Pra você *${one}Xp* de presente`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Parabéns!* ${pushname} Você recebeu *${mining}Xp*`)
                                        }
                                        
                                        break
                                 case 'setname':
                          if (args.length < 1) return reply('*Digite o nome que quer dar ao grupo�?*')       
                                        if (!isGroup) return reply(mess.only.group)
			                if (!isGroupAdmins) return reply(mess.only.admin)
			                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        client.groupUpdateSubject(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Sucesso, alterar o nome do grupo', text, {quoted: mek})
				        break
                                case 'setdesc':
                                if (args.length < 1) return reply('*Digite a descrição que quer adicionar ao grupo�?*')
                         if (!isGroup) return reply(mess.only.group)
			                if (!isGroupAdmins) return reply(mess.only.admin)
			                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        client.groupUpdateDescription(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Sucesso, alterar o nome do grupo', text, {quoted: mek})
					break
			       
				






			
 			            			
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Marca uma foto')
					}
					break



				
                    

                  	
				
	
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                    
                   if (isLimit(sender)) return reply(mess.limitC)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Hasil Dari *${body.slice(5)}*`})
                   
                   break

				
				


case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                 
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break



//-------------------------------------------------------------------FIGURINHAS------------------------------------------------------------------------//
			

         case 'missing':		
                            	
	   reply(mess.wait)
            		
       var imgbb = require('imgbb-uploader')
                    
       ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	                
						
                                      
                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)

                        imgtrg = `${anu.display_url}`

				     	anu = await getBuffer(`https://api.zeks.me/api/missing-image?apikey=gaugerkkkxyz&image=${imgtrg}&text1=DESAPARECIDO&text2=LIGUE&text3=5180614158`, {method: 'get'})
		
			     		client.sendMessage(from, anu, image, {quoted: mek, thumbnail: null})
    
					break  



			case 'figulixo':

                           

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        teks = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu8 = (`https://api-exteam.herokuapp.com/api/trash?img=${teks}`)

                        abc = await getBuffer(anu8)

                        client.sendMessage(from, abc, image, {

                            quoted: mek

                        })

                    } else {

                        reply('É necessário usar uma imagem')

                    }

                    break                              

                    

                    case 'figurip':

                           case 'morte':

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        teks = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu8 = (`https://api-exteam.herokuapp.com/api/rip?img=${teks}`)

                        abc = await getBuffer(anu8)

                        client.sendMessage(from, abc, image, {

                            quoted: mek

                        })

                    } else {

                        reply('É necessário usar uma imagem')

                    }

                    break                              

                                            

                 
                

              

                case 'figulgbt':

                    		

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                     case 'figucircle':

               

                    

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                                        

                                      

                case 'figublur':

                    	

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                      

                case 'figupalito':

                    		
                     var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        teks = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/jokeOverHead?apikey=genbotkey&img=${teks}`)

                        abc = await getBuffer(anu8)

                        client.sendMessage(from, abc, image, {

                            quoted: mek

                        })

                    } else {

                        reply('É necessário usar uma imagem')

                    }

                    break                              

                    

                case 'figuface':


                     var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        teks = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/facepalm?apikey=genbotkey&img=${teks}`)

                        abc = await getBuffer(anu8)

                        client.sendMessage(from, abc, image, {

                            quoted: mek

                        })

                    } else {

                        reply('É necessário usar uma imagem')

                    }

                    break                              

                    

                    case 'figuquadro':

             

                     var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        teks = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/beautiful?apikey=genbotkey&img=${teks}`)

                        abc = await getBuffer(anu8)

                        client.sendMessage(from, abc, image, {

                            quoted: mek

                        })

                    } else {

                        reply('É necessário usar uma imagem')

                    }

                    break                              

                    
         
                
                case 'figuwanted':

                    	

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                   

                    case 'figuwasted':

            


                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                  

                case 'figuarma':

                    	

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                    

                case 'figudrip':

                    		
                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/dripp?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                     case 'figuinvert':

      

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                  

                    

                case 'figupreso':

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                  

                case 'figushit':


                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-exteam.herokuapp.com/api/shit?img=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break



  

                case 'figutriggerr':

                  
                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break

                    

                      case 'figupet':               

                    	

                    var imgbb = require('imgbb-uploader')

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                        reply('Estou fazendo, espere')                     

                        owgi = await client.downloadAndSaveMediaMessage(ger)

                        anu = await imgbb("72adccf6aec1173f2065197ab0bf7c9b", owgi)

                        imgtrg = `${anu.display_url}`

                        ranp = getRandom('.gif')

                        rano = getRandom('.webp')

                        anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`

                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                            fs.unlinkSync(ranp)

                            if (err) return reply(`DEU ERROR 😞`)

                            nobg = fs.readFileSync(rano)

                            client.sendMessage(from, nobg, sticker, {

                                quoted: mek

                            })

                            fs.unlinkSync(rano)

                        })

                    } else {

                        reply('Você precisa marcar ou enviar uma imagem para isso')

                    }

                    break
				
				
				
		
	
//-------------------------------------------------------------------------MP4-MP3-----------------------------------------------------------------------//

         
         
         
case 'desligar':
tujuh = fs.readFileSync('./audios/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'say1':
tujuh = fs.readFileSync('./videos/say1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
tujuh = fs.readFileSync('./videos/say2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
tujuh = fs.readFileSync('./videos/mek3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'mek4':
tujuh = fs.readFileSync('./videos/mek4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx1':
tujuh = fs.readFileSync('./videos/xxx1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./videos/xxx2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'teto1':
tujuh = fs.readFileSync('./videos/teto1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit1':
tujuh = fs.readFileSync('./videos/edit1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit2':
tujuh = fs.readFileSync('./videos/edit2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit3':
tujuh = fs.readFileSync('./videos/edit3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit4':
tujuh = fs.readFileSync('./videos/edit4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break					
	
										
																			
	
																		
//------------------------------------------------------------------------------TTT---------------------------------------------------------------------------//
																		
													
		
case 'ttthelp':
		client.sendMessage(from, ttthelp(prefix) , text, {quoted: mek})
                break
case 'ttt':				
if (!isGroup) {
reply('Apenas em Grupos')
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
client.sendMessage(from, `O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, {quoted: gauger})
client.sendMessage(from, `✅1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 120000) 
}
break	
case 'tttme':
if (!isGroup) return reply('Apenas em Grupos')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isGroup) return reply('Apenas em Grupos')
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} ✅\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} ✅\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} ✅\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply('Apenas em grupos')
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`✅1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 *${pushname} GANHOU*🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 *${pushname} GANHOU* 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break



//-------------------------------------------------------------------------LOGOS----------------------------------------------------------------------------//




				case 'marvel':
				if (args.length < 1) return reply(mess.twotxt)
					var gh = body.slice(8)
					var txt1 = gh.split("/")[0];
					var txt2 = gh.split("/")[1];								
					buffer = await getBuffer(`https://api.zeks.me/api/marvellogo?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`, {method: 'get'})
					
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
					break



case 'plaquinha':
					if (args.length < 1) return reply(mess.onetxt)
			
					teks = body.slice(11)
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: 'Ta na mão 😈'})
					break

case 'pmake':
       
                    if (args.length < 1) return reply(mess.onetxt)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈'})
					break
                  case 'pmake2':
                  if (isGroup) return reply('usuário vip nao tem permissao de explanar os comandos no grupo')
			
                    if (args.length < 1) return reply(mess.onetxt)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ighteede.sirv.com/pack%20plaquinha%20%2B18%20BY%20sombrio/pack%20plaquinha%20%2B18%20BY%20sombrio/Screenshot_2021-04-10-22-59-23-1.png?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-39%25&text.0.size=23&text.0.color=000000&text.0.opacity=54&text.0.font.family=Shadows%20Into%20Light`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Toma ai 😈💅 '})
					break
					case 'bpink':
                  if (args.length < 1) return reply(mess.onetxt)
              
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                 
              
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                
                break
			
		case '3dtext':
	
		if (args.length < 1) return reply(mess.onetxt)
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
           
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                
                break


                                   		case 'pornhub':
                          		
 if (args.length < 1) return reply(mess.twotxt)
			    nobg = `${body.slice(9)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			  
			    buffer = await getBuffer(`https://api.zeks.me/api/phub?apikey=gaugerkkkxyz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO �?*'})
			     
					break

			    case 'glogo':
			   
			         if (args.length < 1) return reply(mess.twotxt) 
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO �?*'})
			     
			    break  

                case 'bitext':if (args.length < 1) return reply(mess.onetxt)
					teks = body.slice(7)
			
			
					buffer = await getBuffer(`https://clutamac.sirv.com/images%20-%202021-03-01T221944.000.jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.size=32&text.0.color=003eff&text.0.font.family=PT%20Sans%20Caption&text.0.background.opacity=37&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=32&text.1.color=ff0000&text.1.font.family=PT%20Sans%20Caption&text.1.outline.blur=34&text.1.outline.opacity=10&text.2.text=${teks}&text.2.position.gravity=northwest&text.2.position.x=34%25&text.2.position.y=40%25&text.2.size=33&text.2.color=ffffff&text.2.font.family=PT%20Sans%20Caption`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO �?*'})
					break

        case 'caderno':
           if (args.length < 1) return reply(mess.onetxt)
					nul = body.slice(9)
		
					tak = await getBuffer(`https://api.zeks.me/api/nulis?text=${nul}&apikey=apivinz`)
					client.sendMessage(from, tak, image, {quoted: mek, caption: 'Pronto 🤙'})
									
				break			
			
			   case 'chatlogo':
		if (args.length < 1) return reply(mess.onetxt)
					teks = body.slice(10)
					if (teks.length > 8) return reply('O texto é longo, até 8 caracteres')
				
					buffer = await getBuffer(`https://clutamac.sirv.com/IMG_20210303_050439.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=37%25&text.0.position.y=67%25&text.0.size=17&text.0.color=282222`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO �?*'})
					break

case 'leao':
     if (args.length < 1) return reply(mess.onetxt)
					teks = body.slice(6)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
			
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO �?*'})
					
					break		


					case 'modern':
			      
					if (args.length < 1) return reply(mess.onetxt)
					ligh = body.slice(8)
					if (ligh.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					
					lawak = await getBuffer(`https://api.zeks.me/api/tlight?text=${ligh}&apikey=gaugerkkkxyz`)
			    	client.sendMessage(from, lawak, image, {quoted: mek, thumbnail:null})
			   	 
		  	  break        
         


case 'naruto':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(8)
imagelogo = await getBuffer(`https://api.zeks.me/api/naruto?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break

case 'matrix':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(8)
imagelogo = await getBuffer(`https://api.zeks.me/api/matrix?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break

case 'neon':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(6)
imagelogo = await getBuffer(`https://api.zeks.me/api/bneon?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break


case 'breakwall':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(11)
imagelogo = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break

case 'vidro':
 
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(7)
imagelogo = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break

case 'wolflogo':
 
if (args.length < 1) return reply(mess.twotxt)
gh = body.slice(10)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'crossfire':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(10)
imagelogo = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'flametext':
 
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(11)
imagelogo = await getBuffer(`https://api.zeks.me/api/flametext?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'silktext':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(10)
imagelogo = await getBuffer(`https://api.zeks.me/api/silktext?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 


case 'bokeh':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(7)
imagelogo = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'pubg':
  if (args.length < 1) return reply(mess.twotxt)
txt = body.slice(6)
var teks = txt.split("/")[0];
var teks2 = txt.split("/")[1];
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=pubg`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break

case 'cslogo':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(8)
imagelogo = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'night':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(7)
imagelogo = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 



case 'inverno':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(9)
imagelogo = await getBuffer(`https://api.zeks.me/api/crismes?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'snow':
  
if (args.length < 1) return reply(mess.twotxt)
gh = body.slice(6)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/snowwrite?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'pinkpaper':
  
if (args.length < 1) return reply(mess.twoxt)
gh = body.slice(11)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/watercolour?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'spark':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(7)
imagelogo = await getBuffer(`https://api.zeks.me/api/tfire?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'beach':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(7)
imagelogo = await getBuffer(`https://api.zeks.me/api/sandw?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'fogolivre':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(11)
imagelogo = await getBuffer(`https://api.zeks.me/api/epep?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 


case 'ytgolden':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(10)
imagelogo = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 


case '3dtextb':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(9)
imagelogo = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=gaugerkkkxyz&text=${texto}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'avengers':
  
if (args.length < 1) return reply(mess.twotxt)
gh = body.slice(10)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/logoaveng?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)

client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'texto3d2':
  
if (args.length < 1) return reply(mess.onetxt)
texto = body.slice(10)
imagelogo = await getBuffer(`https://api.zeks.me/api/text3d?apikey=gaugerkkkxyz&text=${texto}`)
client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 

case 'phlogo':
  
if (args.length < 1) return reply(mess.twotxt)
gh = body.slice(8)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/phlogo?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)
client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break 


case 'glitch':
  
if (args.length < 1) return reply(mess.twotxt)
gh = body.slice(8)
var txt1 = gh.split("/")[0];
var txt2 = gh.split("/")[1];
imagelogo = await getBuffer(`https://api.zeks.me/api/gtext?apikey=gaugerkkkxyz&text1=${txt1}&text2=${txt2}`)
client.sendMessage(from, imagelogo, image, {quoted: mek, thumbnail: null, caption: 'tá na mão'})
break  


case 'glitch1':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(8)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'glitch2':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(9)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch2?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'toxic':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(6)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break

case 'transformer':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
                      case 'graffiti':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(9)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
                     
case 'thunder':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(9)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'harrypotter':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/harrypotter2?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break

case 'neon3d':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(7)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon3d?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'horrorblood':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/horror-blood?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'neondevil':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon-devil?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'graffiti2':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/wonderful-graffiti?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
                      case 'dropwater':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
                      case 'glow':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(6)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/advanced-glow?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'captainamerica':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(15)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/captain-america?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
case 'jokerlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/jokerlogo?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break
              /*        case 'marvel':
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(7)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/marvel?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: mek, thumbnail:null})
                      break */
                      case 'space':
                      team = body.slice(6)
                      teks1 = team.split("|")[0];
                      teks2 = team.split("|")[1];
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/space-3d?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break
           /*           case 'lavatext':
                      team = body.slice(9)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/lava-text?apikey=apiteam&texto1=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break */
                      case 'magma':
                      team = body.slice(6)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/magma-text?apikey=apiteam&texto=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break
                      case 'matrix':
                      team = body.slice(7)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/matrix-text?texto=${team}&apikey=apiteam`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break
                      case 'breakwall':
                      team = body.slice(11)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/break-wall?apikey=apiteam&texto=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break
           /*           case 'avengers':
                      team = body.slice(10)
                      teks1 = team.split("|")[0];
                      teks2 = team.split("|")[1];                  
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/avengers-logo?texto1=${teks1}&texto2=${teks2}&apikey=apiteam`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: mek, thumbnail: null})
                      break
*/
//---------------------------------------------------------------IMAGENS-ANIME----------------------------------------------------------------------//



          
           case 'animeneko':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: null})
           
           break


       
	case 'animewaifu':
           data = await fetchJson('https://waifu.pics/api/sfw/waifu')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: null})
           
           break					



	case 'smile':
           data = await fetchJson('https://waifu.pics/api/sfw/smile')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
                             client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif',duration:10, thumbnail: null})
           
           break					

	case 'hug':
           data = await fetchJson('https://waifu.pics/api/sfw/hug')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
                  client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif',duration:10})
           
           break	
           
           				
        
	case 'cry':
           data = await fetchJson('https://waifu.pics/api/sfw/cry')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
               client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif',duration:10, thumbnail: null})
           
           break					
   					
   			
	case 'kiss':
           data = await fetchJson('https://waifu.pics/api/sfw/kiss')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
              client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif',duration:10, thumbnail: null})
           
           break	
//client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
       
	case 'lick':
           data = await fetchJson('https://waifu.pics/api/sfw/lick')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif', thumbnail: null})
           
           break																													
			
			    
			            case 'nekonime':
					      
                                       if (isLimit(sender)) return reply(mess.limitC)
					anu = await fetchJson(`https://mhankbarbar.herokuapp.com/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek, thumbnail: null})
                                        
					break
		
		case 'nekofig':
		if (isLimit(sender)) return reply(mess.limitC)
							cry = getRandom('.gif')

					rano = getRandom('.webp')

					anu = await fetchJson(`https://mhankbarbar.herokuapp.com/api/nekonime`, {method: 'get'})
               
				
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

						fs.unlinkSync(cry)

						buffer = fs.readFileSync(rano)

						client.sendMessage(from, buffer, sticker, {quoted: mek})

						fs.unlinkSync(rano)
						})
											
					
		
		break



//----------------------------------------------------------------------ANIME+18-------------------------------------------------------------------------//




     case 'sexyloli':	
     if (!isNsfw) return reply(mess.only.nsfw)
      if (isLimit(sender)) return reply(mess.limitC)
				 data = fs.readFileSync('./src/nsfwloli.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted:mek, thumbnail: null})
                			
					break 
		
					
								
					case 'waifu':
				     if (!isNsfw) return reply(mess.only.nsfw)	
           data = await fetchJson('https://waifu.pics/api/nsfw/waifu')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: null})
           
           break						
														
																	
			case 'blowjob':
			     if (!isNsfw) return reply(mess.only.nsfw)
           data = await fetchJson('https://waifu.pics/api/nsfw/blowjob')            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
                             client.sendMessage(from, hasil, MessageType.video, {quoted: mek, mimetype: 'video/gif',duration:10, thumbnail: null})
           
           break																	
																							
				
			case 'neko':
			     if (!isNsfw) return reply(mess.only.nsfw)			  
           data = await fetchJson('https://waifu.pics/api/nsfw/neko')            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: null})
           
           break																
																	
			case 'trap':
			     if (!isNsfw) return reply(mess.only.nsfw)
           data = await fetchJson('https://waifu.pics/api/nsfw/trap')            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, thumbnail: null})
           
           break										
													
	
				
			
																				
	
																
																				
																			
																
																				
																						
			default:
			
			
			
			
			
			
			
			
	/*				
	
	
	
	      if (body.startsWith(`!${command}`)){    
                reply(`*Olá ${pushname}!!*\n*Não encontrei O comando:* *${prefix}${command}*\n*Digite ${prefix}menu para ver a lista completa dos meus comandos*`)/*Vou baixar uma imagem se eu achar...*`)
 data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {quoted: gauger, thumbnail: null, caption: `Achei isso sobre: ${command}`})              
       }      */                                                                             	

if (budy.startsWith('-')){
if (!isOwner) return reply('somente meu criador')
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(1)),null,'\t'),MessageType.extendedText, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}


/*	if (budy.startsWith('€')){
if (!isOwner) return reply('somente meu criador')
var konsol = budy.slice(2)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}}
*/


      if (msgReceived == "bot corno") {
        client.updatePresence(from, Presence.composing);
        reply("kkk ignorei");
      }
      
      if (msgReceived == "bot") {
        client.updatePresence(from, Presence.composing);
        reply("ooi ;)");
      }
      
     
       if (msgReceived == "bot fdp") {
        client.updatePresence(from, Presence.composing);
        reply("kkk fodase vc");
      } 
          
            if (msgReceived == "bot burro") {
        client.updatePresence(from, Presence.composing);
        reply("k");
      }
      
            if (msgReceived == "bot inutil") {
        client.updatePresence(from, Presence.composing);
        reply("pelo menos eu não sou corno");
      }
      
            if (msgReceived == "bot ruim") {
        client.updatePresence(from, Presence.composing);
        reply("vou fingir que ligo pra sua opinião😂😂");
       } 
      
            if (msgReceived == "bot gostoso") {
        client.updatePresence(from, Presence.composing);
        reply("você, sua gasosaa🥵🥵❤️");
      }
      
            if (msgReceived == "te amo bot") {
        client.updatePresence(from, Presence.composing);
        reply("Obgdo, tbm te amo rs");
      }      

      if (msgReceived == "bom dia") {
        client.updatePresence(from, Presence.composing);
        reply("Bomm dia😎")
        client.sendMessage(from, `fs.readFileSync('./figurinhas/bomdia.webp')` ,sticker, {quoted: mek})
      }
            if (msgReceived == "Bot, vc me ama?") {
        client.updatePresence(from, Presence.composing);
        reply("te amo na amizade");
      }
      
            if (msgReceived == "vc me ama?") {
        client.updatePresence(from, Presence.composing);
        reply("te amo na amizade");
      }      
      
                  if (msgReceived == "vc me ama bot?") {
        client.updatePresence(from, Presence.composing);
        reply("te amo na amizade");
      }      
      
                  if (msgReceived == "oi bot") {
        client.updatePresence(from, Presence.composing);
        reply("hey hey");
      }
      
                  if (msgReceived == "tudo bem?") {
        client.updatePresence(from, Presence.composing);
        reply("Eu to bemm, e vc?🧐");
      }
      
                 if (msgReceived == "vou dormir") {
        client.updatePresence(from, Presence.composing);
        reply("Okk, bons sonhos amigo(a)😴💫");
      }
      
                  if (msgReceived == "te amo bot") {
        client.updatePresence(from, Presence.composing);
        reply("obrigado");
      }

           if (msgReceived == "vlw bot") {
        client.updatePresence(from, Presence.composing);
        reply("de nada😴");
      }
      
                 if (msgReceived == "obg bot") {
        client.updatePresence(from, Presence.composing);
        reply("de nada😴");
      }
      
            if (msgReceived == "me mama") {
        client.updatePresence(from, Presence.composing);
        reply("depende, vose é menina? K");
      }

          if (msgReceived == "que isso") {
        client.updatePresence(from, Presence.composing);
        reply("numzei");
      }
      
		
	
/*			if (messagesC.includes("lindo")){
    		client.updatePresence(from, Presence.composing)
	      	     client.sendMessage(from, 'obg mor', text, { quoted: gauger, contextInfo: {forwardingScore: 508, isForwarded: true}})		
    }
    
      if ((budy === "ajuda") || (budy === "bot") || (budy === "Bot") || (budy === "Ajuda")) {
gambar = fs.readFileSync('./logos/.fkreply.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
gbutsan = [
  {buttonId: 'Comandos 👩‍💻', buttonText: {displayText: 'Comandos 👩‍💻'}, type: 1}]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `*${ucapanFakereply} @${sender.split("@s.whatsapp.net")[0]}*`,
    footerText: 'Aperte o botão menu para ver todos os meus comandos, ou caso seja sua primeira vez, clique no botão registrar para efetuar seu registro automaticamente e liberar o menu',
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./logos/.fkreply.jpg'),
        caption: 'kkk'})
}
		
*/
	if (messagesC.includes("!menu")){
logo = fs.readFileSync('./logos/.menu.jpg')
xyz = await client.prepareMessage(from, logo, MessageType.image, {thumbnail:null})
const buttons = [{
                    "buttonId": 'registro', 
                    "buttonText": {
                        "displayText": "registrar📍"
                    },
                    "type": "RESPONSE"
                }]
buttonsMessage = {
imageMessage: xyz.message.imageMessage,
contentText: `*Clique no botão registrar, e então aproveite o bot ;)\n\n${gaugerxyz}`,
footerText: `by gauger`,
buttons,headerType: 4
}
await client.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./logos/.menu.jpg'),
        caption: 'kkk'})
}


/*prep = await client.prepareMessageFromContent(from, { buttonsMessage }, {})
client.relayWAMessage(prep)
}
*/
if (buttonsRM === 'menu✅') {
if (!isUser) return reply(`❌Usuário não registrado, por favor, faça seu registro com o comando ${prefix}registrar ou clique no botão registrar📍❌`)  
           
                    
          
             client.sendMessage(from, gaugerxyz, text, { quoted: gauger, contextInfo: {forwardingScore: 508, isForwarded: true}})		
                   
}

if (buttonsRM === 'registrar📍') {
      if (isUser) return reply('✅Você já está registrado✅')
                    const serialUser = createSerial(20)                
 
                    veri = sender
                    try {
                        ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                        ppimg = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'
                    }
                    captionnya =
                        `    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╔════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de registro: ${pushname}
╠≽️ Seu link wame: https://wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚════════════════
você se registrou, digite ${prefix}menu para listar meus comandos`
                    daftarimg = await getBuffer(ppimg)
                    addRegisteredUser(sender, `${pushname}`, time, serialUser)
                    client.sendMessage(from, captionnya, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: [sender]
                         }})}



/* LISTA COM FOTO
if (messagesC.includes("lista2")){	
logo = fs.readFileSync('./logos/menu.jpg')
xyz = await client.prepareMessage(from, logo, MessageType.image)		
 rows = [
 {title: 'n sei', description: '', rowId:"rowid1"},
 {title: 'n sei', description: '', rowId:"rowid2"}
]

 sections = [{title: "by gaugerr kk", rows: rows}]

 listMessage = {
imageMessage: xyz.message.imageMessage,
 buttonText: 'Clique Aqui',
 description: "...",
 sections: sections,
 listType: 4
 }
 
await client.sendMessage(from, listMessage, MessageType.listMessage, {
        thumbnail: fs.readFileSync('./logos/menu.jpg'),
        caption: 'kkk'})
}  /*
 prep = await client.prepareMessageFromContent(from, { listMessage }, {})
client.relayWAMessage(prep)
}
*/



  if (messagesC.includes("!modos")) {             

 rows = [
 {title: 'Ativar Antifake✅', rowId:"antifake1"},
 {title: 'Desativar Antifake❌', rowId:"antifake0"}
 ]
 rows1 = [
 {title: 'Ativar Antilink✅', rowId:"antilink1"},
 {title: 'Desativar Antilink❌', rowId:"antilink0"}
 ]
 rows2 = [
 {title: 'Ativar Leveis✅', rowId:"leveis1"},
 {title: 'Desativar Leveis❌', rowId:"leveis0"}
 ]
 rows3 = [
 {title: 'Ativar Boas Vindas✅', rowId:"bv1"},
 {title: 'Desativar Boas Vindas❌', rowId:"bv0"} 
]



sections = [
{title: "Antifake: só permite números +55 de entrarem no grupo", rows: rows},
{title: "Antilink: da ban em quem enviar links de grupos/tiktok/kwai", rows: rows1},
{title: "Leveis: ativa o sistema de leveis/xp/patente", rows: rows2},
{title: "Boas Vindas: mensagem quando alguém sai/entra no grupo", rows: rows3}
 ]

listMessage = {
 buttonText: 'Clique aqui',
 description: "*❎ Modos ✅*",
 sections: sections, 
 listType: 1
 }
 await client.sendMessage(from, listMessage, MessageType.listMessage)
}


    if (listRM.includes("leveis1")){
    
                   if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply('so adm pd usar')           
                        if (isLevelingOn) return reply('❎O recurso LEVEIS já está ativado no grupo❎')

                        leveling.push(from)

                        fs.writeFileSync('./json/leveling.json', JSON.stringify(leveling))

                        reply('✅O recurso LEVEIS foi ativado✅')
                        }

                   
                    
if (listRM.includes("leveis0")){
    
             if (!isLevelingOn) return reply('❎O recurso LEVEIS não está ativado no grupo❎')
                        let position = false
                        Object.keys(leveling).forEach((i) => {
                            if (leveling[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            leveling.splice(position, 1)
                            fs.writeFileSync('./json/leveling.json', JSON.stringify(leveling))
                        }
                        reply('❌O recurso LEVEIS foi desativado❌')
                        }

if (listRM.includes("antilink1")){

	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
						antilink.push(from)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Grupo anti-link ativado com sucesso neste grupo ✔️')
						}
						
						
	if (listRM.includes("antilink0")){
    
    					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)							
						if (!isantilink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
}

						
	if (listRM.includes("antifake1")){

	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)				
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
						}
						
						if (listRM.includes("antifake0")){
    
    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)			
	 					if (!isAntiFake) return reply('Já está desativado')
						antifake.splice(from, 1)
						fs.writeFileSync('./json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
 				}


					if (listRM.includes("bv1")){
    
    if (!isGroup) return reply(mess.only.group)
						if (isWelkom) return reply('o recurso está ativo')
						welkom.push(from)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('bv foi ativado nesse grupo')
						}
						
						
					if (listRM.includes("bv0")){
    
    if (!isGroup) return reply(mess.only.group)
						if (!isWelkom) return reply('o recurso não stá ativo')
						welkom.splice(from) // disable)
						fs.writeFileSync('./json/welkom.json', JSON.stringify(welkom))
						reply('bv foi desativado nesse grupo')
					}


if (listRM.includes("!play")) {
            reply('Baixando.. aguarde 🥃')
                const ytbt = args.join(" ")
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=gaugerkkkxyz&q=${ytbt}`)
                 infomp3 = `𒊹︎︎︎𝐄𝐍𝐕𝐈𝐀𝐍𝐃𝐎 𝐒𝐔𝐀 𝐌𝐔𝐒𝐈𝐂𝐀 𝐀𝐆𝐔𝐀𝐑𝐃𝐄🎬`
if (anu.error) return reply('deu erro bro')
if (anu.duration > 1) return reply('Teste de limite de duração')
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                client.sendMessage(from, lagu, MessageType.audio, { mimetype: Mimetype.mp4Audio, filename: `audio.mp3`, duration:999, quoted: { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "555196741133-1490367661@g.us" } : {}) }, message: { 'imageMessage': { 'caption': `⎇ ${anu.result.title}\n`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)} } }, ptt:true})
}


	/*
if (example == 'example 2') {
reply('test')
}
		 const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await cash.sendMessage(from, buttonMessage, MessageType.buttonsMessage)	
			*/
	
	
	
				if (messagesC.includes("puta")){
			client.updatePresence(from, Presence.composing)
			reply("eita")
	}
	
			if (messagesC.includes("vadia")){
			client.updatePresence(from, Presence.composing)
			reply("feio, fala essa palavra machista aqui não")
	}
	
		if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q é mo bom")
	}
	
		
		if (messagesC.includes(".menu")){
			client.updatePresence(from, Presence.composing)
			reply("oi mn, meu prefixo agr é !")
	}
	
		if (messagesC.includes("/menu")){
			client.updatePresence(from, Presence.composing)
			reply("oi mn, meu prefixo agr é !")
	}
	
		if (messagesC.includes("vsfd")){
			client.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
			if (messagesC.includes("fofo")){
			client.updatePresence(from, Presence.composing)
			reply("Owwn obgdo limda(o)")
	}	
	
	
	
           //Audios 
     if (messagesC.includes("dolar")){
     client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./videos/dolar.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
}
	      
    
     
                  if (messagesC.includes("fodase")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/lambe.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}      
           
              if (messagesC.includes("03v29g")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/03v29g25eG.mp3');
            replyA(tujuh)
	}
	
	           if (messagesC.includes("geme")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/gemido.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	        
           
                  if (messagesC.includes("nya")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/nya.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	
		if (messagesC.includes("yamete")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/yamete.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}    
          
	
	           if (messagesC.includes("baka")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/baka.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
		if (messagesC.includes("lalala")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/lalala.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

           if (messagesC.includes("onich")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/onich1.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
		if (messagesC.includes("eaii")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/eai.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("buceta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/bct.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messagesC.includes("yasminn")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/yasmin.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
		if (messagesC.includes("grita")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/grita.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
				if (messagesC.includes("glub")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/glub.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("bem?")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/bem.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("r34")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/r34.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("dormir")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/dormir.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./audios/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		

     
      if (messagesC.includes("petra")) {
                 data = await fetchJson('https://waifu.pics/api/sfw/waifu')
            
           if (isLimit(sender)) return reply(mess.limitC)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, caption:';)', thumbnail: null})
           
}

      
              if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link de grupo!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
	              if (messagesC.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link de grupo!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
	              if (messagesC.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link de grupo!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
	
	////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isCmd) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

	
	
	      /*                  if (isGroup && isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = mek
                      const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
                        }
                        
                        if ((isGroup && isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
                            const encmedia = mek					
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait) 
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
                           fs.unlinkSync(media)
                        }
	
	
		if (isGroup && isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if (isGroup && isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)   {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait) 
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} 
					*/
	
                        
	
}
		} catch (e) {
			console.log(color(e, 'red'))
		}  
	}) 
}
starts()


			