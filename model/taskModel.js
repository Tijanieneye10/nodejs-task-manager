import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const Task = mongoose.model('task', taskSchema);

export default Task;