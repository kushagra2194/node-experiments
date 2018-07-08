var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./mailtemplate/index.html', 'utf8');
var options = { format: 'Letter', "timeout": 30000,"height": "11.31in","width": "8in", };

pdf.create(html, options).toFile('./mailer.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});