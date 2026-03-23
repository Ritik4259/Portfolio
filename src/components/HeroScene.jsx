import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.28;
  });

  return (
    <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6}>
      <Sphere ref={meshRef} args={[1.25, 128, 128]} scale={1.55}>
        <MeshDistortMaterial
          color="#7dd3fc"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.08}
          metalness={0.55}
        />
      </Sphere>
    </Float>
  );
}

function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 48 }}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[2, 3, 2]} intensity={2.5} color="#dbeafe" />
        <pointLight position={[-2, -2, 2]} intensity={2} color="#6ee7b7" />
        <Stars radius={70} depth={45} count={2400} factor={3} saturation={0} fade speed={0.8} />
        <Orb />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}

export default HeroScene;
