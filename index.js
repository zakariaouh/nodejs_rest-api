let express = require("express")
let app = express();

let router = express.Router();
let clientRepot = require('./repos/clientsRepo');


router.get('/:id', function (req, res, next) {
    clientRepot.getById(req.params.id,
        function (data) {

            if (data && data.length>0) {
                res.status(200)
                    .json({
                        "status": 200,
                        "statusText": "OK",
                        "message": "Single client retrieved",
                        "data": data
                    });
            } else {
                res.status(404)
                    .json({
                        "status": 404,
                        "statusText": "Not found",
                        "message": "The client '" + req.params.id + "' could not be found",
                        "error": {
                            "code": "NOT_FOUND",
                            "message": "The client '" + req.params.id + "' could not be found"
                        }
                    });

            }
        },
        function (err) {
            next(err);

        });


});
router.get('/', function (req, res, next) {
    clientRepot.getAll(
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
