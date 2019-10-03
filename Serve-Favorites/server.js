// # **Instructions**

// * Create a website with four routes:

//   * Home

//   * Favorite Foods

//   * Favorite Movies

//   * Favorite CSS Frameworks

// * Each route should be triggered by a different URL.

// * Each route should display an HTML page listing your favorite three things of each.

// * Be sure to use `fs` to serve your HTML files.


// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
  
    case "/":
      return displayRoot(res);
  
    case "/home":
      return displayhome(res);

      case "/food":
      return displayfood(res);

      case "/movies":
      return displaymovies(res);
  
    default:
      return display404(path, res);
    }
  }
  // When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(res) {
    var myHTML = "<html>" +
      "<body><h1>My Favorite Things</h1>" +
      "<a href='/home'>home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayhome(res) {
    var myHTML = "<html>" +
      "<body><h1>My home page</h1>" +
      "<a href='/'>Go Home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  } 
  function displayfood(res) {
    var myHTML = "<html>" +
      "<body><h1>My food page</h1>" +
      "<a href='/'>Go food</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  } 
  function displaymovies(res) {
    var myHTML = "<html>" +
      "<body><h1>My movies page</h1>" +
      "<a href='/'>Go movies</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  } 
  function display404(url, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }