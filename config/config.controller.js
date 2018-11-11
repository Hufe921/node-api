const fs = require('fs');
const path = require('path');
const router = require('koa-router')();

function addMapping(mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, ...mapping[url]);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, ...mapping[url]);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, ...mapping[url]);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, ...mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers() {
    const dirUrl = path.resolve(__dirname, '../controllers')
    fs.readdirSync(dirUrl).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        let mapping = require(dirUrl + '/' + f);
        addMapping(mapping);
    });
}

module.exports = {
    addController() {
        addControllers();
        return router.routes();
    }
}