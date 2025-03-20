
import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment } from '@react-three/drei';
import { Color, Mesh, Group } from 'three';

const Model = () => {
  const meshRef = useRef<Mesh>(null);
  
  // Wrap texture loading in try/catch to prevent errors from breaking the entire component
  let texture;
  try {
    texture = useTexture('/placeholder.svg');
  } catch (error) {
    console.error("Failed to load texture:", error);
    // Continue without texture if it fails to load
  }

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

// Error boundary for three.js content
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ThreeDBackground error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="absolute inset-0 flex items-center justify-center bg-chen-sand/30">
        <div className="text-chen-brown text-lg">Failed to load 3D scene</div>
      </div>;
    }

    return this.props.children;
  }
}

// Fallback component to show when 3D content is loading
const LoadingFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-chen-sand/30">
    <div className="text-chen-brown text-lg">Loading 3D scene...</div>
  </div>
);

const ThreeDBackground = () => {
  const [mounted, setMounted] = useState(false);

  // Use useEffect to ensure we're only rendering the Canvas on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet (during server-side rendering), render a loading state
  if (!mounted) {
    return <LoadingFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }} 
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            dpr={[1, 2]} // Optimize performance by setting device pixel ratio
          >
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
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeDBackground;
