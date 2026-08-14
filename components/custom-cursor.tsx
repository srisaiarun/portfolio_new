"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  active: boolean;
};

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();

    media.addEventListener("change", updateEnabled);

    return () => {
      media.removeEventListener("change", updateEnabled);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='active']");

      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(interactive),
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  const size = useMemo(() => (cursor.active ? 44 : 18), [cursor.active]);

  if (!enabled || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden rounded-full border border-red-500/60 bg-red-500/15 mix-blend-screen md:block"
      animate={{
        x: cursor.x - size / 2,
        y: cursor.y - size / 2,
        width: size,
        height: size,
        opacity: 1,
      }}
      transition={{
        x: { type: "spring", stiffness: 480, damping: 38, mass: 0.22 },
        y: { type: "spring", stiffness: 480, damping: 38, mass: 0.22 },
        width: { duration: 0.18 },
        height: { duration: 0.18 },
      }}
    />
  );
}
