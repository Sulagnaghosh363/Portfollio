import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // sanitize geometry: hide any mesh with NaN positions
  useEffect(() => {
    if (!computer || !computer.scene) return;
    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry && child.geometry.attributes.position) {
        const arr = child.geometry.attributes.position.array;
        for (let i = 0; i < arr.length; i++) {
          if (Number.isNaN(arr[i])) {
            // replace material with invisible one and dispose geometry to avoid compute errors
            child.visible = false;
            try {
              child.geometry.dispose();
            } catch (e) {}
            if (child.material) {
              try {
                if (Array.isArray(child.material)) {
                  child.material.forEach((m) => m.dispose());
                } else {
                  child.material.dispose();
                }
              } catch (e) {}
            }
            break;
          }
        }
      }
    });
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center px-6 text-center text-secondary sm:h-[480px]">
        <div className="max-w-md rounded-3xl border border-white/10 bg-black-100/70 p-8 shadow-[0_0_60px_rgba(145,94,255,0.12)] backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-[#915EFF]">3D preview</p>
          <h3 className="mt-3 text-2xl font-bold text-white">Desktop mockup hidden on mobile</h3>
          <p className="mt-4 text-sm leading-6 text-secondary">
            This keeps the hero responsive on phones while the desktop version
            still shows the full interactive model.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
