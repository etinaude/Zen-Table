
const SerialPort = require('serialport');
const express = require('express')
const fs = require('fs')
const app = express()
// const bodyParser = require('body-parser');

var ws281x = require('rpi-ws281x-native');

const cors = require('cors');
app.use(cors());
app.options('*', cors());
console.clear()

let INIT_GCODE =
  `G90
  G21
  M350 X16 Y16`

let paused = false;
// const PORT = "/dev/ttyUSB0";
const PORT = "/dev/ttyUSB0";

const com = new SerialPort(PORT, {
  baudRate: 250000
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/front_end/dist/ngSite/index.html")
})

app.post("/lights/color/:hex", (req, res) => {
  console.log(req.params.hex)
  res.sendStatus(200)
})

app.post("/lights/pattern/:pattern", (req, res) => {
  console.log(req.params.pattern)
  res.sendStatus(200)
})


app.get("/front_end/*", (req, res) => {
  res.sendFile(__dirname + req.originalUrl)
})

app.get("/assets/*", (req, res) => {
  res.sendFile(__dirname + "/front_end/src/" + req.originalUrl)
})


app.post("/sand/pattern/:pattern", (req, res) => {
  console.log(req.params.pattern)

  sendFileSerial(req.params.pattern)

  res.sendStatus(200)
})


function sendFileSerial(filename) {
  let file = __dirname + `/Patterns/${filename}.gcode`
  console.log(file)
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)

    com.write(data, function (err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
  })
}


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
  initialise()
  // sendFileSerial("Fractal")
})


function initialise() {

  com.write(`${INIT_GCODE}\nG0 X10 Y10 \n`, function (err) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
}