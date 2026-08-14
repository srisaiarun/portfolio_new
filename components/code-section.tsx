"use client";

import { ArrowUpRight, Braces } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { codingProfiles } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function CodeSection() {
  return (
    <SectionShell id="code" eyebrow="CODE" title="Problem Solving">
      <motion.div
        variants={staggerContainer(0.1, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8"
      >
        <motion.div
          variants={fadeUp(20)}
          className="grid gap-6 rounded-3xl border border-white/12 bg-white/[0.03] p-6 md:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="font-display text-7xl leading-none text-white">300+</p>
            <p className="mt-3 text-xs tracking-[0.24em] text-red-400">PROBLEMS SOLVED</p>
          </div>

          <div className="grid gap-3">
            <p className="text-zinc-300">
              Consistent problem solving across DSA and core CS topics with focus on
              clean reasoning, implementation quality, and iterative improvement.
            </p>
            <div className="flex flex-wrap gap-3">
              {codingProfiles.map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="active"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.2em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
                >
                  <Braces size={13} />
                  {profile.name.toUpperCase()}
                  <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
