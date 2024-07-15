const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const taskSchema = new Schema({
    user:{type:Schema.Types.ObjectId,required:true,ref:'User'},
    task:{type:String,required:true}
},
{
    timestamps:true
})

const taskModel=model('task',taskSchema);

module.exports= taskModel;