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
global.caption = process.env.CAPTION || global.caption || "MUDASIR SPORTS 76" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923239956476";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92323995046";




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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_45_03_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzWlczMlRtaHgxenN2SHhwd1M5U3JmS1EyVkZDL3ZreWl5TkhIUWFNTTMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnb3RHS21aVVJOT3VoaUl5cTNJWWl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNjODY2ODFmLTVlM2EtNDEyZC04M2RkLTlhNWJhZGEzNzUyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxNzgsXG4gICAgICAxOTEsXG4gICAgICA1NCxcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMjUxLFxuICAgICAgMjEsXG4gICAgICAxOTMsXG4gICAgICAxMzIsXG4gICAgICAyNDQsXG4gICAgICAyMzQsXG4gICAgICAxMixcbiAgICAgIDE2NyxcbiAgICAgIDE0NixcbiAgICAgIDY3LFxuICAgICAgMTc4LFxuICAgICAgMjA0LFxuICAgICAgMTE4LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMjEsXG4gICAgICAxNTQsXG4gICAgICA5OCxcbiAgICAgIDEzNCxcbiAgICAgIDEzNCxcbiAgICAgIDYsXG4gICAgICAxNjEsXG4gICAgICAyMjMsXG4gICAgICA3NyxcbiAgICAgIDEzMyxcbiAgICAgIDIyLFxuICAgICAgMTUxLFxuICAgICAgMTY3LFxuICAgICAgMjE5LFxuICAgICAgNzksXG4gICAgICA0MyxcbiAgICAgIDI0MyxcbiAgICAgIDk2LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNTVjMyWjlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyMzk5NTAwNDY6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjAwMDcyOTY5MDI1MTo3NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbkp0ZThIRU8yMDhyNEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRxYjlkd01aRCtSclNOWUFIclh3elh4L2FOVm4wQVkwdjlGeGF5b28wVkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHdtT2hVaG1PVFlJOEE3MUNsSU4vdXhTcXZXWUNUME5jeUUyK3dnclhDVlpRb25INlp2OFFwUXlkenprTXJZbndyUlpKQnBSY1ladjkwbU9EYUd3QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieGdVbTZvREozSWVzUlUzclp6UTUzdlB1Q0taMDY1d3RFZWxRSUJRYmJFYjRESGFpNFJvV3J4YzZJOGZhZmVYZEYySDVSelRhTVF4Q0lIRlFoaFk3QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjM5OTUwMDQ2Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjUxMDcwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVCc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUJzLmpzb24iOiAie1wia2V5RGF0YVwiOlwieTNUa29ENUdVdkkreWVRWVlVWEZtUGVFVkRYWklpc1MvdkRRU0E1ZXNQVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTEyNzA5ODY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDI0NTMwMDgyNzlcIn0iCn0="  // PUT your SESSION_ID 


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
