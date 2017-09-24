var express = require("express"); //import express
var app = express(); //initialises the server

/* We us the method .listen on port 3000. It takes two arguments, the
port and a callback function telling us what to do when the server is running.
When the server is running we will see the message below in the console.*/

/* Now we have built a server we want to communicate with it. We control the
server with a handler function. When a request for info reaches the server
we need a way to respond --- this is where a handler function comes in.

The handler function takes a request and response and sends the response back
to the client.

The get method is used to define a handler function in Express. It takes two
parameters... the endpoint (for example "/") which triggers an action and
the handler function which tells it what to do at this point. */

/*To send a message back to the client we're going to use the Express send()
method */
// app.get("/", function(req,res) {
//   res.send("Yay, I sent a message!");
// });
/*To serve static assets(HTML,CSS etc) we use express.static()*/

app.use(express.static("public"));


app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
