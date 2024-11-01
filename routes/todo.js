const express=require("express");
const router=express.Router();

//we import the logic that needs to be linked from createTodo to a particular todo
const {createTodo}=require("../controllers/createTodo");

//whenever createtodo extension is hit use the logic of createtodo controlloer
router.post("/createTodo",createTodo);
//finale export
module.exports=router;