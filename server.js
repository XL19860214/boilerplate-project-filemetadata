var express = require('express');
var cors = require('cors');
require('dotenv').config();
const fileUpload = require('express-fileupload');

var app = express();

app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// ===============================================
// POST '/api/fileanalyse'

app.post('/api/fileanalyse', (req, res) => {
  // console.log(`req`, req); // DEBUG
  // console.log(`req.files`, req.files); // DEBUG
  const { name, size, mimetype: type } = req.files.upfile;
  res.json({
    name,
    type,
    size
  });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
