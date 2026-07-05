import { motion } from "framer-motion";
import { VscLocation, VscMail } from "react-icons/vsc";
import { profile } from "../data/profile";
import { FileHeader } from "./CodeChrome";

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-10 lg:px-16 py-20 border-t border-border-soft">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <FileHeader name="About.jsx" meta="README" />

        <div className="font-mono text-sm leading-7">
          <div>
            <span className="text-keyword">function</span>{" "}
            <span className="text-func">aboutMe</span>
            <span className="text-text">() {"{"}</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-keyword">return</span>{" "}
            <span className="text-text">{"{"}</span>
          </div>

          <div className="pl-8 sm:pl-12 space-y-3 py-2">
            {profile.bio.map((para, i) => (
              <p key={i} className="text-text-dim">
                <span className="text-comment">// </span>
                {para}
              </p>
            ))}

            <p className="flex items-center gap-2 pt-2 text-text-dim">
              <VscLocation className="text-accent-cyan w-4 h-4" />
              <span className="text-variable">location</span>
              <span className="text-text">:</span>{" "}
              <span className="text-string">"{profile.location}"</span>
            </p>

            <p className="flex items-center gap-2 text-text-dim">
              <VscMail className="text-accent-cyan w-4 h-4" />
              <span className="text-variable">email</span>
              <span className="text-text">:</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-string hover:text-accent-blue transition-colors"
              >
                "{profile.email}"
              </a>
            </p>
          </div>

          <div className="pl-4 sm:pl-6 text-text">{"};"}</div>
          <div className="text-text">{"}"}</div>
        </div>
      </motion.div>
    </section>
  );
}
