export const selectCarGearboxReducer = (state = {}, action) => {

    const carGearbox = action.payload;

    switch(action.type){
        case 'SELECTCARGEARBOX':

        return state = carGearbox;

        default:
            return state;
    }
}

export default selectCarGearboxReducer