// LOAD DATA
// We are linking our routes to a series of "data" sources. These data sources hold arrays of information 
const fs = require ('fs')

// ROUTING
module.exports = (app) => {

  //GET the api
  app.get('/api/notes', function(req, res) {
    // Here we use the fs package to read our db.json file
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      //parsing the data
      dbData = JSON.parse(data);
      //response to send dbData
      res.send(dbData);
    });
  });
};