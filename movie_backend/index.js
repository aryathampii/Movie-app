const express = require('express');
const Movie = require('./models/Movie');



const app = new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('http://localhost:3008/addmovie',async(req,res)=>{
    console.log(req.body)
    var data  = await Movie(req.body);
    data.save();
    res.send({status:"data saved"})
})

app.get('http://localhost:3008/viewmovie',async(req,res)=>{
    var data = await Movie.find();
    res.json(data);
})


app.listen(3008,()=>{
    console.log("app is running in port 3008")
})
