export const selectCarReducer = (state = {}, action) => {

    const car = action.payload;
    
    switch(action.type){
        case 'SELECTCAR':

        return state = car;

        default:
            return state;
    }
}

export default selectCarReducer