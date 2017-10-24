const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');


app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}:`)
    next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send("hello world");
});

app.get('/about',(req, res) =>{
    res.render('about.hbs');
})

app.listen(port, () => {
    console.log(`server is on port ${port}`);
});
