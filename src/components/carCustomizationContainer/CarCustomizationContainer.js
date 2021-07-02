
import {CarModelCanvas} from '../carModelCanvas/CarModelCanvas';
import {ChangeCar} from '../changeCar/ChangeCar';
import {CarOptions} from '../carOptions/CarOptions';
import { ConfigurationSummary } from '../configurationSummary/ConfigurationSummary';

export const CarCustomizationContainer = () => {

    return(
        <div className="customizationMainContainer">
            <div className="changeCarContainer">
                <ChangeCar></ChangeCar>
            </div>
            <div className="canvas">
                <CarModelCanvas></CarModelCanvas>
            </div>
            <div className="configurationSummary">
                <ConfigurationSummary></ConfigurationSummary>
            </div>
            <div className="optionsContainer">
                <CarOptions></CarOptions>
            </div>
        </div>
    )
}