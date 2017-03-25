var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
    title: 'Article One | Hem201197',
    heading: 'Article One',
    date: 'Mar 6,2017',
    content:`<p>
                This is first article
            </p>
            <p>
                Done by Hem.....:p
            </p>`

    
},
'article-two': {
    title: 'Article Two | Hem201197',
    heading: 'Article Two',
    date: 'Mar 10,2017',
    content:`<p>
                 This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.This is content of second article.
            </p>
            <p>
                Done by Hem.....:p
            </p>`},
'article-three': {
    title: 'Article Three | Hem201197',
    heading: 'Article Two',
    date: 'Mar 11,2017',
    content:`<p>
                 This is content of Third article.
            </p>
            <p>
                Done by Hem.....:p
            </p>`}
};
function createTemplate (data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
          <hr/>
          <h3>
              ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
          </div>
        </div>
    </body>
</html>


`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
