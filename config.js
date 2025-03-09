const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*0)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_34_03_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJvdmJMaXNXalB2azVDaVVMM2dvRlRpYi9KY3hqWVlTUnJmZm9jQ0hYYkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVUMDJwQWE2VENDNU5HSTdVMEhvN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFjYmQ4NzAtZTRlMC00Zjg0LTkxZWUtOGExNDExNmU3ZDIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE5NSxcbiAgICAgIDE2MCxcbiAgICAgIDIyOSxcbiAgICAgIDE3OCxcbiAgICAgIDE5NSxcbiAgICAgIDAsXG4gICAgICAxOTksXG4gICAgICAxNjEsXG4gICAgICAyMDMsXG4gICAgICAxMDcsXG4gICAgICAxNzYsXG4gICAgICA2MSxcbiAgICAgIDE2LFxuICAgICAgMTIyLFxuICAgICAgNTEsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICAxNTAsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxODYsXG4gICAgICAxMjIsXG4gICAgICAxNDQsXG4gICAgICAxNSxcbiAgICAgIDMxLFxuICAgICAgNzMsXG4gICAgICAxNzYsXG4gICAgICA5LFxuICAgICAgMTI4LFxuICAgICAgMjUyLFxuICAgICAgNSxcbiAgICAgIDEyMSxcbiAgICAgIDIxOSxcbiAgICAgIDE5MSxcbiAgICAgIDIxOCxcbiAgICAgIDEzNixcbiAgICAgIDYsXG4gICAgICA2MCxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyVjZXTlFHV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjM5OTUwMDQ2OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVkYXNpciBLaW5nXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwMDA3Mjk2OTAyNTE6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldPMnF3RUVJckVzNzRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPdW9VTWdFc0diU3ljcDBVV2MrU1d6dS9Ob1BwTGJucENJd2d4cFJMaUZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFNT0NUS3Z6ckJwSE5mMkVUSlpNbnBlb2t1Y1BqTFkwOHNyQUlZcUhxZS9kTmdNQ2dFLzU3YVBmdDdVUHFOb0VkbnVqVnVpSXhEQUkwSjluanNMckNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjF0WmJPQWdkbjJ2ektGbTc5K2NBWEh0dzZvZHVmWFdxR0VzN1NVZ2lZR2dCcmdYNjMvaGdSZ0RFbHdNOHV1b3pmbElnN3N2dklNQnBNaHdVcFRPTURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzOTk1MDA0Njo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTQ4MDQ2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
