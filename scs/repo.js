const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
      *𝗣𝗢𝗣𝗞𝗜𝗗 𝗠𝗗 𝗜𝗡𝗙𝗢* 
❒───────────────────❒
*𝗚𝗜𝗧𝗛𝗨𝗕 𝗟𝗜𝗡𝗞*
🚒 https://github.com/Popkiddevs/NORMAL-BOT-MD

*𝗠𝗬 𝗖𝗛𝗔𝗡𝗡𝗘𝗟*
🚒 https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l
⁠
▄▀▄▀▄▀[𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐁𝐎𝐓]▄▀▄▀▄▀
°⭕⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
°👼 *DEV1* : *𝗣𝗢𝗣𝗞𝗜𝗗⭕*
°🧯 *DEV2* : *𝗣𝗢𝗣𝗞𝗜𝗗*
███▓▒░░.[𝐏𝐎𝐏𝐊𝐈𝐃 𝐌𝐃].░░▒▓███
  `;
    
let menuMsg = `
     *𝗣𝗢𝗣𝗞𝗜𝗗 𝗧𝗘𝗖𝗛*

███▓▒░░.[𝐅𝐎𝐑𝐊 𝐀𝐍𝐃 𝐒𝐓𝐀𝐑].░░▒▓███`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 


/*const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "git", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *BMW MD IMPORTANT INFO* 
❒───────────────────❒
*GITHUB LINK*
> https://github.com/ibrahimaitech/BMW-MD

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠
╭───────────────────❒
│❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *DEV* : *Ibrahim Adams*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     𝑰𝑩𝑹𝑨𝑯𝑰𝑴 𝑨𝑫𝑨𝑴𝑺 𝑺𝑪𝑰𝑬𝑵𝑪𝑬

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});*/
