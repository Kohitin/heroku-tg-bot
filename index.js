const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '709984375:AAERNDcsMm5Qz1yYCt5VtX-IP6jTPKAc6c4'
const bot = new TelegramBot(TOKEN, {polling: true})
bot.on('message', msg => {bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says: "Hi, ${msg.from.first_name}"`)
})