//use epress router

const express = require('express')
const {
       getWorkouts,
       getWorkout,
       createWorkout,
       deleteWorkout,
       updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

//attach a handler

// router.get('/', (req, res) => {
//     res.json({message: 'Gt all workouts'})
// })

//get all workouts
router.get('/', getWorkouts)


//get a single workout

    router.get('/:id', getWorkout)


//POST a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout

router.patch('/:id', updateWorkout)

module.exports = router