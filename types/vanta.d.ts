// src/types/vanta-globe.d.ts
declare module "vanta/dist/vanta.globe.min" {
  import * as THREE from "three";

  export interface VantaEffect {
    destroy: () => void;
    [k: string]: unknown;
  }

  export interface VantaGlobeOptions {
    el: HTMLElement | string;
    THREE?: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    [k: string]: unknown;
  }

  export type VantaGlobeFactory = (opts: VantaGlobeOptions) => VantaEffect;

  const VANTA: { GLOBE?: VantaGlobeFactory } | VantaGlobeFactory;
  export default VANTA;
}
