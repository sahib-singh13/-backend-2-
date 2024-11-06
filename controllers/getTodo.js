// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        // Response
        res.status(200).json({
            success: true,
            data: todos,  // Use `todos` instead of `response`
            message: "Data retrieved successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};

exports.getTodoById = async (req, res) => {
   
        try{
            const id=req.params.id;
            const todo=await Todo.findById({_id: id})

            if(!todo) {
                return res.status(404).json({
                    success:false,
                    message:"NO data with given id",
                })
            }

            res.status(200).json({
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`,
            })
        }
     catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: 'Server Error',
        });
       
    }
};

