var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '3Yxkuyux',
  database : 'day_planner_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

});

//home get route
app.get('/', function(req,res) {
    //mySQL commands
    connection.query('SELECT * FROM plans;', function(err, data) {
      if (err) throw err;

      res.render('index', {plans: data});

    });
});

//delete route -> back to home
app.post('/create', function(req,res){
    connection.query('INSERT INTO plans (plan) VALUES (?)', [req.body.plan], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

//delete route -> back to home
app.delete('/delete', function(req,res){
    connection.query('DELETE FROM plans WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

//put route -> back to home
app.put('/update', function(req,res){

    connection.query('UPDATE plans SET plan = ? WHERE id = ?', [req.body.plan, req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

var port = 3000;
app.listen(port);
