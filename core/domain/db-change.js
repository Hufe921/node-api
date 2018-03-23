const model = require('../models/index');

model.syncDB().then(() => {
    console.log('sync done,db inited');
    process.exit(0);
}).catch((e) => {
    console.log(`failed:${e}`);
    process.exit(0);
});