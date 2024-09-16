let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] ادخل مشكلتك أو بلاغك*\n\n*مثال:*\n*${usedPrefix + command} مرحباً سيدي حرب${usedPrefix} كيف اخبارك*`
if (text.length < 10) throw `*[❗] البلاغ لا يقل عن عشرة احرف*`
if (text.length > 1000) throw `*[❗] البلاغ لا يزيد عن الف حرف*`
let teks = `*❒═════[إبلاغ مهم]═════❒*\n*┬*\n*├❧ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ البلاغ:* ${text}\n*┴*`
conn.reply('201210307869@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ] تم إبلاغ مطوري , أنتظر حتى يرى البلاغ الخاص بك
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|بلاغ|بلغ|ابلاغ|bug|report-owner|reportes)$/i
export default handler
