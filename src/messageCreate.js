const axios = require('axios').default;




module.exports = {
    message: async function message({content, channelID, token, messageEmbed:{title}}){
        if(!test) throw new Error('cannot send empty message')
        if(!token) throw new Error('no token provided')
        if(!channelID) throw new Error('no channelID provided')
        axios.post(`https://discord.com/api/v8/channels/${channelID}/messages`,{
            "content": content,
            "embeds": [{
                "title": title
            }]
        },  {
            headers: {
                Authorization: `Bot ${token}`,            
            }
        })
    }
};

