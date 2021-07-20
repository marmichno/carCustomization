import React, {useRef} from 'react'
import {useSelector} from 'react-redux';
import { useGLTF} from '@react-three/drei';

export const CarModel = (props) => {
    const group = useRef()
    const currentCar = useSelector(state => state.changeCarReducer);
    const currentColor = useSelector(state => state.selectCarColorReducer);
    
    const { nodes, materials } = useGLTF(`../../resources/carModels/car${currentCar.id}.gltf`, true);
    console.log(`../../resources/carModels/car${currentCar.id}.gltf`);
    
    if(currentCar.id !== undefined){
    return(
    <group ref={group} {...props} dispose={null} position={[0, -1.1, 0]}>
      <group>
        <mesh geometry={nodes.elements_1.geometry} material={materials.decors} />
        <mesh geometry={nodes.elements_2.geometry} material={materials.body} material-color={currentColor.hexValue}/>
      </group>
    </group>
    )

  }else{
    return (
      null
    )
  }
}
