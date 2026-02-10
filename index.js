const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'IP_FALIX_KAMU', 
        port: 25565, 
        username: 'BotAFK_24Jam',
        version: '1.20.1' 
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
