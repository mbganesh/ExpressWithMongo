const express = require('express');
const app = express();
app.use(express.json());
const url = "mongodb://localhost:27017/Netcom";


// MainRouter
app.get('/' , (req , res ) => {
    res.json("Hello,World!");
});

// Routers
const staffRouter = require('./routers/staffs')
app.use('/staff' , staffRouter);



// DB
const mongoose = require('mongoose')
mongoose.connect(url)
const con = mongoose.connection;
con.on('open' , ()=>{
    console.log('DB Status Checked!')
})

// LocalHost
app.listen(3000 , () =>{
    console.log("Server Started on 3000 Port")
})