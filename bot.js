require('dotenv').config();

const TelegramBot= require('node-telegram-bot-api');

const BOt_Token= process.env.TOKEN;;

const bot =new TelegramBot(BOt_Token, { webHook: { port: process.env.PORT||8843 } });
bot.setWebHook(`https://telbot.onrender.com/bot${BOt_Token}`);



bot.onText(/\/start/,(msg)=>{
    chatId=msg.chat.id;
    const userName=msg.from.first_name||"user";

    bot.sendMessage(chatId,`Welcome , ${userName}! Tap the button to earn coin.`)
})