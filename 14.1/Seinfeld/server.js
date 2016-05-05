// Making an Express server available
var express = require('express');
var app = express();

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3Yxkuyux',
    database: 'seinfeld_db'
});

// Connecting the mysql database mentioned above
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res) {
    connection.query('SELECT * FROM actors order by id', function(err, result) {

      var html = '<h1> Actors Ordered BY ID </h1>';

      // Use the data from the database to populate an HTML file
      for (var s = 0; s < result.length; s++) {
        html += '<div style="background-color:aqua;">';
        html += '<ul>'
        html += '<li> ID: ' + result[s].id + ' </li>';
        html += '<li> Name: ' + result[s].name + ' </li>';
        html += '<li> Coolness Points: ' + result[s].coolness_points + ' </li>';
        html += '<li> Attitude: ' + result[s].attitude + ' </li>';
        html += '</ul>'
        html += '<br />';
        html += '</div>';
      };

      // Send the html to the browser
      res.send(html);
  });
});

app.get('/coolness-chart', function(req, res) {
    connection.query('SELECT * FROM actors order by coolness_points DESC', function(err, result) {

      var html = '<h1> Actors by Coolness </h1>';

      // Use the data from the database to populate an HTML file
      for (var s = 0; s < result.length; s++) {
        html += '<div style="background-color:aqua;">';
        html += '<ul>'
        html += '<li> ID: ' + result[s].id + ' </li>';
        html += '<li> Name: ' + result[s].name + ' </li>';
        html += '<li> Coolness Points: ' + result[s].coolness_points + ' </li>';
        html += '<li> Attitude: ' + result[s].attitude + ' </li>';
        html += '</ul>'
        html += '<br />';
        html += '</div>';
      };

      // Send the html to the browser
      res.send(html);
  });
});

app.get('/attitude-chart/:att', function(req, res) {
    connection.query('SELECT * FROM actors where attitude = ?', [req.params.att], function(err, result) {

      var html = '<h1> Actors With an Attitude of ' + req.params.att + '</h1>';

      // Use the data from the database to populate an HTML file
      for (var s = 0; s < result.length; s++) {
        html += '<div style="background-color:aqua;">';
        html += '<ul>'
        html += '<li> ID: ' + result[s].id + ' </li>';
        html += '<li> Name: ' + result[s].name + ' </li>';
        html += '<li> Coolness Points: ' + result[s].coolness_points + ' </li>';
        html += '<li> Attitude: ' + result[s].attitude + ' </li>';
        html += '</ul>'
        html += '<br />';
        html += '</div>';
      };

      // Send the html to the browser
      res.send(html);
  });
});


// Telling the server to run
var port = 3000;
app.listen(port);