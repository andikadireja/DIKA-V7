
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
    owner: 'π΅πΈπππ πΊπ·ππππ πΎππ½π΄π π±πΎπ :π ππ΄π»π°πΈπ½ πΎππ½π΄π ? ππΊπΈπΏ',
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
