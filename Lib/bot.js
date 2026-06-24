const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/AbdullahMDofficial/ABDULLAH-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/AbdullahMDofficial/ABDULLAH-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Abdullah-MD/ABDULLAH-MD",
REPO_NAME: process.env.REPO_NAME || "ABDULLAH-MD",
BOT_NAME: process.env.BOT_NAME || "ABDULLAH-MD",
DESCRIPTION: process.env.DESCRIPTION || "ABDULLAH MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923229309266",
OWNER_NAME: process.env.OWNER_NAME || "AbdullahMD Official",
ST_SAVE: process.env.ST_SAVE || "ABDULLAH-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "ABDULLAH-MD-BY-ABDULLAHMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY ABDULLAH-MD`* _*POWERD BY*_ *ABDULLAHMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "ABDULLAH-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ ABDULLAH-MD BY ABDULLAH-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363427268904704@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbCWxb75Ui2ghzk8wR1O",
INSTA: process.env.INSTA || "https://www.instagram.com/m_abdullah7156",
ALIVE_IMG: process.env.ALIVE_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
AI_IMG: process.env.AI_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
GROUP_IMG: process.env.GROUP_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
FUN_IMG: process.env.FUN_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg",
PP_IMG: process.env.PP_IMG || "https://mhcloud.kesug.com/images/abdullahpic.jpg"
};
