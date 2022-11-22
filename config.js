
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6285770575380']
global.packname = 'Dikaa'
global.author = 'Dikaa'
global.sessionName = 'Dikaa'
global.prefa = ['','!','.','#']
global.ownername = 'DIKAA CHANNEL'
global.sp = '>'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃 :𝚅 𝚂𝙴𝙻𝙰𝙸𝙽 𝙾𝚆𝙽𝙴𝚁 ? 𝚂𝙺𝙸𝙿',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_TUNGGU 100 TAHUN SU.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
