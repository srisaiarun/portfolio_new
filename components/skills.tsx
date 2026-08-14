"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { skills } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function Skills() {
  return (
    <SectionShell id="skills" eyebrow="STACK" title="Skills">
      <motion.div
        variants={staggerContainer(0.09, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="space-y-8"
      >
        {skills.map((category) => (
          <motion.article key={category.title} variants={fadeUp(20)}>
            <h3 className="mb-4 text-xs tracking-[0.24em] text-red-400">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <motion.span
                  key={`${category.title}-${item}`}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.22 }}
                  data-cursor="active"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-zinc-100"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
