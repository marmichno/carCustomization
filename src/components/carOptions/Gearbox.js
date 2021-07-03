import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useCallback} from 'react';
import {selectCarGearbox} from '../../actions';

export const Gearbox = ({currentCar}) => {

    const currentGearbox = useSelector(state => state.selectCarGearboxReducer);
    const currentEngine = useSelector(state => state.selectCarEngineReducer);
    const dispatch = useDispatch();

    
    //find default Gearbox - addPrice === 0 if engine is only avaiable with automatic transmission select automatic instead
    const defaultGearbox = useCallback(() => {
        if(currentEngine.onlyAutomaticGearbox){
            return currentCar.avaiableConfiguration.gearbox.filter(value => value.gearboxType === "automatic" ? true : false)[0];
        }else{
            return currentCar.avaiableConfiguration.gearbox.filter(value => value.addPrice === 0 ? true : false)[0];
        }
    },[currentCar.avaiableConfiguration.gearbox, currentEngine.onlyAutomaticGearbox]);

    //set default gearbox after car change / on initial render
    useEffect(() => {
        dispatch(selectCarGearbox(defaultGearbox()));
    },[currentCar, defaultGearbox, dispatch]);

    //find clicked gearbox
    const changeGearbox = (e) =>{
        const clickedGearbox = e.target.dataset.gearbox;
        dispatch(selectCarGearbox(currentCar.avaiableConfiguration.gearbox.filter(value => value.gearboxType === clickedGearbox ? true : false)[0]));
    }

    return(
        <div className="optionContainer">
            <h2>Gearbox</h2>
            <div className="buttonsContainer">
                {currentCar.avaiableConfiguration.gearbox.map(value => {
                    if(currentEngine.onlyAutomaticGearbox){
                        return value.gearboxType === "automatic" ? <button key={value.gearboxType}>{value.gearboxType}</button> : null;
                    }else{
                    return value === currentGearbox ? 
                    <button key={value.gearboxType}>{value.gearboxType}</button>
                    :
                    <button key={value.gearboxType} data-gearbox={value.gearboxType} onClick={changeGearbox} style={{opacity:"0.4"}}>{value.gearboxType}</button>
                    }
                })}
            </div>
        </div>
    )
}