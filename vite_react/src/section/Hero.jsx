import React, { Suspense } from "react"
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-4xl text-3xl font-medium text-white text-center font-generalsans">
                    Hi, I am Prerna <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient ">
                    Building Projects and Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <HackerRoom scale={0.5} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}/>

                    <ambientLight intensity={1}/>
                    </Suspense>
                </Canvas>
  
            </div>
        </section>
    )
}

export default Hero