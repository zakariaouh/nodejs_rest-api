let express = require("express")
let app = express();


let router = express.Router();
//I want to be able to support using json for post methodes
app.use(express.json());

let clientRepot = require('./repos/clientsRepo');

router.get('/search', function (req, res, next) {
    let searchObject = {
        "id": req.query.id,
        "lastName": req.query.lastName,
        "firstName": req.query.firstName
    }
    clientRepot.search(searchObject,
        function (data) {

            res.status(200)
                .json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Single client retrieved",
                    "data": data
                });

        },
        function (err) {
            next(err);

        });


});
router.get('/:id', function (req, res, next) {
    clientRepot.getById(req.params.id,
        function (data) {

            if (data && data.length > 0) {
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


router.post('/', function (req, res, next) {

    clientRepot.insert(req.body, function (data) {
            res.status(201).json({
                "status": 201,
                "statusText": "Created",
                "message": "new client added",
                "data": data
            })
        },
        function (err) {
            next(err);
        }
    );
});

app.use('/api/', router)

var server = app.listen(5000, function () {
    console.log("node server is running on http://localhost:5000")

})
