import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber'
import {CarModel} from '../car/CarModel';
import { OrbitControls, Environment} from '@react-three/drei'
import { ReactReduxContext, Provider } from 'react-redux';
import HdrFile from "../../resources/hdr/hdr.hdr";

export const CarModelCanvas = ({currentColor}) => {
    
    return(
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Canvas camera={{ position: [8, 8, 8], fov: 15 }}>
                <Provider store={store}>
                    <spotLight intensity={0.3} position={[5, 20, 20]}/>
                    <Suspense fallback={null}>
                    <CarModel/>
                    <Environment files={HdrFile}/>
                    </Suspense>
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}/>
                </Provider>
            </Canvas>
        )}
        </ReactReduxContext.Consumer>
    )
}