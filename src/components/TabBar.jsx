import { motion } from "framer-motion";
import {
  VscHome,
  VscAccount,
  VscSymbolMisc,
  VscBracketDot,
  VscMail,
} from "react-icons/vsc";

export const sections = [
  { id: "home", label: "Home.jsx", icon: VscHome },
  { id: "about", label: "About.jsx", icon: VscAccount },
  { id: "skills", label: "Skills.json", icon: VscSymbolMisc },
  { id: "projects", label: "Projects.jsx", icon: VscBracketDot },
  { id: "contact", label: "Contact.jsx", icon: VscMail },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function TabBar({ active }) {
  return (
    <div className="relative bg-tabbar border-b border-border shrink-0">
      <div className="flex items-stretch overflow-x-auto no-scrollbar">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 text-[13px] whitespace-nowrap border-r border-border/60 transition-colors
                ${
                  isActive
                    ? "bg-tab-active text-text-bright"
                    : "text-text-dim hover:text-text bg-tabbar hover:bg-[#2a2d2e]"
                }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? "text-accent-blue" : "text-text-dim"
                }`}
              />
              {label}
              {isActive && (
                <motion.span
                  layoutId="active-tab-underline"
                  className="absolute left-0 right-0 top-0 h-[2px] bg-accent-blue"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
