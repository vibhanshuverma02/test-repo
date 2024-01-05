const express = require('express');
const fs = require('fs');
//const path = require('path');
const app = express(); 

 /*app.get ("/files", function(req,res){
  s.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.status(200).json(files);
    });*/

app.get("/files/:filename",function( req, res){
  const name = req.params.filename ;
  console.log(name);
  fs.readFile( name , "utf-8", function ( err,data ){
    res.send({data});
  })
});

app.listen(8000);