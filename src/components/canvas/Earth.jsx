import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // sanitize geometry: remove any mesh with NaN positions synchronously
  if (earth && earth.scene) {
    const toRemove = [];
    earth.scene.traverse((child) => {
      if (child.isMesh && child.geometry && child.geometry.attributes.position) {
        const arr = child.geometry.attributes.position.array;
        for (let i = 0; i < arr.length; i++) {
          if (Number.isNaN(arr[i])) {
            toRemove.push(child);
            break;
          }
        }
      }
    });
    toRemove.forEach((child) => {
      child.visible = false;
      try { child.parent?.remove(child); } catch (_) {}
      try { child.geometry.dispose(); } catch (_) {}
      try {
        if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
        else child.material?.dispose();
      } catch (_) {}
    });
  }

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
