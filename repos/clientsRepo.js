let fs = require('fs');
const FILE_NAME = './assets/clients.json'
let clientRepo = {
   get : function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data));
            }
        })

    }

};

module.exports =clientRepo;