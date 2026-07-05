import { useEffect, useState } from "react";
import { VscSourceControl, VscBell, VscCheck } from "react-icons/vsc";
import { profile } from "../data/profile";

export default function StatusBar({ active, line }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="h-6 shrink-0 bg-statusbar text-white text-[11px] flex items-center justify-between px-3 select-none">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <VscSourceControl className="w-3.5 h-3.5" /> main
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <VscCheck className="w-3.5 h-3.5" /> no problems
        </span>
        {profile.availableForWork && (
          <span className="hidden sm:inline">● open to work</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">Ln {line}, Col 1</span>
        <span>UTF-8</span>
        <span className="hidden xs:inline">LF</span>
        <span>{active}</span>
        <span className="hidden sm:inline">{timeStr}</span>
        <VscBell className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
