import { motion } from "framer-motion";
import { VscLocation, VscMail, VscLinkExternal } from "react-icons/vsc";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { profile } from "../data/profile";
import { FileHeader } from "./CodeChrome";

const codingPlatforms = [
  {
    key: "leetcode",
    label: "LeetCode",
    Icon: SiLeetcode,
    color: "#ffa116",
    description: "",
  },
  {
    key: "codeforces",
    label: "Codeforces",
    Icon: SiCodeforces,
    color: "#1f8acb",
    description: "",
  },
  {
    key: "codechef",
    label: "CodeChef",
    Icon: SiCodechef,
    color: "#8b4513",
    description: "",
  },
  {
    key: "codolio",
    label: "Codolio",
    Icon: VscLinkExternal,
    color: "#4fc1ff",
    description: "500+ Questions solved",
  },
];

function CodingProfiles() {

  const entries = codingPlatforms.filter(
    (p) => profile.socials && profile.socials[p.key]
  );

  if(!entries.length) return null;

  return (

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-80 shrink-0"
    >

      <div className="overflow-hidden rounded-xl border border-border bg-editor-light/70 backdrop-blur-md shadow-xl shadow-cyan-500/5">

        <div className="flex items-center justify-between border-b border-border-soft bg-editor px-5 py-4">

          <div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-text-dim">
              Explorer
            </p>

            <h3 className="mt-1 text-base font-semibold text-text">
              Coding Profiles
            </h3>

          </div>

          <div className="rounded-md bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue">
            {entries.length}
          </div>

        </div>

        <div className="space-y-4 p-4">

          {entries.map(({ key, label, Icon, color, description }) => (

            <motion.a
              key={key}
              href={profile.socials[key]}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group flex items-center justify-between rounded-xl border border-border-soft bg-editor px-4 py-4 transition-all hover:border-accent-blue/40 hover:bg-editor-light"
            >

              <div className="flex items-center gap-4">

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${color}20`,
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{
                      color,
                    }}
                  />
                </div>

                <div>

                  <h4 className="font-medium text-text">
                    {label}
                  </h4>

                  <p className="text-xs text-text-dim">
                    {description}
                  </p>

                </div>

              </div>

              <div className="rounded-lg p-2 transition-all group-hover:bg-accent-blue/10">

                <VscLinkExternal className="h-4 w-4 text-text-dim transition-colors group-hover:text-accent-blue" />

              </div>

            </motion.a>

          ))}

        </div>

        <div className="border-t border-border-soft bg-editor/50 px-5 py-4">

          <p className="text-xs leading-6 text-text-dim">
            Building strong problem-solving skills through consistent competitive programming and algorithm practice.
          </p>

        </div>

      </div>

    </motion.div>

  );

}

export default function About() {

  return (

    <section
      id="about"
      className="relative overflow-hidden border-t border-border-soft px-5 py-20 sm:px-10 lg:px-16"
    >

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(79,193,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex flex-col items-start gap-12 lg:flex-row">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl min-w-0 flex-1"
        >

          <FileHeader
            name="About.jsx"
            meta="README"
          />

          <div className="mt-4 rounded-xl border border-border bg-editor-light/30 p-6 font-mono text-sm leading-7 backdrop-blur-sm">

            <div>

              <span className="text-keyword">
                function
              </span>{" "}

              <span className="text-func">
                aboutMe
              </span>

              <span className="text-text">
                () {"{"}
              </span>

            </div>

            <div className="pl-6">

              <span className="text-keyword">
                return
              </span>{" "}

              <span className="text-text">
                {"{"}
              </span>

            </div>

            <div className="space-y-4 py-3 pl-12">

              {profile.bio.map((para, i) => (

                <p
                  key={i}
                  className="text-text-dim"
                >
                  <span className="text-comment">
                    //{" "}
                  </span>

                  {para}

                </p>

              ))}

              <div className="mt-6 h-px bg-border-soft" />

              <p className="flex items-center gap-2 text-text-dim">

                <VscLocation className="h-4 w-4 text-accent-cyan" />

                <span className="text-variable">
                  location
                </span>

                <span className="text-text">
                  :
                </span>

                <span className="text-string">
                  "{profile.location}"
                </span>

              </p>

              <p className="flex items-center gap-2 text-text-dim">

                <VscMail className="h-4 w-4 text-accent-cyan" />

                <span className="text-variable">
                  email
                </span>

                <span className="text-text">
                  :
                </span>

                <a
                  href={`mailto:${profile.email}`}
                  className="text-string transition-colors hover:text-accent-blue"
                >
                  "{profile.email}"
                </a>

              </p>

            </div>

            <div className="pl-6 text-text">
              {"};"}
            </div>

            <div className="text-text">
              {"}"}
            </div>

          </div>

        </motion.div>

        <CodingProfiles />

      </div>

    </section>

  );

}