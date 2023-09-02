const Discord = require("discord.js-selfbot-v13");
var prompt = require("prompt-sync")();
var colors = require("colors");
var gradient = require("gradient-string");
var fs = require("node:fs");
var config = require("./config");
var tokens = fs.readFileSync("./tokens.txt", "utf-8").split("\n");
var i = 0;
var success = 0;
var failed = 0;

function login(token) {
    const client = new Discord.Client({
        checkUpdate: false
    });
    
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    
    client.on("ready", async () => {
        const guild = client.guilds.cache.get(config['guild']);
    
        if (guild) {
            guild.leave()
            .then(() => {
                i++;
                console.log(gradient.rainbow("["+i+"] LEAVED! | "+config['guild']));
                client.destroy();

                if (i == tokens.length) {
                    process.exit(0)
                }
            })
            .catch(() => {
                client.destroy();
                
            })
        }
    })

    client.login(token)
    .catch(() => {});
    }

tokens.forEach(async (token) => {
    login(token);
})
