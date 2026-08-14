"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();

  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);

    window.setTimeout(
      () => {
        setVisible(false);
      },
      shouldReduceMotion ? 0 : 850,
    );
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="spider-preloader fixed inset-0 z-[200] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.15 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* ==================================================
              ATMOSPHERIC RED GLOW
          ================================================== */}

          <motion.div
            className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 0.5, 0.25],
              scale: [0.5, 1, 1.1],
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
          />

          {/* ==================================================
              WEB BACKGROUND
          ================================================== */}

          <div
            className="spider-intro-web absolute inset-0"
            aria-hidden="true"
          />

          {/* ==================================================
              MAIN CONTENT
          ================================================== */}

          <div className="absolute left-1/2 top-1/2 flex w-[min(90vw,620px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center">

            {/* ==================================================
                WELCOME TEXT
            ================================================== */}

            <motion.p
              className="mb-3 text-center text-[9px] tracking-[0.5em] text-red-400 md:text-xs"
              initial={{
                opacity: 0,
                y: -15,
                letterSpacing: "0.8em",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "0.5em",
              }}
              transition={{
                duration: 0.9,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            {/* ==================================================
                NAME ABOVE PHOTO
            ================================================== */}

            <motion.h1
              className="relative z-20 mb-5 text-center font-display text-[clamp(2rem,6vw,4.5rem)] uppercase leading-none tracking-[0.08em] text-white"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="relative">
                {personalInfo.name}

                {/* Red underline */}

                <motion.span
                  className="absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-red-500"
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "65%",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1.6,
                    ease: "easeOut",
                  }}
                />
              </span>
            </motion.h1>

            {/* ==================================================
                SPIDER-MAN PHOTO
            ================================================== */}

            <motion.div
              className="relative h-[min(48vh,440px)] w-[min(70vw,390px)]"
              initial={{
                opacity: 0,
                scale: 0.78,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: [0.78, 1.03, 1],
                y: [35, -3, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Photo glow */}

              <div className="absolute inset-10 rounded-full bg-red-600/15 blur-[60px]" />

              <Image
                src={personalInfo.imagePaths.spiderman}
                alt="Sri Sai Arun"
                fill
                priority
                className="relative z-10 object-contain"
                sizes="390px"
              />

              {/* Cinematic image reveal */}

              <motion.div
                className="absolute inset-0 z-20 bg-black"
                initial={{
                  opacity: 0.95,
                }}
                animate={{
                  opacity: [0.95, 0.35, 0],
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.75,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* ==================================================
                ROLE
            ================================================== */}

            <motion.p
              className="mt-2 text-center text-[9px] tracking-[0.4em] text-zinc-400 md:text-xs"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
            >
              {personalInfo.role}
            </motion.p>
          </div>

          {/* ==================================================
              CLICK HERE
          ================================================== */}

          {!entered && (
            <motion.button
              type="button"
              onClick={handleEnter}
              className="group absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-[9px] tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-300 hover:border-red-400 hover:bg-white hover:text-black md:bottom-12 md:px-9 md:py-3.5 md:text-[10px]"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.2,
                duration: 0.6,
              }}
            >
              <span className="transition-transform duration-300 group-hover:tracking-[0.38em]">
                CLICK HERE TO KNOW MORE ABOUT ME
              </span>
            </motion.button>
          )}

          {/* ==================================================
              WEB BLAST
          ================================================== */}

          {entered && (
            <>
              {/* Main white web blast */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
                initial={{
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: 55,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Secondary red pulse */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500"
                initial={{
                  scale: 0,
                  opacity: 0.9,
                }}
                animate={{
                  scale: 35,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              />

              {/* White flash */}

              <motion.div
                className="absolute inset-0 bg-white"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.12, 0],
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}