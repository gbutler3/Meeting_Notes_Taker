// LOAD DATA
// We are linking our routes to a series of "data" sources. These data sources hold arrays of information 
const fs = require ('fs')
var dbData = JSON.parse(fs.readFileSync('/db/db.json','utf8'));
// ROUTING
module.exports = (app) => {

  //GET the api
  app.get('/api/notes', function(req, res) {
    res.json(dbData);
    });


app.get('/api/notes/:id', function(req, res){
  
  res.json(dbData[Number(req.params.id)]);
  });

  app.post('/api/notes', function(req,res) {
    let newNote = req.body;
    let idNum = (data.length).toString();
    newNote.id= idNum;
    data.push(newNote);
  
    fs.writeFileSync('/db/db.json', JSON.stringify(dbData), function(err) {
      if (err) throw (err);
    });
    
    res.json(dbData);
    
  }); 
  
}
