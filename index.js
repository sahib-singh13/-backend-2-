//we use express through this comments
const express = require("express");
const app=express();

//through these statements we use the import URL host from .env file
require("dotenv").configure();
const PORT =process.env.PORT || 4000;

//instead of body parser for parsing request of json 
// we use express.json
app.use(express.json());


//from here we get the routes that is mentioned in todoes routes that needs to be accessed
//when we call the function using app.use we define initial path in starting of which we can add that
const todoRoutes=require("./routes/todos");
//through all these routes mentioned in the specified files such as GET,POST,PUT,DELETE can 
//be mounted at the end of the given https extension or path below-
app.use("/api/vi",todoRoutes);


//app started at PORT we want to listen
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})

// with the help of dbConnect we are able to enquire from database
const dbConnect = require("./config/database");
dbConnect();

//need to add the default route too on which our website would first redirect
app.get("/",(req,res) => {
      res.send(`<h1>This is HOMEPAGE</h1>`);
})

