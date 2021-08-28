const fs = require('fs')
const crypto = require('crypto')

const registered = JSON.parse(fs.readFileSync('./json/registered.json'))

const getRegisterTime = (sender) => {
            let position = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return registered[position].time
            }
        }

/*const getRegisterAge = (sender) => {
            let position = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return registered[position].age
            }
        }  */
        
  const getRegisterSerial = (sender) => {
            let position = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return registered[position].serial
            }
        }
        
const getRegisterName = (sender) => {
            let position = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return registered[position].name
            }
        }
        
const getRegisterNo = (sender) => {
            let position = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return registered[position].id
            }
        }
        
const getRegisteredRandomId = () => {
            return registered[Math.floor(Math.random() * registered.length)].id
        }

const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender, time: time, serial: serials }
            registered.push(obj)
            fs.writeFileSync('./json/registered.json', JSON.stringify(registered))
        }

const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(registered).forEach((i) => {
                if (registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

module.exports = {
	getRegisterTime,
	//getRegisterAge,
	getRegisterSerial,
	getRegisterName,
	getRegisterNo,
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser,
}