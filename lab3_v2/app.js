let express = require('express')
let app = express();
let router = require("./routes/router")


app.use('/public', express.static('dist-gulp'));
app.use('/node_modules', express.static('node_modules'));
app.use('/', router);



app.use((req, res) => {
    res.status(404).send('Страница не найдена');
})

module.exports = app;

