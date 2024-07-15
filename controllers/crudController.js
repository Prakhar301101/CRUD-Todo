
const Task=require('../models/task');

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
module.exports.createTask = async (req,res)=>{
    const {username,task} =req.body;
    try{    
        const taskDoc= await Task.create({username,task});
        res.status(200).json(taskDoc);
    }catch(err){
        res.status(400).json(err);
    }
}


// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
module.exports.getTasks= async (req,res)=>{
    try{
        const taskData=await Task.find();
        res.status(200).json(taskData);
    }catch(err){
        res.status(400).json(err);
    }
}


// @desc    update tasks
// @route   PUT /api/tasks/:id
// @access  Private
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


// @desc    delete tasks
// @route   DELETE /api/tasks/:id
// @access  Private
module.exports.deleteTaskById= async (req,res)=>{
    const taskId=req.params.id;
    try{
        await Task.findByIdAndDelete(taskId);
        res.status(200).json("Entry deleted!");
      }catch(err){
        res.status(400).json(err);
      }
}