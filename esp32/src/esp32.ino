

// Import required libraries
#include "WiFi.h"
#include "ESPAsyncWebServer.h"
#include "SPIFFS.h"
#include ".ignore/env.h"

// Replace with your network credentials
const char* ssid = ssidUnleash;
const char* password = passwordUnleash;

// const char* ssid = ssidUnleash;
// const char* password = passwordUnleash;

AsyncWebServer server(80);

void setup(){
  Serial.begin(115200);

  if(!SPIFFS.begin()){
        Serial.println("An Error has occurred while mounting SPIFFS");
        return;
  }

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }

  Serial.println(WiFi.localIP());

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html", "text/html");
  });


  server.on("/redirect", HTTP_GET, [](AsyncWebServerRequest *request){
    request->redirect("/login");
  });

  server.on("/gcode", HTTP_POST, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html", "text/html");
  });

  server.begin();
}

void loop(){}