const TelegramBot= require('node-telegram-bot-api');

const Token= "7600385555:AAEMVe8Sl5j7q9fZ9DYp98hlIL6lY0_EBSc";

const bot =new TelegramBot(Token,{polling:true});


bot.onText(/\/start/,(msg)=>{
    chatId=msg.chat.id;
    const userName=msg.from.first_name||"user";

    bot.sendMessage(chatId,`Welcome , ${userName}! Tap the button to earn coin.`)
})