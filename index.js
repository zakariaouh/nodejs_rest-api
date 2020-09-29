let express = require("express")
let app = express();

let router = express.Router();


router.get('/', function (req, res, next) {
    res.send("Apple")
});

app.use('/api/', router)

var server= app.listen(5000,function () {
    console.log("node server is running on http://localhost:5000")
    
})
