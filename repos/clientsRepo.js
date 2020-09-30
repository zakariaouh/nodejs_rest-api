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

    },
    search: function (objectSearch, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {
                let clients = JSON.parse(data).filter(
                    client =>
                        (objectSearch.id ? objectSearch.id == client.id : true)
                        &&
                        (objectSearch.firstName ? client.firstName.toLowerCase().indexOf(objectSearch.firstName.toLowerCase()) >= 0 : true)
                        &&
                        (objectSearch.lastName ? client.lastName.toLowerCase().indexOf(objectSearch.lastName.toLowerCase()) >= 0 : true)
                )
                resolve(clients);
            }
        });
    }

};

module.exports = clientRepo;
