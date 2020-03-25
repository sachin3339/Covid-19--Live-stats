const express = require('express');
const app=express();
const fetch = require("node-fetch");
 var cases=0;
module.exports=(app)=>
{
    app.get('/home',(req,res)=>{

        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "5c7234d604mshc5a58d5c18d5ae3p178bcejsn46e9c8607b1a"
            }
        })
        .then(response => response.json().then(data =>{
            let countries_stat = data.countries_stat;
            
        cases=countries_stat[0].cases;
        console.log(cases);
        
        }))
            .catch(err => {
                console.log(err);
            });

        res.render('worldmap',{count:cases})
    })
   
    
   app.get('/',(req,res)=>{
        res.render('table')
    })


    app.get('/chart',(req,res)=>{
        res.render('chartvisual')
    })

}




