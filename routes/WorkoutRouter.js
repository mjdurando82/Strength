const router = require('express').Router()
const controller = require('../controllers/WorkoutController')
const middleware = require('../middleware')

router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createWorkout
)

router.get(
  '/user/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getWorkoutbyUserId
)

router.get('/posts', controller.getPosts)

router.get('/one/:id', controller.getWorkoutById)

router.get('/all', controller.getWorkouts)

router.delete(
  '/delete/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteWorkout
)

router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateWorkout
)
module.exports = router
