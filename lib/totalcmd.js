const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./json/totalcmd.json'))

/**
 * for add total command
 * @params {direktori} 
 * dah lah
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./json/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}