//create functions which serve as callback functions for the routes

const Task=require('../models/task');

module.exports.createTask = async (req,res)=>{
    const {username,task} =req.body;
    try{    
        const taskDoc= await Task.create({username,task});
        res.status(200).json(taskDoc);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports.getTasks= async (req,res)=>{
    try{
        const taskData=await Task.find();
        res.status(200).json(taskData);
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports.getTaskById= async (req,res)=>{
    const taskId=req.params.id;
    try{
        const taskData=await Task.findById(taskId);
        if (!taskData) {
            return res.status(400).json({ message: "Task not found" });
        }
        res.status(200).json(taskData);
    }catch(err){
        res.status(400).json(err);
    }
}


module.exports.updateTaskById= async (req,res)=>{
  const taskId=req.params.id;
  const {updatedTask}=req.body;
  try{
    const taskDoc=await Task.findById(taskId);
    taskDoc.task=updatedTask;
    await taskDoc.save();
    res.status(200).json("Changes saved successfully");
  }catch(err){
    res.status(400).json(err);
  }
}

module.exports.deleteTaskById= async (req,res)=>{
    const taskId=req.params.id;
    try{
        await Task.findByIdAndDelete(taskId);
        res.status(200).json("Entry deleted!");
      }catch(err){
        res.status(400).json(err);
      }
}