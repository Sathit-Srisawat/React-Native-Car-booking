//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'van_booking'
});
const app = express();
app.get('/table_queue', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM table_queue', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/profile', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM profile', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/comment', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM comment', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/chart', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM chart', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/ticket', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM ticket', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/login', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM login', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/contactus', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM contactus', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/History', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM History', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/Countdown', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM Countdown', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/chart so you can see the data.');
});

app.listen(3002, () => {
 console.log('Go to http://localhost:3002/table_queue so you can see the data.');
});

app.listen(3003, () => {
  console.log('Go to http://localhost:3003/profile so you can see the data.');
 });

 app.listen(3004, () => {
  console.log('Go to http://localhost:3004/comment so you can see the data.');
 });
 app.listen(3005, () => {
  console.log('Go to http://localhost:3005/ticket so you can see the data.');
 });
 app.listen(3006, () => {
  console.log('Go to http://localhost:3006/login so you can see the data.');
 });
 app.listen(3007, () => {
  console.log('Go to http://localhost:3007/contactus so you can see the data.');
 });
 app.listen(3008, () => {
  console.log('Go to http://localhost:3008/History so you can see the data.');
 });
 app.listen(3009, () => {
  console.log('Go to http://localhost:3009/Countdown so you can see the data.');
 });