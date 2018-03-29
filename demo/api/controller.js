const fs = require('fs');
const router = require('koa-router')();
// add url-route in /controllers:

function addMapping(mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            // console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, ...mapping[url]);
            // console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            // console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            // console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(mapping);
    });
}

// 上传文件处理
function addUploadFile() {
    const multer = require('koa-multer');
    //配置  
    var storage = multer.diskStorage({
        //文件保存路径  
        destination: function (req, file, cb) {
            cb(null, __dirname + '/static/img/')
        },
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
        }
    })
    var upload = multer({
        storage: storage
    });
    return upload;
}

module.exports = {
    addController(dir) {
        let controllers_dir = dir || 'controllers';
        addControllers(controllers_dir);
        return router.routes();
    },
    addUploadFile
}