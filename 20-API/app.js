const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  const url =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=religious';
  https.get(url, function (response) {
    // console.log(response.statusCode);
    response.on('data', function (data) {
      const jokeData = JSON.parse(data);
      if (jokeData.type === 'twopart') {
        res.write('<p>' + jokeData.setup + '</p>');
        res.write('<h1>' + jokeData.delivery + '</h1>');
        res.send();
        // console.log(jokeData.setup);
        // console.log(jokeData.delivery);
      } else {
        res.send(jokeData.joke);
        // console.log(jokeData.joke);
      }
    });
  });
});
app.get('/weather', function (req, res) {
  res.sendFile(__dirname + '/weather.html');
});

app.post("/weather", function (req, res) {
  const query = req.body.cityName;
  const apiKey = 'f2f2fbf62da7f84f50f905b7553a38ef';
  const unit = 'imperial';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + unit;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const location = weatherData.name;
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const imageURL = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
      res.write('<h1>The weather for ' + location + ' is</h1>')
      res.write('<img src=' + imageURL + '>');
      res.write('<p>' + weatherDescription + '</p >');
      res.write('<p>' + temp + ' Farenheight</p>')
      res.send();
    });
  });
});



app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
