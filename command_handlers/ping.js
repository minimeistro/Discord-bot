

module.exports = {
    bind: 'ping',
    handler: async function(message) {
        message.reply('pong!');

    }
}