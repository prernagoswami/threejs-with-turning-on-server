import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {

  const meshref = useRef();

  useFrame(() =>{
    if(meshref.current){
      meshref.current.rotation.y +=0.01;
      meshref.current.rotation.x +=0.01;
      meshref.current.rotation.z +=0.01;
    }

    
  })
  return(
    <mesh ref = {meshref}>
      <cylinderGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial color="#468585" emissive="#468585"/>

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="yellow"/>
    </mesh>
  )
}

const App = () => {
  return(
    <Canvas style = {{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OrbitControls enableZoom enablePan enableRotate/>

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6}/>
      
      <color attach="background" args={['#F0F0F0']}/>

      <RotatingCube/>

    </Canvas>
  )
}

export default App;