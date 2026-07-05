import { useEffect, useRef, useState } from "react";
import BootScreen from "./components/BootScreen";
import TitleBar from "./components/TitleBar";
import ActivityBar from "./components/ActivityBar";
import TabBar, { sections } from "./components/TabBar";
import StatusBar from "./components/StatusBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SideTerminal from "./components/SideTerminal";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState("home");
  const [line, setLine] = useState(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: scrollRef.current, threshold: 0.35 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [booted]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const onScroll = () => {
      setLine(Math.max(1, Math.round(node.scrollTop / 24) + 1));
    };
    node.addEventListener("scroll", onScroll);
    return () => node.removeEventListener("scroll", onScroll);
  }, [booted]);

  const activeLabel =
    sections.find((s) => s.id === active)?.label ?? "Home.jsx";

  return (
    <>
      <BootScreen onDone={() => setBooted(true)} />
      <div className="h-screen w-screen flex flex-col overflow-hidden bg-editor">
        <TitleBar />
        <div className="flex flex-1 min-h-0">
          <ActivityBar />
          <div className="flex-1 min-w-0 flex flex-col">
            <TabBar active={active} />
            <main
              ref={scrollRef}
              className="flex-1 overflow-y-auto overflow-x-hidden"
            >
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
          <SideTerminal active={active} />
        </div>
        <StatusBar active={activeLabel} line={line} />
      </div>
    </>
  );
}
