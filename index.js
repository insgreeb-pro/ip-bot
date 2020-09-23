const TelegramBot = require("node-telegram-bot-api");
const {
  getIP,
  toText
} = require('./ip')

const token = process.env.BOT_TOKEN || "";

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/ip/, (msg, _) => {
  const chatId = msg.chat.id;

  const ip = getIP()
  bot.sendMessage(chatId, toText(ip));
});