require('dotenv').config();

const TelegramBot= require('node-telegram-bot-api');

const Token= process.env.TOKEN;;

const bot =new TelegramBot(Token,{polling:true});


bot.onText(/\/start/,(msg)=>{
    chatId=msg.chat.id;
    const userName=msg.from.first_name||"user";

    bot.sendMessage(chatId,`Welcome , ${userName}! Tap the button to earn coin.`)
})