import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscArrowRight, VscDesktopDownload } from "react-icons/vsc";
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
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-editor-light border border-border glow-blue flex items-center justify-center">
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
    </div>
  );
}

export default function Home() {
  const typed = useTypewriter(profile.role, 45, 500);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-6.5rem)] flex items-center px-5 sm:px-10 lg:px-16 py-16"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-comment text-sm mb-3"
        >
          // welcome to my portfolio
        </motion.div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10">
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
              className="text-2xl sm:text-4xl font-semibold text-text-bright leading-tight"
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
              className="mt-3 text-lg sm:text-xl text-accent-blue h-8"
            >
              {typed}
              <span className="caret h-5 align-middle" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 max-w-xl text-text-dim text-sm sm:text-base"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-accent-blue text-editor font-medium text-sm px-4 py-2 rounded-md hover:brightness-110 transition"
              >
                View Projects <VscArrowRight />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border text-text text-sm px-4 py-2 rounded-md hover:border-accent-blue hover:text-accent-blue transition"
              >
                <VscDesktopDownload /> Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
