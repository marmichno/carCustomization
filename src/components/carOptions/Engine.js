import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {selectCarEngine} from '../../actions';

export const Engine = ({currentCar}) => {

    const currentEngine = useSelector(state => state.selectCarEngineReducer);
    const dispatch = useDispatch();

    //set default engine after car change / on initial render
    useEffect(() => {
        dispatch(selectCarEngine(defaultEngine()));
    },[currentCar]);

    //find default Engine - addPrice === 0
    const defaultEngine = () => {
    return currentCar.avaiableConfiguration.engines.filter(value => value.addPrice === 0 ? true : false)[0];
    }

    //find clicked engine
    const changeEngine = (e) =>{
        const clickedEngine = e.target.dataset.engine;
        dispatch(selectCarEngine(currentCar.avaiableConfiguration.engines.filter(value => value.engine === clickedEngine ? true : false)[0]));
    }

    return(
        <div className="optionContainer">
            <h3>Engine</h3>
            <div className="buttonsContainer">
                {currentCar.avaiableConfiguration.engines.map(value => {
                    return value === currentEngine ?
                     <button>{value.engine}</button>
                     :
                     <button onClick={changeEngine} data-engine={value.engine} style={{opacity:"0.4"}}>{value.engine}</button>
                })}
            </div>
        </div>
    )
}