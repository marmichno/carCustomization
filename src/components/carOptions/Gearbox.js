import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {selectCarGearbox} from '../../actions';

export const Gearbox = ({currentCar}) => {

    const currentGearbox = useSelector(state => state.selectCarGearboxReducer);
    const currentEngine = useSelector(state => state.selectCarEngineReducer);
    const dispatch = useDispatch();

    //set default gearbox after car change / on initial render
    useEffect(() => {
        dispatch(selectCarGearbox(defaultGearbox()));
    },[currentCar]);

    //find default Gearbox - addPrice === 0 if engine is only avaiable with automatic transmission select automatic instead
    const defaultGearbox = () => {
        if(currentEngine.onlyAutomaticGearbox){
            return currentCar.avaiableConfiguration.gearbox.filter(value => value.gearboxType === "automatic" ? true : false)[0];
        }else{
            return currentCar.avaiableConfiguration.gearbox.filter(value => value.addPrice === 0 ? true : false)[0];
        }
    }

    //find clicked gearbox
    const changeGearbox = (e) =>{
        const clickedGearbox = e.target.dataset.gearbox;
        dispatch(selectCarGearbox(currentCar.avaiableConfiguration.gearbox.filter(value => value.gearboxType === clickedGearbox ? true : false)[0]));
    }

    return(
        <div className="optionContainer">
            <h3>Gearbox</h3>
            <div className="buttonsContainer">
                {currentCar.avaiableConfiguration.gearbox.map(value => {
                    if(currentEngine.onlyAutomaticGearbox){
                        dispatch(selectCarGearbox(currentCar.avaiableConfiguration.gearbox.filter(value => value.gearboxType === "automatic" ? true : false)[0]));
                        return value.gearboxType === "automatic" ? <button>{value.gearboxType}</button> : null;
                    }else{
                    return value === currentGearbox ? 
                    <button>{value.gearboxType}</button>
                    :
                    <button data-gearbox={value.gearboxType} onClick={changeGearbox} style={{opacity:"0.4"}}>{value.gearboxType}</button>
                    }
                })}
            </div>
        </div>
    )
}