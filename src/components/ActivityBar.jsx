import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscGithub,
  VscAccount,
} from "react-icons/vsc";
import { profile } from "../data/profile";

const staticIcons = [VscFiles, VscSearch, VscSourceControl, VscExtensions];

export default function ActivityBar() {
  return (
    <div className="hidden md:flex flex-col justify-between items-center w-12 bg-activitybar border-r border-border py-3 shrink-0">
      <div className="flex flex-col gap-6 items-center">
        {staticIcons.map((Icon, i) => (
          <Icon
            key={i}
            className={`w-5 h-5 ${
              i === 0 ? "text-text-bright" : "text-text-dim"
            } hover:text-text-bright transition-colors cursor-pointer`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 items-center pb-1">
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <VscGithub className="w-5 h-5 text-text-dim hover:text-text-bright transition-colors" />
          </a>
        )}
        <VscAccount className="w-5 h-5 text-text-dim hover:text-text-bright transition-colors cursor-pointer" />
      </div>
    </div>
  );
}
