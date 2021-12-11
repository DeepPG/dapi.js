
## Example usage:

```js
const client = require('dapi.js');
let token = 'bot token'

client.login(token) // set bot status to online
client.createMessage({
    message: 'something for test',
    channelID: 'channel id',
    token: token,
    embed: { // embed
        description: 'description for test',
        title: 'title'
    }
}); // sending message "something for test"
```





## Links


[NPM](https://www.npmjs.com/package/discord.js)

[Github](https://github.com/DeepPG/dapi.js)

[Dapi.js help](https://discord.gg/bkYgQGC)




## Donation
[![paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=K643AVX5KGL3W)
