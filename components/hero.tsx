"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { brandingFacts, education, personalInfo } from "@/lib/data";

type HeroProps = {
  hasProfileImage: boolean;
  hasSpiderImage: boolean;
};

export function Hero({ hasProfileImage, hasSpiderImage }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const transformStyle = useMemo(() => {
    if (shouldReduceMotion) {
      return {};
    }

    const tx = pointer.x * 5;
    const ty = pointer.y * 5;

    return {
      transform: `translate3d(${tx}px, ${ty}px, 0)`,
    };
  }, [pointer, shouldReduceMotion]);

  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-20"
      onMouseMove={(event) => {
        if (shouldReduceMotion) {
          return;
        }

        const { innerWidth, innerHeight } = window;

        const x = (event.clientX / innerWidth - 0.5) * 2;
        const y = (event.clientY / innerHeight - 0.5) * 2;

        setPointer({ x, y });
      }}
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 78% 45%,
              rgba(220, 35, 35, 0.16),
              transparent 27%
            ),
            radial-gradient(
              circle at 18% 20%,
              rgba(255, 45, 45, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 85%,
              rgba(255, 255, 255, 0.04),
              transparent 30%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          TECHNICAL GRID
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          LARGE BACKGROUND WEB
      ====================================================== */}
      <div
        className="pointer-events-none absolute right-[-22%] top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full opacity-20"
        style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle,
              transparent 0,
              transparent 46px,
              rgba(255,255,255,0.12) 47px,
              transparent 48px
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Existing global web decoration */}
      <div
        className="hero-web pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN HERO GRID
      ====================================================== */}
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.65fr)] lg:gap-0"
        variants={staggerContainer(0.1, 0.08)}
        initial="hidden"
        animate="show"
      >
        {/* =================================================
            LEFT SIDE — PERSONAL BRAND
        ================================================== */}
        <div className="relative z-20">
          {/* Role */}
          <motion.p
            variants={fadeIn()}
            className="mb-5 text-xs font-medium tracking-[0.3em] text-red-400 md:text-sm"
          >
            {personalInfo.role}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp(34)}
            className="font-display text-[18vw] uppercase leading-[0.78] tracking-[-0.065em] md:text-[9vw] lg:text-[7.1vw]"
          >
            <span className="block">SRI SAI</span>

            <span className="block text-white/90">
              ARUN
              <span className="ml-2 inline-block text-red-500">.</span>
            </span>
          </motion.h1>

          {/* Location */}
          <motion.p
            variants={fadeUp(20)}
            className="mt-5 text-xs tracking-[0.28em] text-zinc-400"
          >
            {personalInfo.location.toUpperCase()}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp(28)}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-xl lg:text-[1.3rem]"
          >
            {personalInfo.heroDescription}
          </motion.p>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}
          <motion.div
            variants={fadeUp(24)}
            className="mt-6 flex flex-wrap gap-2"
          >
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="active"
              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] tracking-[0.2em] text-zinc-300 transition-all hover:border-red-400/70 hover:bg-red-500/10 hover:text-white"
            >
              GITHUB ↗
            </Link>

            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="active"
              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] tracking-[0.2em] text-zinc-300 transition-all hover:border-red-400/70 hover:bg-red-500/10 hover:text-white"
            >
              LINKEDIN ↗
            </Link>

            <Link
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="active"
              className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] tracking-[0.2em] text-zinc-300 transition-all hover:border-red-400/70 hover:bg-red-500/10 hover:text-white"
            >
              LEETCODE ↗
            </Link>
          </motion.div>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}
          <motion.div
            variants={fadeUp(30)}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              data-cursor="active"
              className="group inline-flex items-center rounded-full border border-white bg-white px-7 py-3 text-xs tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:bg-red-500 hover:text-white"
            >
              VIEW PROJECTS

              <span className="ml-3 transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <Link
              href="#contact"
              data-cursor="active"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-xs tracking-[0.2em] text-zinc-200 transition-all hover:-translate-y-1 hover:border-red-400/60 hover:bg-red-500/10"
            >
              CONTACT ME
            </Link>
          </motion.div>

          {/* =================================================
              QUICK FACTS
          ================================================== */}
          <motion.div
            variants={fadeUp(20)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {brandingFacts.slice(0, 3).map((fact) => (
              <span
                key={fact}
                className="text-[10px] tracking-[0.16em] text-zinc-500"
              >
                {fact}
              </span>
            ))}
          </motion.div>
        </div>

        {/* =================================================
            RIGHT SIDE — SPIDER-MAN VISUAL
        ================================================== */}
        <motion.div
          variants={fadeUp(32)}
          className="relative flex h-[360px] items-center justify-center lg:-ml-2 lg:h-[430px]"
          style={transformStyle}
        >
          {/* =================================================
              RED AURA
          ================================================== */}
          <div
            className="absolute right-[12%] top-1/2 h-[50%] w-[58%] -translate-y-1/2 rounded-full bg-red-600/10 blur-[75px]"
            aria-hidden="true"
          />

          {/* =================================================
              WEB BEHIND PORTRAIT
          ================================================== */}
          <div
            className="absolute right-[-2%] top-1/2 aspect-square w-[78%] -translate-y-1/2 rounded-full opacity-25"
            style={{
              backgroundImage: `
                repeating-radial-gradient(
                  circle,
                  transparent 0,
                  transparent 30px,
                  rgba(255,255,255,0.12) 31px,
                  transparent 32px
                )
              `,
            }}
            aria-hidden="true"
          />

          {/* =================================================
              WEB SPOKES
          ================================================== */}
          <div
            className="absolute right-[34%] top-1/2 h-px w-[62%] origin-right rotate-[18deg] bg-white/10"
            aria-hidden="true"
          />

          <div
            className="absolute right-[34%] top-1/2 h-px w-[62%] origin-right -rotate-[18deg] bg-white/10"
            aria-hidden="true"
          />

          <div
            className="absolute right-[34%] top-1/2 h-px w-[55%] origin-right rotate-[42deg] bg-white/[0.06]"
            aria-hidden="true"
          />

          <div
            className="absolute right-[34%] top-1/2 h-px w-[55%] origin-right -rotate-[42deg] bg-white/[0.06]"
            aria-hidden="true"
          />

          {/* =================================================
              COMPACT PORTRAIT
          ================================================== */}
          <div className="relative h-[350px] w-full max-w-[300px] lg:h-[400px] lg:max-w-[330px]">
            {/* Portrait glow */}
            <div
              className="absolute inset-[20%] rounded-full bg-red-500/10 blur-3xl"
              aria-hidden="true"
            />

            {hasSpiderImage ? (
              <Image
                src="/images/spiderman_arun.png"
                alt="Sri Sai Arun in a Spider-Man inspired suit"
                fill
                sizes="(max-width: 1024px) 70vw, 330px"
                className="relative z-10 object-contain object-center drop-shadow-[0_0_24px_rgba(255,40,40,0.22)]"
                priority
              />
            ) : (
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="spider-abstract h-[70%] w-[70%]" />
              </div>
            )}
          </div>

          {/* =================================================
              SMALL INFORMATION LABEL
          ================================================== */}
          <div className="absolute bottom-2 right-0 z-20 hidden border-l border-red-500/30 pl-3 lg:block">
            <p className="text-[8px] tracking-[0.18em] text-zinc-500">
              AI / SOFTWARE
            </p>

            <p className="mt-1 text-[8px] tracking-[0.18em] text-red-400">
              {education.specialization.toUpperCase()}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 7, 0],
                  opacity: [0.45, 1, 0.45],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[10px] tracking-[0.28em] text-zinc-500"
        >
          SCROLL ↓
        </motion.div>
      </div>
    </section>
  );
}