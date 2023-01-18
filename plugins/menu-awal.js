import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏱️',
            key: m.key,
          }})
          
          let tagnya = `@${m.sender.split`@`[0]}`
          
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Hallo Kak ${tagnya} Terimakasih Telah Memakai FrBotz Untuk Menjalankan FrBotz Ketik #menu/.menu Jika Ada Fitur Yang error Lapor Kepada Owner Ayo Dukung FrBotz Untuk Berkarya!\n`,wm + '\n\n' + botdate, thumbdoc, [['𝕬𝖑𝖑 𝕸𝖊𝖓𝖚','.? all'],['𝕷𝖎𝖘𝖙 𝕸𝖊𝖓𝖚','.siuuu'],['𝕯𝖔𝖓𝖆𝖘𝖎','.donasi']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://saweria.co/FardanBot21',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
await conn.sendFile(m.chat, './mp3/nexep.mp3', 'sound.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler