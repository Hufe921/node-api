const fs = require('fs')

// 循环引入
fs.readdirSync(__dirname + '/specs').filter((f) => {
    return f.endsWith('.js');
}).forEach((f) => {
    console.log(`test files: ${f}...`);
    require(__dirname + '/specs/' + f);
});