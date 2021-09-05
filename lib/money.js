const fs = require('fs')

const money = JSON.parse(fs.readFileSync('./json/money.json'))


const addATM = (sender) => {
                const obj = {id: sender, money : 0}
            money.push(obj)
            fs.writeFileSync('./json/money.json', JSON.stringify(money))
        }

        const addMoney = (sender, amount) => {
            let position = false
            Object.keys(money).forEach((i) => {
                if (money[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                money[position].money += amount
                fs.writeFileSync('./json/money.json', JSON.stringify(money))
            }
        }
        
        const payMoney = (sender, amount) => {
            let position = false
            Object.keys(money).forEach((i) => {
                if (money[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                money[position].money -= amount
                fs.writeFileSync('./json/money.json', JSON.stringify(money))
            }
        }

        const checkMoney = (sender) => {
                let position = false
            Object.keys(money).forEach((i) => {
                if (money[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return money[position].money
            }
        }
        
           const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(money).forEach((i) => {
                if (money[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                money[position].money -= amount
                fs.writeFileSync('./json/money.json', JSON.stringify(money))
            }
        }

module.exports = {
   addATM,
   addMoney,
   payMoney,
   checkMoney,
   confirmATM
}