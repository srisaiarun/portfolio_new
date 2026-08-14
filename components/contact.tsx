"use client";

import { ArrowUpRight, Link2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { codingProfiles, personalInfo } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function Contact() {
  return (
    <SectionShell id="contact" eyebrow="CONNECT" title="Contact">
      <motion.div
        variants={staggerContainer(0.1, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.26 }}
        className="space-y-8"
      >
        <motion.h3
          variants={fadeUp(20)}
          className="font-display text-4xl uppercase leading-[0.9] md:text-6xl"
        >
          LET&apos;S BUILD
          <br />
          SOMETHING INTELLIGENT.
        </motion.h3>

        <motion.p variants={fadeUp(22)} className="max-w-2xl text-zinc-300">
          Open to collaborations in AI, computer vision, and software engineering.
          If your team is building thoughtful products, I would love to connect.
        </motion.p>

        <motion.div variants={fadeUp(24)} className="flex flex-wrap gap-3">
          <Link
            href={`mailto:${personalInfo.email}`}
            data-cursor="active"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.18em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
          >
            <Mail size={14} />
            {personalInfo.email}
          </Link>

          <Link
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            data-cursor="active"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.18em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
          >
            <Phone size={14} />
            {personalInfo.phone}
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.18em] text-zinc-300">
            <MapPin size={14} />
            {personalInfo.location.toUpperCase()}
          </span>
        </motion.div>

        <motion.div variants={fadeUp(26)} className="flex flex-wrap gap-3">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="active"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.18em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
          >
            <Link2 size={14} />
            GITHUB
            <ArrowUpRight size={12} />
          </Link>

          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="active"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.18em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
          >
            <Link2 size={14} />
            LINKEDIN
            <ArrowUpRight size={12} />
          </Link>

          {codingProfiles.map((profile) => (
            <Link
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="active"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.18em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
            >
              <Link2 size={14} />
              {profile.name.toUpperCase()}
              <ArrowUpRight size={12} />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
