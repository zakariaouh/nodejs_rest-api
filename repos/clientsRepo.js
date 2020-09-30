let fs = require('fs');
const FILE_NAME = './assets/clients.json'
let clientRepo = {
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {
                let client = JSON.parse(data)
                    .filter(p => p.id === id);
                resolve(client);
            }
        })

    },
    getAll: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {

                resolve(JSON.parse(data));
            }
        })

    }

};

module.exports = clientRepo;
