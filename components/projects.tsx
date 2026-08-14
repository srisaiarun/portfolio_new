"use client";

import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import { SectionShell } from "./ui/section-shell";

export function Projects() {
  return (
    <SectionShell id="projects" eyebrow="SELECTED" title="Projects">
      <motion.div
        variants={staggerContainer(0.1, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp(26)}
            className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-6 transition-colors hover:border-white/30 md:p-8"
            data-cursor="active"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-red-500/20 transition-transform duration-500 group-hover:scale-110" />
            <div className="project-web absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <p className="text-xs tracking-[0.25em] text-red-400">PROJECT {project.id || String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-none md:text-4xl">{project.title}</h3>
            {project.subtitle ? (
              <p className="mt-2 text-sm tracking-[0.16em] text-zinc-300">{project.subtitle}</p>
            ) : null}
            <p className="mt-4 max-w-3xl text-zinc-200">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={`${project.title}-${tech}`}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-[0.12em] text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.16em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
                >
                  <FolderGit2 size={14} />
                  GITHUB ↗
                </Link>
              ) : null}

              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs tracking-[0.16em] text-zinc-100 transition-colors hover:bg-white hover:text-black"
                >
                  <ArrowUpRight size={14} />
                  LIVE DEMO ↗
                </Link>
              ) : null}
            </div>

            <details className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
              <summary className="cursor-pointer list-none text-xs tracking-[0.2em] text-red-300">
                CAPABILITIES
              </summary>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {project.capabilities.map((capability) => (
                  <li key={`${project.title}-${capability}`} className="rounded-xl border border-white/10 px-3 py-2">
                    {capability}
                  </li>
                ))}
              </ul>
            </details>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
