const Social = require("../../base/Social.js");
const { get } = require("snekfetch");

class Lizard extends Social {
  constructor(...args) {
    super(...args, {
      name: "lizard",
      description: "Post a randomly selected image of a lizard.",
      category: "Animals",
      usage: "lizard",
      extended: "This command will return a beautiful lizard.",
      cost: 5,
      cooldown: 10,
      aliases: ["geko"],
      loadingString: "<a:typing:397490442469376001> **{{displayName}}** is looking for a lizard..."
    });
  }

  async run(message, args, level, loadingMessage) {
    const { body } = await get("https://nekos.life/api/lizard");
    await loadingMessage.edit({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": body.url,
        "color": message.guild.me.roles.highest.color || 5198940,
        "image": {
          "url": body.url
        }
      }
    });
  }
}

module.exports = Lizard;