export function GlassBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-[32rem] rotate-6 rounded-3xl border border-white/50 bg-white/35 shadow-lg backdrop-blur-xl" />
      <div className="pointer-events-none absolute top-48 right-4 h-80 w-96 -rotate-3 rounded-3xl border border-white/40 bg-white/25 shadow-md backdrop-blur-xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-[28rem] -rotate-6 rounded-3xl border border-white/50 bg-white/35 shadow-lg backdrop-blur-xl" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-64 w-80 rotate-3 rounded-3xl border border-white/40 bg-white/25 shadow-md backdrop-blur-xl" />
    </>
  );
}

export function SparkoLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-7 w-7",
    lg: "h-10 w-10",
  };
  return (
    <div className={`relative flex ${sizes[size]} items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 shadow-lg`}>
      <svg viewBox="0 0 24 24" fill="none" className={`${iconSizes[size]} text-white`}>
        <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
        <path d="M8 11h2M14 11h2M12 7v2M12 13v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
