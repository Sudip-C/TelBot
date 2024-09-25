require('dotenv').config();

const TelegramBot= require('node-telegram-bot-api');

const BOt_Token= process.env.TOKEN;;

const bot =new TelegramBot(BOt_Token,{polling:true});


bot.onText(/\/start/,(msg)=>{
    chatId=msg.chat.id;
    const userName=msg.from.first_name||"user";

    bot.sendMessage(chatId,`Welcome , ${userName}! Tap the button to earn coin.`)
})