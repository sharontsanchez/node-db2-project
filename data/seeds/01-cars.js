// STRETCH
const cars = [{
    vin: '2CNBJ134146900067',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmisson: 'manual'
},
{
    vin: '3C8FY68B82T297664',
    make: 'toyota',
    model: 'corolla',
    mileage: 115000,
    title: 'savage',
}, 

{
    vin: 'JH4DB1550PS001359',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
},
]

// exports.seed = function (knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex)
 {
     await knex('cars').truncate()
     await knex('cars').insert(cars)
 }