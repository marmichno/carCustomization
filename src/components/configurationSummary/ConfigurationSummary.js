import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export const ConfigurationSummary = () => {

    const currentCar = useSelector(state => state.changeCarReducer);
    const currentEngine = useSelector(state => state.selectCarEngineReducer);
    const currentGearbox = useSelector(state => state.selectCarGearboxReducer);
    const currentColor = useSelector(state => state.selectCarColorReducer);

    const [price, setPrice] = useState(0);

    useEffect(() => {
        if(currentCar.id !== undefined){
            setPrice(currentCar.carModel.basePrice + currentEngine.addPrice + currentGearbox.addPrice + currentColor.addPrice);
        }
    },[currentCar, currentEngine, currentGearbox, currentColor]);

    return(
        <>
            <div>
                <h4>Engine: {currentEngine.engine}</h4>
            </div>
            <div>
                <h4>Gearbox: {currentGearbox.gearboxType}</h4>
            </div>
            <div>
                <h4>Color: {currentColor.colorName}</h4>
            </div>
            <div>
                <h4>Price: {price.toFixed(2)}$</h4>
            </div>
        </>
    )
}