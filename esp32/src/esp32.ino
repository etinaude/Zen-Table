/*********
  Rui Santos
  Complete project details at https://RandomNerdTutorials.com/esp32-vs-code-platformio-spiffs/
*********/

#include <Arduino.h>
#include "SPIFFS.h"

String results[7] = {"A", "B", "C", "D", "E", "F", "G"};
int timeDelay = 1000 * 60 * 10;

void setup()
{
  Serial.begin(9600);

  if (!SPIFFS.begin(true))
  {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }
}

void loop()
{
  String fileName = "/patterns/" + String("A") + String(".gcode");

  File file = SPIFFS.open(fileName);
  if (!file)
  {
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.println("File Content");
  Serial.println(fileName);

  while (file.available())
  {
    Serial.write(file.read());
  }
  file.close();

  delay(timeDelay);
}