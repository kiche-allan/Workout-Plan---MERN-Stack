//use epress router

const express = require('express')
const {
       getWorkouts,
       getWorkout,
       createWorkout,
       deleteWorkout,
       updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//requiring authorization for all workoutes
router.use(requireAuth)
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