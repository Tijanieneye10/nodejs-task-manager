import Task from "../model/taskModel.js";

export const getAllTasks  = async (req, res) => {

   const tasks = await Task.find({});

   if(tasks.length > 0){

       return res.status(200).json({tasks})
   }

   return res.status(404).json({message: "No tasks found"})
}

export const getSingleTask = async (req, res) =>{

    try {
        const task = await Task.findById(req.params.id);

        if(task){
            return res.status(200).json({task})
        }
        return res.status(404).json({message: "Task not found"})

    } catch (error) {
        console.log(error);
    }
        
}
    

export const createTask = async (req, res) =>{

    try {
        const task = new Task({

            title: req.body.title,
            description: req.body.description,
            completed: false

        });
        const createdTask = await task.save();
        res.status(201).json({ createdTask });
    } catch (error) {
        console.log(error.message);
    }
  
}

export const toggleCompleted = async (req, res) =>{

 try {
    const task = await Task.findById(req.params.id);

    if(task){
        task.completed = !task.completed;
        const updatedTask = await task.save();
        return res.status(200).json({updatedTask})
    }

    return res.status(404).json({message: "Task not found"})

 } catch (error) {

     console.log(error.message);
 }
}