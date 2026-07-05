import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscArrowRight, VscDesktopDownload, VscChevronDown } from "react-icons/vsc";
import { SiReact, SiNodedotjs, SiJavascript } from "react-icons/si";
import { profile } from "../data/profile";

function useTypewriter(text, speed = 45, startDelay = 300) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setOut(text.slice(0, i));
        if (i < text.length) timeout = setTimeout(tick, speed);
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);
  return out;
}

const badges = [
  { Icon: SiReact, color: "#61dafb", pos: "top-2 -left-8 sm:-left-12", delay: 0 },
  { Icon: SiNodedotjs, color: "#8cc84b", pos: "top-1/2 -right-8 sm:-right-14", delay: 0.6 },
  { Icon: SiJavascript, color: "#f0db4f", pos: "-bottom-4 left-6 sm:left-10", delay: 1.2 },
];

function Avatar() {
  const [broken, setBroken] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-2 rounded-2xl border border-accent-blue/20 border-dashed" />
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-editor-light border border-border glow-blue flex items-center justify-center">
        {!broken ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <span className="text-3xl sm:text-4xl font-semibold text-accent-blue">
            {initials}
          </span>
        )}
      </div>
      <span className="absolute -bottom-2 -right-2 text-[10px] bg-editor border border-border text-comment px-2 py-0.5 rounded-md">
        {"</>"}
      </span>

      {badges.map(({ Icon, color, pos, delay }, i) => (
        <motion.div
          key={i}
          className={`hidden sm:flex absolute ${pos} w-11 h-11 rounded-xl bg-editor-light border border-border items-center justify-center shadow-lg`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.8 + delay },
            scale: { duration: 0.4, delay: 0.8 + delay },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const typed = useTypewriter(profile.role, 45, 500);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-6.5rem)] flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-16 overflow-hidden"
    >
      {/* ambient dot-grid background, keeps the empty space feeling intentional */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(79,193,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute top-1/3 right-[-10%] w-[420px] h-[420px] rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="relative max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-comment text-sm mb-3"
        >
          // welcome to my portfolio
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-14 lg:gap-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Avatar />
          </motion.div>

          <div className="min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-semibold text-text-bright leading-tight"
            >
              <span className="text-keyword">const</span>{" "}
              <span className="text-variable">developer</span>{" "}
              <span className="text-text">=</span>{" "}
              <span className="text-string">"{profile.name}"</span>
              <span className="text-text">;</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 text-2xl sm:text-3xl text-accent-blue h-10"
            >
              {typed}
              <span className="caret h-5 align-middle" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-text-dim text-base sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-accent-blue text-editor font-medium text-base px-6 py-3 rounded-lg hover:brightness-110 transition"
              >
                View Projects <VscArrowRight />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border text-text text-base px-6 py-3 rounded-lg hover:border-accent-blue hover:text-accent-blue transition"
              >
                <VscDesktopDownload /> Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-text-dim hover:text-accent-blue transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] tracking-wide">scroll</span>
        <VscChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
