import { motion } from "framer-motion";
import { VscGithub, VscLinkExternal, VscCircleFilled } from "react-icons/vsc";
import { projects } from "../data/projects";
import { FileHeader } from "./CodeChrome";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border bg-editor-light/60 p-5 hover:border-accent-blue/50 hover:glow-blue transition-colors"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-text-bright font-medium text-base">
          <span className="text-text-dim">{"<"}</span>
          {project.title}
          <span className="text-text-dim">{" />"}</span>
        </h3>
        <span
          className={`flex items-center gap-1 text-[11px] shrink-0 px-2 py-0.5 rounded-full border ${
            project.status === "shipped"
              ? "border-accent-cyan/30 text-accent-cyan"
              : "border-func/30 text-func"
          }`}
        >
          <VscCircleFilled className="w-2 h-2" />
          {project.status === "shipped" ? "shipped" : "in progress"}
        </span>
      </div>

      <p className="text-text-dim text-sm leading-6 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-1 rounded bg-editor border border-border-soft text-variable"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-text-dim hover:text-accent-blue transition-colors"
          >
            <VscGithub /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-text-dim hover:text-accent-blue transition-colors"
          >
            <VscLinkExternal /> Live demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-5 sm:px-10 lg:px-16 py-20 border-t border-border-soft">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <FileHeader name="Projects.jsx" meta={`${projects.length} items`} />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
