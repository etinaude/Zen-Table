
const SerialPort = require('serialport');
const express = require('express')
const app = express()

let paused = false;

// const PORT = "/dev/ttyUSB0";


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/front_end/dist/ngSite/index.html")
})

app.post("/lights/color", (req, res) => { console.log(req) })

app.post("/lights/pattern", (req, res) => { })


app.get("/front_end/*", (req, res) => {
  res.sendFile(__dirname + req.originalUrl)
})

app.get("/assets/*", (req, res) => {
  console.log(req.originalUrl)
  res.sendFile(__dirname + "/front_end/src/" + req.originalUrl)
})

// const port = new SerialPort(PORT, {
//   baudRate: 250000
// }).on("error", (e) => console.log(e));
// var portParser = new SerialPort.parsers.Readline();
// port.pipe(portParser);


app.post("/gcode", (req, res) => { })


/*
function sendNextCmd(data) {
  if (paused) return;

  if (data.toString('utf8').includes("ok")) {
    if (cmdQueue.length > 0) {
      var cmd = cmdQueue.shift();
      port.write(cmd + "\n");
      if (DEBUG) console.log("Send CMD: " + cmd);
    } else if (index >= 0 && index < file.length) {
      // Send next gcode command
      if (file[index] == "") {
        index++;
        sendNextCmd(true);
        return;
      }
      port.write(file[index] + "\n");
      if (DEBUG) console.log("Send CMD: " + file[index]);
      index++
    } else {
      if (file.length > 0)
        doneCallback();
      file = [];
      index = 0;
    }
  }
}*/



app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})