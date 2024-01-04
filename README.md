# Olanrewaju: A Cybersecurity project to secure IoT data

## Project Overview

Olanrewaju is an advanced cybersecurity project focused on safeguarding data generated by Internet of Things (IoT) devices.
Purpose:
- Protect IoT data against unauthorized access and ensure confidentiality, integrity, and availability.
Problems addressed:
- Mitigate risks of data breaches in IoT communications.
- Prevent potential data interception and tampering.
Benefits:
- Enhanced security for IoT environments.
- Trustworthy data exchange between devices and the server.
The app communicates with IoT devices over Bluetooth, encrypts and ensures the integrity of the transmitted data, and securely relays it to the server backend. Furthermore, Olanrewaju provides a robust authentication mechanism, leveraging a fingerprint sensor to verify user identity and securely manage user credentials and access tokens. The app features a fingerprint sensor for user authentication and securely stores user tokens and fingerprint secrets.

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

### Server-Side Details
Our server infrastructure is designed to be scalable and resilient. It features:
- Load-balanced server instances to efficiently distribute and manage incoming requests.
- Secure RESTful API endpoints for communication with the IoT devices and the mobile app.
- Session management and authentication systems to control and monitor access.
- Integration with databases, ensuring IoT data is securely stored and managed.

## Plugin Installation Guide

Install the cordova-android plugin using npm: `npm install cordova-android`

### IoT Aspects of the Project
The Olanrewaju app can communicate with a variety of IoT devices, including but not limited to smart sensors, actuators, and home automation systems. Key features of the app's IoT capabilities include:
- Bluetooth connectivity for local device interactions.
- Deployment of secure communication protocols to exchange data safely.
- Advanced error handling and data validation mechanisms to ensure reliability of the app.
Through these means, the app ensures a secure and efficient comunicaiton with IoT devices while maintaining the integrity and confidentiality of the data.
Install the cordova-plugin-advanced-http plugin using npm: `npm install cordova-plugin-advanced-http`

### Data Encryption Methods
Our project employs state-of-the-art encryption algorithms to safeguard data in transit and at rest. We use:
- AES for symmetric encryption, offering a strong balance of performance and security.
- RSA for asymmetric encryption, enabling secure key exchange and digital signatures.
- SHA-256 for hashing, ensuring data integrity and authenticity.
These methods ensure that all data, whether being transmitted between IoT devices, the mobile app, or the server, remains protected against unauthorized access. The choice of these algorithms was driven by their proven reliability, resistance to cryptanalysis, widespread adoption in the industry, and compliance with modern security standards.
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

## System Architecture
For an in-depth view of our system architecture, we have a detailed System Architecture PDF that provides:
- Architectural diagrams to visualize data flow and component interaction.
- Detailed descriptions of the system components and their roles.
- Code snippets and examples of critical functionality.
- Explanations of complex processes to clarify operation within the system.

## License

This project is licensed under the Apache License, Version 2.0. For more information, see the [LICENSE](LICENSE) file in this repository.
