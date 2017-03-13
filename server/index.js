//to do server
import express from 'express';
import bodyParser from 'body-parser';
import uuid from 'node-uuid';
const app = express();
// const data = './public/database/tasks.json';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





// app.get('/', function(req, res) {
//     res.redirect("/index");
// });

// app.get('/index', function(req, res) {
//     res.sendFile(path.join(__dirname, '/public', 'index.html'));
// });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});