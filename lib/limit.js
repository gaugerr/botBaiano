const fs = require('fs')
const limit = JSON.parse(fs.readFileSync('./json/limit.json'))

const payLimit = (sender, amount) => {
                let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount
                fs.writeFileSync('./json/limit.json', JSON.stringify(limit))
            }
        }

        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit += 1
                fs.writeFileSync('./json/limit.json', JSON.stringify(limit))
            }
        }
        
                const addLimit = (mentioned) => {
             let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == mentioned) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= 10000
                fs.writeFileSync('./json/limit.json', JSON.stringify(limit))
            }
        }
        
        const removeLimit = (mentioned) => {
             let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == mentioned) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit += 10000
                fs.writeFileSync('./json/limit.json', JSON.stringify(limit))
            }
        }     

      
          const checkLimit = (sender) => {
                let found = false
                    for (let lmt of limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`*${pushname}*, vc não pode mais usar o bot não KKKKK🤪🤪🤑`, text,{ quoted: mek})
                            const limitC = `*「 LIMITE DA CONTA 」*
Seu limite restante : ${limitCounts}`
                            client.sendMessage(from, limitC, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        limit.push(obj)
                        fs.writeFileSync('./json/limit.json', JSON.stringify(limit))
                        client.sendMessage(from, limitC, text, { quoted : mek})
                    }
                                }


           const isLimit = (sender) =>{
                      let position = false
              for (let i of limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
            
                    return true
              } else {
                limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                limit.push(obj)
                fs.writeFileSync('./json/limit.json',JSON.stringify(limit))
           return false
       }
     }
     
module.exports = {
    payLimit,
    limitAdd,
    addLimit,
    removeLimit,
    checkLimit,
    isLimit
}