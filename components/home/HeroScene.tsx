"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const WHEEL_URL = "/tuner_car_wheel_free.glb";

function WheelModel({ mobile, reduceMotion }: { mobile: boolean; reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(WHEEL_URL);

  const { clonedScene, scale } = useMemo(() => {
    const clone = scene.clone();
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const targetSize = 1.8;
    const scale = targetSize / maxDim;

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mats = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];
          const newMats = mats.map((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              const m = mat.clone();
              m.metalness = Math.max(m.metalness, 0.75);
              m.roughness = Math.min(m.roughness, 0.45);
              m.envMapIntensity = 1.2;
              m.color = new THREE.Color(0.28, 0.28, 0.3);
              return m;
            }
            return mat;
          });
          mesh.material = newMats.length === 1 ? newMats[0] : newMats;
        }
      }
    });
    return { clonedScene: clone, scale };
  }, [scene]);

  const rotationSpeed = reduceMotion ? 0 : mobile ? 0.008 : 0.018;

  useFrame((state) => {
    if (groupRef.current && !reduceMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
      if (!mobile) {
        groupRef.current.rotation.x = state.pointer.y * 0.02;
        groupRef.current.rotation.z = state.pointer.x * -0.015;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0.4, 0, 0]} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

function WheelParticles({ mobile }: { mobile: boolean }) {
  const count = mobile ? 12 : 28;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = 0.3 + Math.random() * 1.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }
    return pos;
  }, [count]);

  return (
    <points position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={mobile ? 0.02 : 0.03}
        color="#c9a227"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ mobile, reduceMotion }: { mobile: boolean; reduceMotion: boolean }) {
  return (
    <>
      <color attach="background" args={["#0d0d0d"]} />

      <directionalLight position={[2, 4, 3]} intensity={1.2} castShadow={false} />
      <directionalLight position={[-2, 1, 2]} intensity={0.7} />
      <pointLight position={[1.5, 0.5, 1]} intensity={0.6} color="#c9a227" distance={8} />
      <pointLight position={[-1, -0.5, 1]} intensity={0.25} color="#a0b0c0" distance={6} />
      <ambientLight intensity={0.35} />
      <pointLight position={[1.2, 0, -0.8]} intensity={0.4} color="#c9a227" distance={5} decay={2} />

      <Suspense
        fallback={
          <mesh position={[0.5, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.3} />
          </mesh>
        }
      >
        <WheelModel mobile={mobile} reduceMotion={reduceMotion} />
      </Suspense>
      <WheelParticles mobile={mobile} />
    </>
  );
}

type HeroSceneProps = { mobile?: boolean; reduceMotion?: boolean };

export default function HeroScene({ mobile = false, reduceMotion = false }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [-0.5, 0, 1.2], fov: 52 }}
      dpr={mobile ? [1, 1.2] : [1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="w-full h-full"
    >
      <Scene mobile={mobile} reduceMotion={reduceMotion} />
    </Canvas>
  );
}

