const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const taskSchema = new Schema({
    username:{type:String,required:true,unique:true},
    task:{type:String,required:true}
})

const taskModel=model('task',taskSchema);

module.exports= taskModel;