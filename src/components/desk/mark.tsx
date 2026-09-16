export function HemeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" className="fill-accent" />
      <rect x="7" y="7" width="18" height="18" rx="4" className="stroke-accent-fg" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3.2" className="fill-accent-fg" />
      <path
        d="M16 4.5v4.2M16 23.3v4.2M4.5 16h4.2M23.3 16h4.2"
        className="stroke-accent-fg"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
