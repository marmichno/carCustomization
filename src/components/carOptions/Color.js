import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {selectCarColor} from '../../actions';

export const Color = ({currentCar}) => {

    const currentColor = useSelector(state => state.selectCarColorReducer);
    const dispatch = useDispatch();

    //set default color after car change / on initial render
    useEffect(() => {
        dispatch(selectCarColor(defaultColor()));
    },[currentCar]);

    //find default color - addPrice === 0
    const defaultColor = () => {
        return currentCar.avaiableConfiguration.colors.filter(value => value.addPrice === 0 ? true : false)[0];
    }

    //find clicked color
    const changeColor = (e) =>{
        const clickedColor = e.target.dataset.colorid;
        dispatch(selectCarColor(currentCar.avaiableConfiguration.colors.filter(value => value.hexValue === clickedColor ? true : false)[0]));
    }

    return(
        <div className="optionContainer">
            <h3>Color</h3>
            <div className="colorsContainer">
                {currentCar.avaiableConfiguration.colors.map(value => {
                    return value === currentColor ? 
                    <button style={{backgroundColor:value, transform:"scale(1.2)"}}></button> 
                    : 
                    <button onClick={changeColor} data-colorid={value.hexValue} style={{backgroundColor:value.hexValue, opacity:"0.4"}}></button>
                })}
            </div>
        </div>
    )
}