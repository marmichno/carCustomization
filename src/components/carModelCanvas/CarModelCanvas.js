import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber'
import {CarModel} from '../car/CarModel';
import { OrbitControls, ContactShadows, Environment} from '@react-three/drei'
import { ReactReduxContext, Provider } from 'react-redux';

export const CarModelCanvas = ({currentColor}) => {
    
    return(
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Canvas camera={{ position: [8, 8, 8], fov: 15 }}>
                <Provider store={store}>
                    <spotLight intensity={0.3} position={[5, 20, 20]}/>
                    <Suspense fallback={null}>
                    <CarModel/>
                    <Environment files="/resources/hdr/hdr.hdr"/>
                    <ContactShadows rotation-x={Math.PI / 2} position={[-8, 0, 8]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                    </Suspense>
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}/>
                </Provider>
            </Canvas>
        )}
        </ReactReduxContext.Consumer>
    )
}