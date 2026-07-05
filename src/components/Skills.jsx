import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { FileHeader } from "./CodeChrome";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-text">{name}</span>
        <span className="text-text-dim">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-editor-light rounded-full overflow-hidden border border-border-soft">
        <motion.div
          className="h-full bg-accent-blue rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-5 sm:px-10 lg:px-16 py-20 border-t border-border-soft">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <FileHeader name="Skills.json" meta="JSON" />

        <div className="font-mono text-sm text-text-dim mb-6">
          <span className="text-text">{"{"}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <div className="font-mono text-sm mb-4">
                <span className="text-variable">"{group.category}"</span>
                <span className="text-text">: [</span>
              </div>
              <div className="space-y-4 pl-4">
                {group.items.map((item, i) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    delay={gi * 0.05 + i * 0.06}
                  />
                ))}
              </div>
              <div className="font-mono text-sm text-text mt-3">]</div>
            </div>
          ))}
        </div>

        <div className="font-mono text-sm text-text mt-6">{"}"}</div>
      </motion.div>
    </section>
  );
}
