// import and create an express app
const express = require('express');
const app = express()
  
// message as response
msg = "ceci est une page créé avec docker compose"
// create an end point of the api
app.get('/', (req, res) => res.send(msg));
  
// now run the application and start listening
// on port 3000
app.listen(8081, () => {
    console.log("app running on port 3000...");
})
