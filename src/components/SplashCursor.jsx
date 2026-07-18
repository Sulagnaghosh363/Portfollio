import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const SplashCursor = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: coarse)")?.matches &&
      !window.matchMedia?.("(any-pointer: fine)")?.matches;
    if (isTouchDevice) return;

    const handleDown = (event) => {
      const id = Date.now() + Math.random();
      setRipples((current) => [...current, { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((r) => r.id !== id));
      }, 700);
    };

    window.addEventListener("mousedown", handleDown);
    console.log("SplashCursor mounted (ripple only)");

    return () => {
      window.removeEventListener("mousedown", handleDown);
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="splash-ripple"
          style={{ transform: `translate3d(${r.x}px, ${r.y}px, 0)` }}
        />
      ))}
    </>,
    document.body
  );
};

export default SplashCursor;
