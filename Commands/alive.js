// commands/alive.js
async function aliveCommand(sock, from, msg) {
    try {
        const aliveText = `🤖 *‎ABDULLAH BOT IS ALIVE* 🚀\n\n` +
                          `⚡ *Status:* Online & Working Perfectly\n` +
                          `⚙️ *Version:* 2.0.0\n\n` +
                          `Type *.menu* to view all commands.`;
        await sock.sendMessage(from, { text: aliveText }, { quoted: msg });
    } catch (error) {
        console.error("Error in alive command:", error);
    }
}

module.exports = aliveCommand;
