/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    /*
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    */

    //cordova.plugin.http.setRequestTimeout(50.0);
    /////PROJECT CODE STARTS HERE ////////
    // Install the Fingerprint AIO plugin
//cordova plugin add cordova-plugin-fingerprint-aio


// Check if user is already logged in (and fingerprint is enrolled)
var token = localStorage.getItem('token');
var fingerprintAvailable = true; // Update based on fingerprint plugin's availability check
var fingerprintSecret = localStorage.getItem('fingerprintSecret'); // Retrieve stored fingerprint secret

if (token && fingerprintAvailable && fingerprintSecret) {
  // User is already logged in, prompt for fingerprint authentication
  try {
      Fingerprint.show({
        clientId: 'Olanrewaju CyberSec',
        clientSecret: 'OlanrewajuCyberSec',
        success: function(result) {
          if (result.withFingerprint) {
            // Fingerprint authentication successful, allow access
            
            window.location = "home.html";
            //alert("fingerprint, token, secret not set");

          } else {
            // Fingerprint authentication failed, prompt for login credentials
            // ... (proceed with regular login flow)
          }
        },
        error: function(error) {
          // Handle fingerprint authentication errors
          // ... (provide appropriate feedback to the user)
        }
      });

    } catch(error) {
      // Handle errors
      alert("Fingerprint Error" +error);
    }

} else {
  // User not logged in or fingerprint not enrolled, prompt for login


  var username = document.getElementById("username").value;
  var password = document.getElementById('password').value;

      // Send login request
      
    // Send login request
    $('#registerForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

      // To Login, check for fingerprint enrollment
      try {
        //Fingerprint.isAvailable(
          //function(result) {
            //if (result.isAvailable) {
              // Fingerprint sensor is available, prompt for enrollment or update
              Fingerprint.show({
                clientId: 'Olanrewaju CyberSec',
                clientSecret: 'OlanrewajuCyberSec',
                store: true, // Flag to store fingerprint data securely
                success: function(result) {
                  // Fingerprint enrollment or update successful
                  // Store the new fingerprint secret
                    alert("login button clicked");
                  localStorage.setItem('fingerprintSecret', result.secret);

                  ///*
                    var formData = $(this).serialize(); // Get form data
                    // Append additional variables
                    formData += '&action=login&fingerprintSecret=' + fingerprintSecret;
                    console.log('AJAX Login URL: https://jaycody.com/Olanrewaju');
                    console.log('AJAX Login FormData:', formData);

                    $.ajax({
                      url: 'https://jaycody.com/Olanrewaju',
                      type: 'POST',
                      data: formData,
                      contentType: 'application/x-www-form-urlencoded',
                    success: function(response) {
                          console.log('Login Success Response:', response);
                          alert("login successful. Response token:  "+response.token);
                      localStorage.setItem('token', response.token);
                      window.location="home.html";
                    },
                    error: function(xhr, status, error) {
                      console.log('Login Error:', xhr, status, error);
                      
                      var confirmChoice = confirm("Login Failed! Do you want to Register?");
                    if (confirmChoice) {
                      // Perform actions if confirmed
                      //alert("Login Failed! Do you want to Register?");
                      // ... (Add your desired actions here)
                    

                            // Invalid login, prompt for registration (and fingerprint enrollment if available)
                        var newUsername = document.getElementById("username").value;
                        var newPassword = document.getElementById('password').value;
                      
                    // Send registration request
                    $('#registerForm').submit(function(event) {
                      alert("Register button clicked");
                      event.preventDefault(); // Prevent default form submission

                      // Prompt for fingerprint enrollment if available
                      try  {
                        Fingerprint.show({
                          clientId: 'Olanrewaju CyberSec',
                          clientSecret: 'OlanrewajuCyberSec',
                          store: true, // Flag to store fingerprint data securely
                          success: function(result) {
                            // Fingerprint enrollment successful
                            var fingerprintSecret = result.secret; // Store the fingerprint secret
                            var formData = $(this).serialize(); // Get form data

                            // Append additional variables
                            formData += '&action=register&fingerprintSecret=' + fingerprintSecret;

                              $.ajax({
                                url: 'https://jaycody.com/Olanrewaju',
                                type: 'POST',
                                data: formData,
                                contentType: 'application/x-www-form-urlencoded',
                              success: function(response) {
                                // Registration successful, login with new credentials
                                localStorage.setItem('token', response.token);
                                localStorage.setItem('fingerprintSecret', fingerprintSecret);
                              }
                            });
                        //
                          },
                          error: function(error) {
                            // Handle fingerprint enrollment errors
                            // ... (provide appropriate feedback to the user)
                          }
                      });
                      
                      } catch(error) {
                        alert("fingerprint error, registration");
                        // Fingerprint sensor not available, register without fingerprint
                        /*
                        //$.ajax({
                          //url: '/register',
                          //type: 'POST',
                          //data: {
                            //username: newUsername,
                            //password: newPassword
                          //},
                          //success: function(response) {
                            // Registration successful, login with new credentials
                            //localStorage.setItem('token', response.token);
                          //}
                        //});
                        //*/
                    }
                    });

                  }
                    }, });
                  //});
                      //*/











                },
                error: function(error) {
                  // Handle fingerprint enrollment errors
                  // ... (provide appropriate feedback to the user)
                  alert("Fingerprint Enrollment Error "+error);
                }
              });
            //} else {
              // Fingerprint sensor is not available, continue without fingerprint
            //     alert("Fingerprint permission or plugin error");
            // localStorage.setItem('token', response.token);
            //}
        // }
        //);
      } catch(error) {
        // Handle errors
        alert("Fingerprint Login error " +error);
      }

  });

}

////////USEFUL RESOURCES GOES HERE //////
/*

document.getElementById("registerButton").addEventListener("click", function() {
  navigator.app.loadUrl("register.html", {
    // Optional options for loading the page
    clearHistory: true, // Clear the history stack
    transition: "slide" // Specify a transition effect (optional)
  });
});


*/


}
