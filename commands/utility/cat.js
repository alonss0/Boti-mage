const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const akaneko = require('akaneko');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Replies with cat image!'),
    async execute(interaction) {
        await interaction.reply('Cat');
        await interaction.deleteReply();
        const image = await akaneko.lewdNeko();
        const embed = new EmbedBuilder().setTitle('Cat').setImage(image);
        await interaction.followUp({ embeds: [embed] });
    }
}