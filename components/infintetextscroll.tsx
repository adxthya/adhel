// components/InfiniteSkills.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Code2,
  Braces,
  Paintbrush,
  Cpu,
  Boxes,
  Database,
  Cloud,
  Terminal,
  Bot,
  Atom,
  Layers,
  Wrench,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Paintbrush },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "TailwindCSS", icon: Paintbrush },
  { name: "Python", icon: Terminal },
  { name: "Node.js", icon: Cpu },
  { name: "Express.js", icon: Wrench },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Firebase", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Boxes },
  { name: "Kubernetes", icon: Boxes },
  { name: "AI/ML", icon: Bot },
  { name: "Git", icon: Wrench },
];

type Props = {
  // speed in pixels per second (higher → faster). tweak as you like.
  speedPxPerSec?: number;
};

export default function InfiniteSkills({ speedPxPerSec = 120 }: Props) {
  const firstRef = useRef<HTMLDivElement | null>(null); // the single copy we measure
  const wrapperControls = useAnimation();
  const [copyWidth, setCopyWidth] = useState(0);

  // measure width of first copy and update on resize
  useEffect(() => {
    const el = firstRef.current;
    if (!el) return;

    const measure = () => {
      // offsetWidth includes padding and borders — good for our px-based animation
      setCopyWidth(el.offsetWidth);
    };

    measure();

    // ResizeObserver is ideal; fallback to window resize
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // start (and restart) animation whenever copyWidth changes
  useEffect(() => {
    if (!copyWidth) return;

    // stop any running animation, snap to 0, then start new one
    wrapperControls.stop();
    wrapperControls.set({ x: 0 });

    // duration computed so visual speed is ~constant across screen sizes
    const durationSec = Math.max(6, copyWidth / speedPxPerSec);

    wrapperControls.start({
      x: -copyWidth,
      transition: {
        duration: durationSec,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [copyWidth, speedPxPerSec, wrapperControls]);

  // chip renderer
  const renderChips = (useRefForFirst = false) => (
    <div
      ref={useRefForFirst ? firstRef : null}
      className="flex items-center gap-4 whitespace-nowrap"
      aria-hidden={!useRefForFirst} // only the first copy needs to be accessible for measurement
    >
      {skills.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={`${s.name}-${i}-${useRefForFirst ? "a" : "b"}`}
            className="flex items-center gap-2 border border-neutral-700 rounded-full px-4 py-2 min-w-max shadow-sm"
          >
            <Icon
              size={18}
              className="text-indigo-400"
            />
            <span className="text-gray-200 font-medium text-sm">{s.name}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="overflow-hidden w-full py-6">
      {/* motion container that slides left by exactly `-copyWidth` pixels */}
      <motion.div
        animate={wrapperControls}
        initial={{ x: 0 }}
        className="flex gap-8 will-change-transform"
        style={{ display: "flex" }}
      >
        {/* first measured copy */}
        {renderChips(true)}
        {/* second copy (identical) */}
        {renderChips(false)}
      </motion.div>
    </div>
  );
}
