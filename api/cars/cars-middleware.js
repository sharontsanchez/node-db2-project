const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById()
    if(!car){
      next({ status: 404, message: 'not found'})
    } else {
      req.car = car
      next()
    }
} catch(err){
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  next()
}

const checkVinNumberValid = (req, res, next) => {
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
}