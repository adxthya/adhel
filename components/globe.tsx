// components/Globe.tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type VantaGlobeFactory = (options: {
  el: HTMLElement;
  THREE: typeof THREE;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number;
  color2?: number;
  backgroundColor?: number;
}) => { destroy: () => void };

export default function Globe() {
  const ref = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    (async () => {
      if (!ref.current) return;

      const vantaModule: unknown = await import("vanta/dist/vanta.globe.min");

      let createGlobe: VantaGlobeFactory | null = null;

      if (typeof vantaModule === "function") {
        createGlobe = vantaModule as VantaGlobeFactory;
      } else if (
        typeof (vantaModule as { default?: unknown }).default === "function"
      ) {
        createGlobe = (vantaModule as { default: VantaGlobeFactory }).default;
      } else if (
        typeof (vantaModule as { GLOBE?: unknown }).GLOBE === "function"
      ) {
        createGlobe = (vantaModule as { GLOBE: VantaGlobeFactory }).GLOBE;
      } else if (
        typeof (vantaModule as { default?: { GLOBE?: unknown } }).default
          ?.GLOBE === "function"
      ) {
        createGlobe = (vantaModule as { default: { GLOBE: VantaGlobeFactory } })
          .default.GLOBE;
      }

      if (!createGlobe) {
        console.warn("Vanta Globe: couldn't find a valid factory", vantaModule);
        return;
      }

      effectRef.current = createGlobe({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x6366f1,
        color2: 0x8b5cf6,
        backgroundColor: 0x0f172a,
      });
    })();

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-screen"
    />
  );
}
