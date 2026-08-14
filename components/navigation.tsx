"use client";

import {
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  navigationLinks,
  personalInfo,
} from "@/lib/data";
import { smoothScrollTo } from "@/components/smooth-scroll";

type Point = {
  x: number;
  y: number;
};

type WebShot = {
  id: number;
  start: Point;
  target: Point;
};

type Viewport = {
  width: number;
  height: number;
};

/* ============================================================
   THIN CURSOR WEB
============================================================ */

function CursorWeb({
  point,
  visible,
}: {
  point: Point;
  visible: boolean;
}) {
  const [trail, setTrail] = useState<Point[]>([]);

  useEffect(() => {
    if (!visible) {
      setTrail([]);
      return;
    }

    setTrail((current) => {
      const next = [...current, point];

      if (next.length > 12) {
        next.shift();
      }

      return next;
    });
  }, [point, visible]);

  if (!visible) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[90] hidden h-full w-full md:block"
      aria-hidden="true"
    >
      <defs>
        <filter id="cursorWebGlow">
          <feGaussianBlur
            stdDeviation="0.6"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {trail.length > 1 && (
        <polyline
          points={trail
            .map(
              (item) =>
                `${item.x},${item.y}`,
            )
            .join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#cursorWebGlow)"
        />
      )}

      <circle
        cx={point.x}
        cy={point.y}
        r="1.8"
        fill="white"
        opacity="0.85"
      />

      <circle
        cx={point.x}
        cy={point.y}
        r="5"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

/* ============================================================
   THICK SPIDER-MAN WEB
============================================================ */

function SpiderWebShot({
  web,
  viewport,
}: {
  web: WebShot;
  viewport: Viewport;
}) {
  const { start, target } = web;

  const dx = target.x - start.x;
  const dy = target.y - start.y;

  const distance = Math.sqrt(
    dx * dx + dy * dy,
  );

  const angle =
    Math.atan2(dy, dx) *
    (180 / Math.PI);

  /*
   * Size of the web at the destination.
   */
  const webRadius = Math.min(
    Math.max(distance * 0.075, 55),
    125,
  );

  const radialAngles = [
    -60,
    -30,
    0,
    30,
    60,
    90,
    120,
    150,
    180,
    210,
    240,
    270,
    300,
  ];

  const rings = [
    0.3,
    0.5,
    0.7,
    0.88,
    1,
  ];

  /*
   * Curved web path.
   * This makes the web feel like it is
   * actually swinging rather than being
   * a straight rope.
   */
  const controlX =
    (start.x + target.x) / 2 +
    Math.sin(angle * (Math.PI / 180)) *
      Math.min(distance * 0.12, 100);

  const controlY =
    (start.y + target.y) / 2 -
    Math.cos(angle * (Math.PI / 180)) *
      Math.min(distance * 0.12, 100);

  const mainPath = `
    M ${start.x} ${start.y}
    Q ${controlX} ${controlY}
      ${target.x} ${target.y}
  `;

  return (
    <motion.svg
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
      viewBox={`0 0 ${viewport.width} ${viewport.height}`}
      preserveAspectRatio="none"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.15,
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="thickSpiderWebGlow">
          <feGaussianBlur
            stdDeviation="1.5"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ======================================================
          MAIN THICK WEB
      ======================================================= */}

      <motion.path
        d={mainPath}
        fill="none"
        stroke="rgba(255,255,255,0.98)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#thickSpiderWebGlow)"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.34,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* ======================================================
          SECONDARY WEB STRANDS
      ======================================================= */}

      {[0, 1, 2, 3].map(
        (index) => {
          const offset =
            (index - 1.5) * 5;

          const radians =
            (angle * Math.PI) / 180 +
            Math.PI / 2;

          const endX =
            target.x +
            Math.cos(radians) *
              offset;

          const endY =
            target.y +
            Math.sin(radians) *
              offset;

          const secondaryPath = `
            M ${start.x} ${start.y}
            Q ${controlX + offset}
              ${controlY + offset}
              ${endX} ${endY}
          `;

          return (
            <motion.path
              key={`strand-${index}`}
              d={secondaryPath}
              fill="none"
              stroke={
                index === 1 ||
                index === 2
                  ? "rgba(255,255,255,0.78)"
                  : "rgba(255,255,255,0.38)"
              }
              strokeWidth={
                index === 1 ||
                index === 2
                  ? 1.7
                  : 0.9
              }
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.42,
                delay:
                  0.025 * index,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            />
          );
        },
      )}

      {/* ======================================================
          DESTINATION WEB
      ======================================================= */}

      <g
        transform={`translate(${target.x}, ${target.y})`}
      >
        {/* Radial strands */}
        {radialAngles.map(
          (webAngle, index) => {
            const radians =
              (webAngle * Math.PI) /
              180;

            const x =
              Math.cos(radians) *
              webRadius;

            const y =
              Math.sin(radians) *
              webRadius;

            return (
              <motion.line
                key={`radial-${index}`}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.78)"
                strokeWidth={
                  index % 3 === 0
                    ? 1.6
                    : 0.9
                }
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.42,
                  delay:
                    0.12 +
                    index * 0.018,
                  ease: "easeOut",
                }}
              />
            );
          },
        )}

        {/* Web rings */}
        {rings.map(
          (scale, index) => {
            const radius =
              webRadius * scale;

            return (
              <motion.circle
                key={`ring-${index}`}
                cx="0"
                cy="0"
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.66)"
                strokeWidth={
                  index ===
                  rings.length - 1
                    ? 1.7
                    : 0.9
                }
                initial={{
                  pathLength: 0,
                  opacity: 0,
                  scale: 0.55,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                  delay:
                    0.14 +
                    index * 0.055,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              />
            );
          },
        )}

        {/* White impact */}
        <motion.circle
          cx="0"
          cy="0"
          r="7"
          fill="white"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: [
              0,
              1.6,
              0.85,
            ],
          }}
          transition={{
            duration: 0.48,
            ease: "easeOut",
          }}
        />

        {/* Red impact pulse */}
        <motion.circle
          cx="0"
          cy="0"
          r="14"
          fill="none"
          stroke="rgba(239,68,68,0.9)"
          strokeWidth="2"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [
              0,
              1.5,
              1,
            ],
            opacity: [
              0,
              1,
              0.35,
            ],
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        />
      </g>
    </motion.svg>
  );
}

