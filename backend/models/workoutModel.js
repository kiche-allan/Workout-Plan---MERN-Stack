const mongoose = require('mongoose')


//make the schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

//make a model based on the schema
module.exports = mongoose.model('workout', workoutSchema)
