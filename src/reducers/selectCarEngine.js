export const selectCarEngineReducer = (state = {}, action) => {

    const carEngine = action.payload;

    switch(action.type){
        case 'SELECTCARENGINE':

        return state = carEngine;

        default:
            return state;
    }
}

export default selectCarEngineReducer