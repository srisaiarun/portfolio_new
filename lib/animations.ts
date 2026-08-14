import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp = (distance = 28): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
});

export const fadeIn = (): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
});

export const revealLeft = (): Variants => ({
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
});

export const revealRight = (): Variants => ({
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
});
