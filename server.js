//dependencies
const express = require("express");
const fs = require("fs");

// Tells node that we are creating an "express" server
const app = express();

//inital port
const PORT = process.env.PORT || 3000;

//Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//"starts" server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
