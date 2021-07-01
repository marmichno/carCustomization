export const selectCar = (carId) => {
    return{
        type: 'SELECTCAR',
        payload: carId
    }
}

export const selectCarColor = (color) => {
    return{
        type: 'SELECTCARCOLOR',
        payload: color
    }
}

export const selectCarEngine = (engine) => {
    return{
        type: 'SELECTCARENGINE',
        payload: engine
    }
}

export const selectCarGearbox = (gearbox) => {
    return{
        type: 'SELECTCARGEARBOX',
        payload: gearbox
    }
}