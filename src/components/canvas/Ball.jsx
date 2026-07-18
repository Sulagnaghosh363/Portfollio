import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal, setDecal] = useState(null);

  useEffect(() => {
    let mounted = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = props.imgUrl;
    img.onload = () => {
      if (!mounted) return;
      const tex = new THREE.Texture(img);
      tex.needsUpdate = true;
      setDecal(tex);
    };
    img.onerror = () => {
      if (!mounted) return;
      setDecal(null);
    };
    return () => {
      mounted = false;
    };
  }, [props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (!icon) {
      setReady(false);
      return () => (mounted = false);
    }
    // Try to preload the icon. If it fails, don't render the canvas.
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = icon;
    img.onload = () => {
      if (!mounted) return;
      setReady(true);
    };
    img.onerror = () => {
      if (!mounted) return;
      setReady(false);
    };
    return () => {
      mounted = false;
    };
  }, [icon]);

  if (!ready) return null;

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
