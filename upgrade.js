const Discord = require("discord.js-selfbot-v13");
var prompt = require("prompt-sync")();
var colors = require("colors");
var gradient = require("gradient-string");
var fs = require("node:fs");
var config = require("./config");
var { SocksProxyAgent }= require("socks-proxy-agent");
var proxys = fs.readFileSync("./proxys.txt", "utf-8").split("\n");
var iii = 0;
var amount = Number(prompt(gradient.pastel("[!] Amount: ")));

function login(token) {
    proxy_use = proxys[Math.floor(Math.random() * proxys.length)];

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
            channels = [
                config['channels'],
                config['channels'],
                config['channels'],
                config['channels'],
                config['channels1'],
                config['channels1'],
                config['channels1'],
                config['channels1'],
                config['channels2'],
                config['channels2'],
                config['channels2'],
                config['channels2'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels3'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels4'],
                config['channels5'],
                config['channels5'],
                config['channels5'],
                config['channels5'],
                config['channels5'],
                config['channels5'],

                



                
            ];
                try {
                    for (let ii = 0; ii < amount; ii++) {
                        try {
                            for (let i = 0; i < channels.length; i++) {
                                const c = guild.channels.cache.get(channels[i]);
                                if (c) {
                                    c.send({
                                        content: config['message']+" | "+makeid(6)+" ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||@everyone",
                                        tts: true
                                    }).then(() => {
                                        iii++;
                                        c.send({
                                            content: config['message']+" | "+makeid(6)+" ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||@here",
                                            tts: true
                                        }).catch(() => {})
                                        console.log(gradient.rainbow("["+iii+"] SPAMED | "+channels[i]));
                                    })
                                    .catch(() => {})
                                }
                            }
                        } catch {
    
                        }
                    }
                } catch {
    
                }
        }
    })

    client.login(token)
    .catch(() => {});
    }

var tokens = fs.readFileSync("./tokens.txt", "utf-8").split("\n");

tokens.forEach(async (token) => {
    login(token);
})
