import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "booting workspace...",
  "loading extensions [prettier, eslint, react]",
  "indexing portfolio.jsx",
  "restoring editor session",
];

export default function BootScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const total = 1400;
    const step = 20;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += step;
      setProgress(Math.min(100, Math.round((elapsed / total) * 100)));
      if (elapsed >= total) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 200);
      }
    }, step);
    return () => clearInterval(timer);
  }, [onDone]);

  useEffect(() => {
    const li = setInterval(() => {
      setLineIndex((i) => (i + 1 < lines.length ? i + 1 : i));
    }, 340);
    return () => clearInterval(li);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-editor"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="w-72 sm:w-96">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs text-text-dim">portfolio.jsx</span>
            </div>
            <div className="text-sm text-text-dim h-5 mb-3">
              <span className="text-comment">// </span>
              {lines[lineIndex]}
              <span className="caret h-4 align-middle" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
              <motion.div
                className="h-full bg-accent-blue"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-right text-[11px] text-text-dim">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
