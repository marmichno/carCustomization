import React, {useRef} from 'react'
import {useSelector} from 'react-redux';
import { useGLTF} from '@react-three/drei';
import car1 from '../../resources/carModels/car1.gltf'
import car2 from '../../resources/carModels/car2.gltf'
import car3 from '../../resources/carModels/car3.gltf'
import car4 from '../../resources/carModels/car4.gltf'

export const CarModel = (props) => {
    const group = useRef()
    const currentCar = useSelector(state => state.changeCarReducer);
    const currentColor = useSelector(state => state.selectCarColorReducer);
    
    const { nodes, materials } = useGLTF(`car${currentCar.id}`);
    
    return(
    <group ref={group} {...props} dispose={null} position={[0, -1.1, 0]}>
      <group>
        <mesh geometry={nodes.elements_1.geometry} material={materials.decors} />
        <mesh geometry={nodes.elements_2.geometry} material={materials.body} material-color={currentColor.hexValue}/>
      </group>
    </group>
    )
}
