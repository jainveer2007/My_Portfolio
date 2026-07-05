import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { FileHeader } from "./CodeChrome";

export default function Skills() {

  return (

    <section
      id="skills"
      className="border-t border-border-soft px-5 py-20 sm:px-10 lg:px-16"
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl"
      >

        <FileHeader
          name="Skills.json"
          meta="JSON"
        />

        <div className="mt-5 rounded-xl border border-border bg-editor-light/30 p-6 backdrop-blur-sm">

          <div className="mb-8 font-mono text-sm text-text">
            {"{"}
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {skillGroups.map((group, index) => (

              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-xl border border-border-soft bg-editor p-5 hover:border-accent-blue/40 transition-all"
              >

                <div className="mb-5 font-mono">

                  <span className="text-variable">
                    "{group.category}"
                  </span>

                  <span className="text-text">
                    :
                  </span>

                </div>

                <div className="flex flex-wrap gap-3">

                  {group.items.map((skill, i) => (

                    <motion.div
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="rounded-lg border border-border-soft bg-editor-light px-4 py-2 text-sm text-text transition-all hover:border-accent-blue hover:text-accent-blue"
                    >

                      {skill}

                    </motion.div>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

          <div className="mt-8 font-mono text-sm text-text">
            {"}"}
          </div>

        </div>

      </motion.div>

    </section>

  );

}