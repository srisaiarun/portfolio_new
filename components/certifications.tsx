"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { certifications } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function Certifications() {
  return (
    <SectionShell id="certifications" eyebrow="CREDENTIALS" title="Certifications">
      <motion.div
        variants={staggerContainer(0.08, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.24 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {certifications.map((item) => (
          <motion.article
            key={item}
            variants={fadeUp(20)}
            className="group rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-6 transition-colors hover:border-white/30"
            data-cursor="active"
          >
            <p className="text-sm tracking-[0.12em] text-zinc-100">{item}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
