import { useState } from "react";
import { motion } from "framer-motion";
import {
  VscGithub,
  VscTwitter,
  VscMail,
  VscTerminalCmd,
} from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import { FileHeader } from "./CodeChrome";

const socialIcons = {
  github: VscGithub,
  linkedin: FaLinkedin,
  twitter: VscTwitter,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="px-5 sm:px-10 lg:px-16 py-20 border-t border-border-soft">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <FileHeader name="Contact.jsx" meta="TERMINAL" />

        <div className="rounded-lg border border-border overflow-hidden">
          <div className="flex items-center gap-2 bg-tabbar px-3 py-2 border-b border-border">
            <VscTerminalCmd className="text-text-dim w-4 h-4" />
            <span className="text-xs text-text-dim">bash — say hello</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-editor px-4 sm:px-5 py-5 space-y-4 font-mono text-sm"
          >
            <div>
              <label className="flex items-center gap-2 text-accent-cyan mb-1.5">
                <span className="text-comment">$</span> set --name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your name"
                className="w-full bg-editor-light border border-border rounded-md px-3 py-2 text-text placeholder:text-text-dim/50 outline-none focus:border-accent-blue transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-accent-cyan mb-1.5">
                <span className="text-comment">$</span> set --email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-editor-light border border-border rounded-md px-3 py-2 text-text placeholder:text-text-dim/50 outline-none focus:border-accent-blue transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-accent-cyan mb-1.5">
                <span className="text-comment">$</span> compose --message
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="tell me about your project..."
                className="w-full bg-editor-light border border-border rounded-md px-3 py-2 text-text placeholder:text-text-dim/50 outline-none focus:border-accent-blue transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent-blue text-editor font-medium px-4 py-2 rounded-md hover:brightness-110 transition"
            >
              <VscMail /> run send-message.sh
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent-cyan text-xs"
              >
                ✓ opening your mail client with this message pre-filled...
              </motion.p>
            )}
          </form>
        </div>

        <div className="flex items-center gap-5 mt-6">
          {Object.entries(profile.socials).map(([key, url]) => {
            const Icon = socialIcons[key];
            if (!url || !Icon) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="text-text-dim hover:text-accent-blue transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="text-text-dim hover:text-accent-blue transition-colors"
            aria-label="email"
          >
            <VscMail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
