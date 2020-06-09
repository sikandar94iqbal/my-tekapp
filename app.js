const app = require('express')()


// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});
 
module.exports.app = app;


app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);