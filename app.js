const express = require('express');
const app=express();
const port=5000; 

require('./routes')(app);

//serving static file
app.use(express.static('public'))

//setting template engine
app.set('view engine','ejs')

app.listen(port,()=>{
    console.log("server is running")
})