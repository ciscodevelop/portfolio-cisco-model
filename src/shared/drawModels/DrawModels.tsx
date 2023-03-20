import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import "./modelDraw.scss";

const Model = () => {
  const gltf = useGLTF(
    "https://ciscodevelop.github.io/portfolio-cisco-model/scene.gltf",
    true
  );
  return <primitive object={gltf.scene} dispose={null} />;
};
const ModelDraw = () => {
  const DrawMesh = ({ position, args, color }: any) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const { viewport } = useThree();
    useFrame(({ mouse }) => {
      const x = (mouse.x - 808) / 2;
      const y = (mouse.y - viewport.height) / 2;
      meshRef.current.rotation.set(-y, x, 0);
    });
    const [clicked, click] = useState(false);
    const clickState = () => {
      click(!clicked);
    };
    return (
      <mesh
        position={[0, 0, 0]}
        scale={clicked ? 2.5 : 1.5}
        onClick={clickState}
        ref={meshRef}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />        
      </mesh>
    );
  };
  return (
    <div className="canvas-model ">
      <Canvas className="canvas " camera={{ position: [-3, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, 0, 200]} intensity={0.5} />
        <pointLight position={[-5, 0, 100]} intensity={1.5} />
        <Suspense fallback={null}>
          <DrawMesh position={[0, 0, 0]} args={[1, 2, 4]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelDraw;
