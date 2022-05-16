const Planet = require('./planet')
const infoConvert = require('./infoConvert')

let planets = [
    new Planet("Mercurio", 0.39),
    new Planet("Venus", 0.72),
    new Planet("Terra", 1)
]

planets.forEach(planetas => {
    let distanceInKm = infoConvert.convertAUtoKm(planetas.auToSun).toFixed(2)
    console.log(`${planetas.name} - Distância: ${planetas.auToSun}AU - Em ${distanceInKm}km`)
})
