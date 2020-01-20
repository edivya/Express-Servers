# Express-servers

## Overview

In this app, we will create our own server-side APIs using the Express.js framework. Express is the most widely used Node.js server framework. It will allow us to quickly and easily establish our API routes and associated HTTP request methods.

Routing is how we design our server to handle responses when a client makes a request at a specific endpoint, or URL. We learned how to make GET requests from the client-side in a previous unit. Now we will learn how those requests are handled on the server-side. Our server will _listen_ for a specific type of request at a specific endpoint and when it _hears_ that request, it will respond accordingly.

- We will also learn the HTTP POST request method to submit data to our server

   - Using this app that has two web servers: one that listens on port 7000 and one that listens on port 7500.

   - Each server will respond with a different inspirational quote of your choosing.

## Tools

- http
- Express.js
- Routing
- Postman
- HTTP POST requests
- Express.static()

# **Instructions**

* Create an HTML file with a form that will post data.
* Create a server that will accept the POSTed data and log it to the console.
* Each route should be triggered by a different URL.
* Each route should display an HTML page listing your favorite three things of each.
* Be sure to use `fs` to serve your HTML files.
