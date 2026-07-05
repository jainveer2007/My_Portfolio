export default function TitleBar() {
  return (
    <div className="h-9 shrink-0 bg-titlebar border-b border-border flex items-center px-3 select-none">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex-1 text-center text-xs text-text-dim tracking-wide">
        portfolio.jsx — Visual Studio Code
      </div>
      <div className="w-14" />
    </div>
  );
}
