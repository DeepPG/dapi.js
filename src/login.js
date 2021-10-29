let Websocket = require('ws');
let wss = new Websocket("wss://gateway.discord.gg/?v=9&encoding=json")



let ping = Date.now()
Object.assign(wss, {ping:100})


module.exports = {
 login: function login(token){
if(!token) throw new Error("no token provided")
module.exports.token = token
let payload={
	op:2,
	d:{
	    token:token, 
		intents:513,
		properties: {
            $os: "linux",
            $browser: "Linux",
            $device: "Linux"
		}, 
	    presence: {
        activities: [{
                name: null,
                type: 0
            }],
            status: "online",
            since: 91879201,
            afk: false
	    }, 
	}
}
	


  
wss.on("open", ()=>{
	wss.ping = Date.now()- ping 
	wss.ping = Math.floor(wss.ping /10)	
	
		ping = Date.now()
setInterval(()=>{
	
	wss.ping = Date.now()- ping 
	wss.ping = Math.floor(wss.ping /10)
})
	setInterval(()=>{
		ping = Date.now()
	}, 2000)
const heartbeat = (ms)=>{
	return setInterval(()=>{
wss.send(JSON.stringify({op:1,d:null}))
	
	}, ms)
}
	wss.send(JSON.stringify(payload))
    
    this.token = payload.d.token;
	    
})
}
}


client = {
	wss:wss, 
	token:module.exports.token, 			
	login:module.exports.login,
}



module.exports = client;