const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res) {
    res.send('hello server 5000 is working ');
})
app.post('/example-1', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
        'y': '150, 230, 224, 218, 135, 147, 260'
    })
})
app.post('/example-2', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
        'y': '820, 932, 901, 934, 1290, 1330, 1320'
    })
})
app.post('/example-3', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
        'y': '-2, -1.5, -1, -3, 1, 1.5, 2'
    })
})
app.post('/example-4', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
        'y': '0, 300, 500, 600, 700, 800, 900'
    })
})
app.post('/example-5', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
        'y': '0, 300, 500, 600, 700, 800, 900'
    })
})
app.post('/example-6', function (req, res) {
    console.log(req.body);
    res.status(200).send({
        'x': 'Search Engine, Direct, Email, Union Ads, Video Ads',
        'y': '1048, 735, 580, 484, 300'
    })
})
app.listen(Port, function () {
    console.log('server running on localhost: ' + Port)
});   