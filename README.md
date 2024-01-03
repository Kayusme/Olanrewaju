# Olanrewaju: A Cybersecurity project to secure IoT data

## Project Overview

Olanrewaju is a Cordova mobile app designed to secure IoT data. The app communicates with IoT devices over Bluetooth and sends the received encrypted data to a server. The app features a fingerprint sensor for user authentication and securely stores user tokens and fingerprint secrets.

## Project Structure

The project is structured as follows:

- `www/js/setup.js`: This file sets up the app. It checks if the user is already logged in and handles the login and registration process.
- `www/js/index.js`: This is the main entry point of the app.
- `www/js/home.js`: This file handles the home screen of the app.
- `www/js/index.html`: This is the main HTML file of the app.
- `www/css/index.css`: This file contains the styles for the app.

## Installation Guide

To install Cordova and build the mobile app, follow these steps:

1. Install Cordova using npm: `npm install -g cordova`
2. Create a new Cordova project: `cordova create hello com.example.hello HelloWorld`
3. Add the desired platform (e.g., Android): `cordova platform add android`
4. Build the app: `cordova build android`

## Usage Guide

## Plugin Installation Guide

Install the cordova-android plugin using npm: `npm install cordova-android`
Install the cordova-plugin-advanced-http plugin using npm: `npm install cordova-plugin-advanced-http`
Install the cordova-plugin-background-mode plugin using npm: `npm install cordova-plugin-background-mode`
Install the cordova-plugin-bluetooth-serial plugin using npm: `npm install cordova-plugin-bluetooth-serial`
Install the cordova-plugin-device plugin using npm: `npm install cordova-plugin-device`
Install the cordova-plugin-file plugin using npm: `npm install cordova-plugin-file`
Install the cordova-plugin-fingerprint-aio plugin using npm: `npm install cordova-plugin-fingerprint-aio`

To use the app:

1. Connect to your IoT device via Bluetooth.
2. Send and receive data from the IoT device.
3. Use the fingerprint sensor to authenticate.
4. If any errors occur, refer to the error messages for guidance.

## Contributing

To contribute to the project:

1. Submit an issue describing your proposed change to the repo in question.
2. The repo owner will respond to your issue promptly.
3. If your proposed change is accepted, create a pull request with your new code.

## License

This project is licensed under the Apache License, Version 2.0. For more information, see the [LICENSE](LICENSE) file in this repository.
