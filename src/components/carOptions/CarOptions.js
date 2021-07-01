import { useState } from 'react';
import {useSelector} from 'react-redux';
import {Color} from './Color';
import {Engine} from './Engine';
import {Gearbox} from './Gearbox';

export const CarOptions = () =>{

    const currentCar = useSelector(state => state.changeCarReducer);

    return(
        <>
        {currentCar.id !== undefined ? 
        <>
            <div className="headerContainer">
                <h2>Customization</h2>
                <h2>{currentCar.carModel.model}</h2>
            </div>
            <Engine currentCar={currentCar}></Engine>
            <Gearbox currentCar={currentCar}></Gearbox>
            <Color currentCar={currentCar}></Color>
        </>
            : 
            <div className="headerContainer">
                <h2>Car configuration</h2>
            </div>
            }
        </>
    )
}