"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { education, journeyItems } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function Journey() {
  return (
    <SectionShell id="journey" eyebrow="ACADEMIC" title="Journey">
      <motion.div
        variants={staggerContainer(0.1, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
        className="relative space-y-6"
      >
        <motion.p variants={fadeUp(18)} className="max-w-3xl text-zinc-300">
          Building through {education.degree} with focus on practical AI systems,
          software engineering, and computer vision.
        </motion.p>

        <div className="absolute left-3 top-0 hidden h-full w-px bg-white/20 md:block" />

        {journeyItems.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp(24)}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:ml-10"
          >
            <span className="absolute -left-[35px] top-7 hidden h-3 w-3 rounded-full border border-red-400 bg-black md:block" />
            <p className="text-xs tracking-[0.2em] text-red-400">{item.period}</p>
            <h3 className="mt-2 font-display text-2xl uppercase leading-none">{item.title}</h3>
            <p className="mt-2 text-sm tracking-[0.12em] text-zinc-300">{item.subtitle}</p>
            <p className="mt-4 text-zinc-200">{item.details}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
