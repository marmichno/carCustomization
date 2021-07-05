import {useDispatch, useSelector} from 'react-redux';
import {selectCar} from '../../actions';
import { useState, useEffect } from 'react';

export const ChangeCar = () =>{

    const dispatch = useDispatch();
    const currentCar = useSelector(state => state.changeCarReducer);
    const [carModels, setCarModels] = useState([]);

    //calls get request on initial render
    useEffect(() => {
        getCarModels();
    },[]);

    //simulates get request
    const getCarModels = async () => {
        const request = await import('../../json/carConfiguration.json');
        const response = await request.default;
        setCarModels(response);
    }

    //set first car after initial render
    useEffect(() =>{
        if(carModels[0] !== undefined){
            dispatch(selectCar(carModels[0]));
        }
    },[carModels, dispatch]);


    const changeCar = (e) => {
        const carId = e.target.dataset.id;
        dispatch(selectCar(carModels.filter(value => value.id === parseInt(carId) ? true : false)[0])); //finds selected car in carModels array
    }

    return(
        <div className="sliderContainer">
            <h4>Choose model</h4>
            {carModels === undefined ? null :
                carModels.map(value => {
                    return value === currentCar ?
                    <h3 key={value.id} onClick={changeCar} style={{boxShadow:"0px 6px 0px -5px rgba(255,255,255,1)"}}data-id={value.id}>{value.carModel.model}</h3>
                    :
                    <h3 key={value.id} onClick={changeCar} data-id={value.id}>{value.carModel.model}</h3>
                })
            }
        </div>
    )
}