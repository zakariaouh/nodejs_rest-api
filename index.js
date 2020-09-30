let express = require("express")
let app = express();

let router = express.Router();
let clientRepot = require('./repos/clientsRepo');


router.get('/', function (req, res, next) {
    clientRepot.get(
        function (data) {
            res.status(200)
                .json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "All Clients retrieved",
                    "data": data
                });
        },
        function (err) {
            next(err);

        });


});

app.use('/api/', router)

var server = app.listen(5000, function () {
    console.log("node server is running on http://localhost:5000")

})
