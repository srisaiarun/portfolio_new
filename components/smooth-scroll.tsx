"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function smoothScrollTo(
  target: HTMLElement,
  options?: {
    duration?: number;
    immediate?: boolean;
  },
) {
  if (!lenisInstance) {
    target.scrollIntoView({
      behavior: options?.immediate ? "auto" : "smooth",
      block: "start",
    });

    return;
  }

  lenisInstance.scrollTo(target, {
    duration: options?.duration ?? 1.15,
    immediate: options?.immediate ?? false,
    lock: false,
  });
}

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window
      .matchMedia(
        "(prefers-reduced-motion: reduce)",
      )
      .matches;

    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);

      if (lenisInstance === lenis) {
        lenisInstance = null;
      }

      lenis.destroy();
    };
  }, []);

  return null;
}