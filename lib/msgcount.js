const fs = require('fs')
const mek = mek.messages.all()[0] 
const from = mek.key.remoteJid
const msg = JSON.parse(fs.readFileSync(`./json/mensagens/${from}.json`))


const addUser = (sender) => {
                const obj = {id: sender, mensagens : 0}
            msg.push(obj)
            fs.writeFileSync(`./json/mensagens/${from}.json`, JSON.stringify(msg))
        }

        const addMsg = (sender) => {
            let position = false
            Object.keys(msg).forEach((i) => {
                if (msg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                msg[position].mensagens += 1
                fs.writeFileSync(`./json/mensagens/${from}.json`, JSON.stringify(msg))
            }
        }
        
        const getUserId = (sender) => {
            let position = false
            Object.keys(msg).forEach((i) => {
                if (msg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return msg[position].id
            }
        }
        
        const getUserMsg = (sender) => {
            let position = false
            Object.keys(msg).forEach((i) => {
                if (msg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return msg[position].mensagens
            }
        }
                             
module.exports = {
   addUser,
   addMsg,
   getUserId,
   getUserMsg,
   }