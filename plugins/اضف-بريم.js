//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ *منشن للشخص*\n\n📌 مثال : ${usedPrefix + command} @الشخص`
if (global.prems.includes(who.split`@`[0])) throw '□ منشن الشخص الـ مراد أضافتة مميز'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ مستخدم مميز

@${who.split`@`[0]} أنت الان مستخدم مميز !!

╣ *المنشن:* ${user.name}
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'مميز'] 

handler.group = true
handler.rowner = true

export default handler
