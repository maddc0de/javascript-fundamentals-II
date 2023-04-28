const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  const result = thermostat.getTemperature();
  // JSON.stringify transforms JS obj to a string that can be sent in a response
  res.send(JSON.stringify('temperature: ' + result));
});

app.post('/up', (req, res) => {
  thermostat.up();
  const temp = JSON.stringify(thermostat.getTemperature())
  res.send("current temperature: " + temp);
});

app.post('/down', (req, res) => {
  thermostat.down();
  const temp = JSON.stringify(thermostat.getTemperature())
  res.send("current temperature: " + temp);
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  const temp = JSON.stringify(thermostat.getTemperature())
  res.send("current temperature: " + temp);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);