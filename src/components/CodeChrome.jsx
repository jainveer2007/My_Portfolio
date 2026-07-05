// Small helpers that render content the way a real editor gutter does:
// a right-aligned line number followed by the line's content.

export function CodeBlock({ startLine = 1, children }) {
  const lines = Array.isArray(children) ? children : [children];
  return (
    <div className="font-mono text-[13px] sm:text-sm leading-7">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-8 sm:w-10 shrink-0 text-right pr-3 sm:pr-4 text-text-dim/60 select-none">
            {startLine + i}
          </span>
          <div className="min-w-0">{line}</div>
        </div>
      ))}
    </div>
  );
}

export function FileHeader({ name, meta }) {
  return (
    <div className="flex items-center justify-between border-b border-border-soft pb-2 mb-4">
      <span className="text-xs text-text-dim">{name}</span>
      {meta && <span className="text-[11px] text-text-dim/70">{meta}</span>}
    </div>
  );
}
