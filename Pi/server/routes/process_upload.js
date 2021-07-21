import express from 'express';
import fs from 'fs';
import fileupload from 'express-fileupload';
import sharp from 'sharp';
import { process_thr_file_to_gcode } from './process_theta_rho.js';
import { process_gcode_file_to_png } from './create_png_from_gcode.js';
import { renameTrack, deleteTrack } from "./playlist_manager.js";

const router = express.Router();

router.use(fileupload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

router.post('/', function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "file") is used to retrieve the uploaded file
  let thrFile = req.files.file;

  if (!thrFile.name.endsWith(".thr")) {
    return res.status(400).send("Invalid file type");
  }
  var filename = thrFile.name.replace(".thr", "");

  var filename = req.body.filename;
  if (fs.existsSync(__dirname + "/Patterns/" + filename + ".gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + ".gcode");
  if (fs.existsSync(__dirname + "/Patterns/" + filename + " (fill).gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + " (fill).gcode");

  // Use the mv() method to place the file somewhere on your server
  thrFile.mv(__dirname + "/../../files/" + thrFile.name, function (err) {
    if (err)
      return res.status(500).send(err);

    process_thr_file_to_gcode(filename, () => {
      process_gcode_file_to_png(filename, () => {
        sharp(__dirname + "/../../files/" + filename + ".png")
          .extract({ left: 73, top: 73, width: 354, height: 354 }) // See https://www.desmos.com/calculator/rbn4tjbjjd for rationale of numbers
          .resize(500) // assuming image ("/../../files/" + filename + ".png") is of width/height 500
          .toFile(__dirname + "/../../files/" + filename + " (fill).png",
            (err, info) => {
              sharp(__dirname + "/../../files/" + filename + ".png")
                .resize(100)
                .toFile(__dirname + "/../../files/" + filename + "-small.png",
                  (err, info) => {
                    res.send('File uploaded!');
                  }
                );
            });
      });
    });
  });
});

router.post("/delete", function (req, res) {
  var filename = req.body.filename;
  if (fs.existsSync(__dirname + "/Patterns/" + filename + ".gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + ".gcode");
  if (fs.existsSync(__dirname + "/Patterns/" + filename + " (fill).gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + " (fill).gcode");
  deleteTrack(filename);
  res.sendStatus(200);
});

router.post("/rename", function (req, res) {
  var filename = req.body.filename;
  var newName = req.body.newName;
  var filename = req.body.filename;
  if (fs.existsSync(__dirname + "/Patterns/" + filename + ".gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + ".gcode");
  if (fs.existsSync(__dirname + "/Patterns/" + filename + " (fill).gcode"))
    fs.unlinkSync(__dirname + "/Patterns/" + filename + " (fill).gcode");
  renameTrack(filename, newName);
  res.sendStatus(200);
});

export default router;
