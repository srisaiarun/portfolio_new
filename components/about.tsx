"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  aboutFocusAreas,
  education,
  personalInfo,
} from "@/lib/data";
import { SectionShell } from "./ui/section-shell";
import { useAssetAvailability } from "./use-asset-availability";

export function About() {
  const hasSecondaryImage = useAssetAvailability(
    personalInfo.imagePaths.profileSecondary,
  );

  return (
    <SectionShell id="about" eyebrow="PROFILE" title="About">
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* ==================================================
            INTRO
        ================================================== */}

        <motion.p
          variants={fadeUp(24)}
          className="max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-3xl"
        >
          I am {personalInfo.name}, a B.Tech student at{" "}
          {education.institution}, pursuing {education.degree}. I focus on
          building intelligent software and AI systems grounded in practical
          software engineering.
        </motion.p>

        {/* ==================================================
            EDUCATION SNAPSHOT
        ================================================== */}

        <motion.div
          variants={fadeUp(20)}
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xs tracking-[0.2em] text-zinc-400">
              DURATION
            </p>

            <p className="mt-2 text-sm tracking-[0.1em] text-zinc-100">
              {education.duration}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xs tracking-[0.2em] text-zinc-400">
              CGPA
            </p>

            <p className="mt-2 text-sm tracking-[0.1em] text-zinc-100">
              {education.cgpa}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-xs tracking-[0.2em] text-zinc-400">
              SPECIALIZATION
            </p>

            <p className="mt-2 text-sm tracking-[0.1em] text-zinc-100">
              {education.specialization}
            </p>
          </div>
        </motion.div>

        {/* ==================================================
            IMAGE + FOCUS AREAS
        ================================================== */}

        <motion.div
          variants={fadeUp(22)}
          className="mt-8 grid gap-4 lg:grid-cols-[220px_1fr]"
        >
          {/* Secondary Image */}

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03]">
            {hasSecondaryImage ? (
              <Image
                src={personalInfo.imagePaths.profileSecondary}
                alt={`Portrait of ${personalInfo.name}`}
                fill
                className="object-cover"
                sizes="220px"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(237,58,58,0.28),transparent_50%)]">
                <p className="font-display text-3xl tracking-[0.2em] text-white/85">
                  AI
                </p>
              </div>
            )}
          </div>

          {/* Focus Areas */}

          <div className="space-y-4">
            <p className="text-xs tracking-[0.22em] text-red-400">
              FOCUS AREAS
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutFocusAreas.map((point) => (
                <motion.div
                  key={point}
                  variants={fadeUp(20)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.05]"
                >
                  <p className="text-sm tracking-[0.12em] text-zinc-200">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            COURSEWORK
        ================================================== */}

        <motion.div
          variants={fadeUp(20)}
          className="mt-10"
        >
          <p className="mb-4 text-xs tracking-[0.22em] text-red-400">
            RELEVANT COURSEWORK
          </p>

          <div className="flex flex-wrap gap-3">
            {education.relevantCoursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.12em] text-zinc-100 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}