const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=VIIxyRYC#gnTjHnJnOd1COuDlxoBs8xCii2yM7TzPNbi4TYpBiS8", // session id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true,false
ANTI_DELETE: process.env.ANTI_DELETE || "true", // true,false
MODE: process.env.MODE || "public", // public,private,groups,inbox
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "false", // true,false
LANG: process.env.LANG || "EN",





};
