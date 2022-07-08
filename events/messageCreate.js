module.exports = {
  name: messageCreate,
  execute(message) {
    console.log(
      `${msg.member.displayName} sent a message in #${msg.channel.name}.`
    );
  },
};
