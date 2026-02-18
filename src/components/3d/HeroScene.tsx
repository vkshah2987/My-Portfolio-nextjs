"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={sphereRef}>
            <MeshDistortMaterial
                color="#2997ff"
                attach="material"
                distort={0.4} // Strength, 0 disables the effect (default=1)
                speed={1.5} // Speed (default=1)
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} /> */}
            </Canvas>
        </div>
    );
}
