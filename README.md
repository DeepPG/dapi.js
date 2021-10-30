

example:

```js
const client = require('dapi.js');
let token = 'bot token'

client.login(token) // set bot status to online
client.createMessage({
    message: 'something for test',
    channelID: 'channel id',
    token: token,
    embed: { // embed
        description: 'description for test'
        title: 'title'
    }
}); // sne message: "something for test"
```
