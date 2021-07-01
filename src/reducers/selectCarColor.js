export const selectCarColorReducer = (state = {}, action) => {

    const carColor = action.payload;

    switch(action.type){
        case 'SELECTCARCOLOR':

        return state = carColor;

        default:
            return state;
    }
}

export default selectCarColorReducer