import { useEffect, useState } from "react";
import { VscTerminalCmd } from "react-icons/vsc";

// One line of "output" per section — shown as if a command just ran.
const lines = {
  home: "whoami\n> full-stack developer, always shipping",
  about: "cat about.md\n> loading bio...",
  skills: "node skills.js\n> compiling skillset...",
  projects: "ls projects/\n> repositories found",
  contact: "./send-message.sh\n> awaiting input...",
};

function useTypewriter(text, speed = 28) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const tick = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(tick);
    }, speed);
    return () => clearInterval(tick);
  }, [text, speed]);
  return out;
}

export default function SideTerminal({ active }) {
  const text = lines[active] || lines.home;
  const typed = useTypewriter(text);

  return (
    <div className="hidden xl:flex flex-col w-72 shrink-0 border-l border-border bg-editor">
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border text-text-dim text-xs">
        <VscTerminalCmd className="w-4 h-4" />
        session — bash
      </div>
      <div className="flex-1 px-4 py-4 font-mono text-[13px] leading-6 text-text-dim">
        <p className="text-accent-cyan mb-1">$ ~/portfolio</p>
        <p className="whitespace-pre-line">
          <span className="text-comment">$ </span>
          {typed}
          <span className="caret h-4 align-middle" />
        </p>
      </div>
    </div>
  );
}