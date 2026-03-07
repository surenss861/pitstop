"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const WHEEL_URL = "/tuner_car_wheel_free.glb";

// Tilt so rim/spokes read — not flat dead-on. Slight angle = depth and silhouette.
const WHEEL_TILT_X = 0.25;

function WheelModel({ mobile, reduceMotion }: { mobile: boolean; reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(WHEEL_URL);

  const { clonedScene, scale } = useMemo(() => {
    const clone = scene.clone();
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const targetSize = 2;
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
              m.metalness = Math.max(m.metalness, 0.82);
              m.roughness = Math.min(m.roughness, 0.28);
              m.envMapIntensity = 1.4;
              // Readable metal, not crushed black — luxury = visible form
              m.color = new THREE.Color(0.42, 0.42, 0.45);
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
        groupRef.current.rotation.x = WHEEL_TILT_X + state.pointer.y * 0.02;
        groupRef.current.rotation.z = state.pointer.x * -0.015;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0.55, -0.05, 0]}
      scale={scale}
      rotation={[WHEEL_TILT_X, 0, 0]}
    >
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
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ mobile, reduceMotion }: { mobile: boolean; reduceMotion: boolean }) {
  return (
    <>
      <color attach="background" args={["#0d0d0d"]} />

      {/* Strong key from upper front-right — readable form, no crush */}
      <directionalLight
        position={[2.5, 3, 2.5]}
        intensity={1.8}
        castShadow={false}
      />

      {/* Softer cool fill from left */}
      <directionalLight position={[-2.5, 0.5, 1.5]} intensity={0.65} />

      {/* Rear rim light — silhouette separation from background */}
      <pointLight
        position={[0.3, 0.2, -1.5]}
        intensity={0.7}
        color="#c9a227"
        distance={5}
        decay={2}
      />

      {/* Amber accent front-right — one metallic highlight streak feel */}
      <pointLight
        position={[1.8, 0.8, 1.2]}
        intensity={0.5}
        color="#c9a227"
        distance={6}
      />

      {/* Dim ambient so blacks don't crush — form still reads */}
      <ambientLight intensity={0.5} />

      <Suspense
        fallback={
          <mesh position={[0.5, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#444" metalness={0.8} roughness={0.3} />
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
      camera={{
        position: [-0.35, 0.08, 1.15],
        fov: 48,
      }}
      dpr={mobile ? [1, 1.2] : [1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="w-full h-full"
    >
      <Scene mobile={mobile} reduceMotion={reduceMotion} />
    </Canvas>
  );
}
