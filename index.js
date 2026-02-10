const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'https://miaww.falixsrv.me', 
        port: 20164, 
        username: 'BIAWAK',
        version: '1.20.10' 
    })

    bot.on('login', () => console.log('Bot masuk!'))
    bot.on('spawn', () => {
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 45000)
    })
    bot.on('end', () => setTimeout(createBot, 10000))
    bot.on('error', (err) => console.log(err))
}
createBot()