/* ============================================================
   NAVIGATION
============================================================ */

export function Navigation() {
  const shouldReduceMotion =
    useReducedMotion();

  const [isOpen, setIsOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("#home");

  const [cursor, setCursor] =
    useState<Point>({
      x: 0,
      y: 0,
    });

  const [cursorVisible, setCursorVisible] =
    useState(false);

  const [webShot, setWebShot] =
    useState<WebShot | null>(null);

  const [viewport, setViewport] =
    useState<Viewport>({
      width: 1920,
      height: 1080,
    });

  const [isSwinging, setIsSwinging] =
    useState(false);

  const swingTimer =
    useRef<number | null>(null);

  /* ==========================================================
     VIEWPORT
  ========================================================== */

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();

    window.addEventListener(
      "resize",
      updateViewport,
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateViewport,
      );
    };
  }, []);

  /* ==========================================================
     SCROLL STATE
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 20,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* ==========================================================
     CURSOR
  ========================================================== */

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });

      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [shouldReduceMotion]);

  /* ==========================================================
     ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const ids =
      navigationLinks.map(
        (item) =>
          item.href.replace(
            "#",
            "",
          ),
      );

    const sections = ids
      .map((id) =>
        document.getElementById(id),
      )
      .filter(
        (
          section,
        ): section is HTMLElement =>
          Boolean(section),
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setActiveSection(
                  `#${entry.target.id}`,
                );
              }
            },
          );
        },
        {
          rootMargin:
            "-45% 0px -45% 0px",
          threshold: 0.1,
        },
      );

    sections.forEach(
      (section) =>
        observer.observe(section),
    );

    return () =>
      observer.disconnect();
  }, []);

  /* ==========================================================
     WEB-SWING NAVIGATION
  ========================================================== */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    if (isSwinging) {
      return;
    }

    const targetId =
      href.replace("#", "");

    const target =
      document.getElementById(
        targetId,
      );

    if (!target) {
      return;
    }

    const button =
      event.currentTarget.getBoundingClientRect();

    const start = {
      x:
        button.left +
        button.width / 2,

      y:
        button.top +
        button.height / 2,
    };

    const targetRect =
      target.getBoundingClientRect();

    /*
     * Web attaches slightly above
     * the destination section.
     */
    const targetPoint = {
      x: viewport.width / 2,

      y: Math.max(
        120,
        Math.min(
          targetRect.top + 100,
          viewport.height - 100,
        ),
      ),
    };

    setActiveSection(href);
    setIsOpen(false);

    /* ========================================================
       REDUCED MOTION
    ======================================================== */

    if (shouldReduceMotion) {
      smoothScrollTo(target, {
        immediate: false,
        duration: 0.6,
      });

      return;
    }

    /* ========================================================
       START WEB SWING
    ======================================================== */

    setIsSwinging(true);

    const page =
      document.querySelector(
        ".web-swing-page",
      );

    page?.classList.remove(
      "web-swing-settle",
    );

    /*
     * Fire thick web.
     */
    setWebShot({
      id: Date.now(),
      start,
      target: targetPoint,
    });

    /*
     * Begin page pull.
     */
    page?.classList.add(
      "web-swing-active",
    );

    /* ========================================================
       WEB ATTACH → PAGE PULL
    ======================================================== */

    window.setTimeout(() => {
      smoothScrollTo(target, {
        duration: 0.95,
      });
    }, 240);

    /* ========================================================
       RECOIL
    ======================================================== */

    swingTimer.current =
      window.setTimeout(() => {
        setWebShot(null);

        page?.classList.remove(
          "web-swing-active",
        );

        page?.classList.add(
          "web-swing-settle",
        );

        window.setTimeout(() => {
          page?.classList.remove(
            "web-swing-settle",
          );

          setIsSwinging(false);
        }, 420);
      }, 1150);
  };

  /* ==========================================================
     HOME
  ========================================================== */

  const handleHome = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    setIsOpen(false);
    setWebShot(null);
    setIsSwinging(false);
    setActiveSection("#home");

    const page =
      document.querySelector(
        ".web-swing-page",
      );

    page?.classList.remove(
      "web-swing-active",
      "web-swing-settle",
    );

    window.scrollTo({
      top: 0,
      behavior:
        shouldReduceMotion
          ? "auto"
          : "smooth",
    });
  };

  /* ==========================================================
     CLEANUP
  ========================================================== */

  useEffect(() => {
    return () => {
      if (swingTimer.current) {
        window.clearTimeout(
          swingTimer.current,
        );
      }

      const page =
        document.querySelector(
          ".web-swing-page",
        );

      page?.classList.remove(
        "web-swing-active",
        "web-swing-settle",
      );
    };
  }, []);

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <>
      {/* ======================================================
          THIN CURSOR WEB
      ======================================================= */}

      <CursorWeb
        point={cursor}
        visible={cursorVisible}
      />

      {/* ======================================================
          THICK WEB ON NAVIGATION
      ======================================================= */}

      <AnimatePresence>
        {webShot ? (
          <SpiderWebShot
            key={webShot.id}
            web={webShot}
            viewport={viewport}
          />
        ) : null}
      </AnimatePresence>

      {/* ======================================================
          NAVIGATION BAR
      ======================================================= */}

      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
        initial={
          shouldReduceMotion
            ? false
            : {
                y: -30,
                opacity: 0,
              }
        }
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-md transition-all duration-500 md:px-6 ${
            isScrolled
              ? "border-white/10 bg-black/80 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              : "border-white/5 bg-black/30"
          }`}
          aria-label="Primary navigation"
        >
          {/* ==================================================
              LOGO
          =================================================== */}

          <a
            href="#home"
            onClick={handleHome}
            className="group relative font-display text-xl uppercase tracking-wider text-white"
          >
            {personalInfo.name}

            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <ul className="hidden items-center gap-1 md:flex">
            {navigationLinks.map(
              (item) => {
                const isActive =
                  activeSection ===
                  item.href;

                return (
                  <li
                    key={item.href}
                  >
                    <a
                      href={item.href}
                      onClick={(event) =>
                        handleNavigation(
                          event,
                          item.href,
                        )
                      }
                      className={`group relative block overflow-hidden rounded-full px-4 py-2 text-xs tracking-[0.2em] transition-all duration-300 ${
                        isActive
                          ? "bg-white text-black"
                          : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">
                        {item.label}
                      </span>

                      {/* Web node */}
                      <span
                        className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-red-500"
                            : "bg-transparent group-hover:bg-red-400"
                        }`}
                      />

                      {/* Small hover web */}
                      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-red-400 transition-all duration-300 group-hover:w-1/2" />
                    </a>
                  </li>
                );
              },
            )}
          </ul>

          {/* ==================================================
              MOBILE BUTTON
          =================================================== */}

          <button
            type="button"
            onClick={() =>
              setIsOpen(
                (current) =>
                  !current,
              )
            }
            className="rounded-full border border-white/20 p-2 text-white transition-colors hover:border-red-400 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </nav>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="mobile-menu"
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navigationLinks.map(
                  (item) => {
                    const isActive =
                      activeSection ===
                      item.href;

                    return (
                      <li
                        key={`mobile-${item.href}`}
                      >
                        <a
                          href={
                            item.href
                          }
                          onClick={(
                            event,
                          ) =>
                            handleNavigation(
                              event,
                              item.href,
                            )
                          }
                          className={`block rounded-2xl px-4 py-3 text-xs tracking-[0.2em] transition-colors ${
                            isActive
                              ? "bg-white text-black"
                              : "text-zinc-200 hover:bg-white/10"
                          }`}
                        >
                          {
                            item.label
                          }
                        </a>
                      </li>
                    );
                  },
                )}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}