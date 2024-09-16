//Mando
//Mando
//قناه المصدر
//https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x

import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `️ *${usedPrefix + command} سوكونا*`
const prohibited = ['بنات', 'بز', 'سكس']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('محظور')      
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendButton(m.chat, `الصوره المطلوبه : ${text}`, wm, link, [['صوره كمان', `/صوره ${text}`]], null, null, m,)

} catch (e) {
console.log(`error`)
console.log(e)
handler.money = false
}}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صوره|صورة|img)$/i
handler.money = 50
export default handler
