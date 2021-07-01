import changeCarReducer from './changeCar';
import selectCarColorReducer from './selectCarColor';
import selectCarEngineReducer from './selectCarEngine';
import selectCarGearboxReducer from './changeCarGearbox';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    changeCarReducer,
    selectCarEngineReducer,
    selectCarGearboxReducer,
    selectCarColorReducer
})

export default allReducers