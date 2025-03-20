
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment } from '@react-three/drei';
import { Color, Mesh, Group } from 'three';

const Model = () => {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture('/placeholder.svg');

  // Rotate the mesh slowly
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial 
        color={new Color("#8B4513")} 
        metalness={0.5}
        roughness={0.3}
        map={texture}
      />
    </mesh>
  );
};

// Add additional decorative objects
const AfricanPatterns = () => {
  // Fix: Change the ref type from Mesh to Group
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={group}>
      {[...Array(15)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 0.5) * 3.5, 
          Math.cos(i * 0.3) * 3.5, 
          Math.sin(i * 0.4) * 3.5
        ]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#D4AF37" : "#A0522D"} 
            emissive={i % 2 === 0 ? "#D4AF37" : "#A0522D"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
        <Model />
        <AfricanPatterns />
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableDamping 
          dampingFactor={0.05} 
        />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
