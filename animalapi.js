// 1. Build a new express server that uses the `express.static()` middleware
// 2. add a new `GET` route at `/random` . Inside of the request handler function, do the following:
// 3. Use the `fs` module to find all image files in the `public` folder
// 4. pick one at random and build a response that looks like the above
// 5. update your dog.ceo project to use your new api
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3020;
const path = require('path');

app.use(express.static('public'));

app.get('/random', function(req, res, next){
    const files = fs.readdirSync(__dirname + '/public')
    res.send({"status": "OK",
    "message": 'http://localhost:3020/public/' + files[1]});
    // "message": `${path.resolve('cheetah.jpg')}`
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
