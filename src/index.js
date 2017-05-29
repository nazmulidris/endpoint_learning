// more info https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

let express    = require('express');
let app        = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

let router = express.Router();

// more info on imports / exports - https://goo.gl/OlTxv2
router.get('/', require('./endpoints/root'));

app.use('/api', router);

app.listen(port);

console.log(`Server is running on port ${port}`);
console.log('Load it in the browser using http://localhost:8080/api');