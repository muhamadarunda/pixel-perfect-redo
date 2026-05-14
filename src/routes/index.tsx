import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Clock, Settings, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const modules = [
  {
    icon: Camera,
    iconBg: "bg-gradient-to-br from-sky-400 to-blue-600",
    tint: "from-sky-200/70 via-blue-300/50 to-blue-500/40",
    glow: "from-sky-300/60 via-blue-400/50 to-blue-600/60",
    title: "Verifikasi",
    desc: "Pindai wajah & plat nomor kendaraan untuk akses masuk dan keluar area parkir.",
    cta: "Buka Halaman",
    to: "/verifikasi",
  },
  {
    icon: Clock,
    iconBg: "bg-gradient-to-br from-amber-300 to-orange-500",
    tint: "from-amber-200/70 via-orange-300/50 to-orange-500/40",
    glow: "from-amber-300/60 via-orange-400/50 to-orange-500/60",
    title: "Riwayat Log",
    desc: "Pantau riwayat rekam jejak akses seluruh kendaraan terverifikasi.",
    cta: "Lihat Riwayat",
    to: "/riwayat",
  },
  {
    icon: Settings,
    iconBg: "bg-gradient-to-br from-violet-400 to-purple-600",
    tint: "from-violet-200/70 via-purple-300/50 to-purple-500/40",
    glow: "from-violet-300/60 via-purple-400/50 to-purple-600/60",
    title: "Admin Panel",
    desc: "Pendaftaran user, kelola data pengguna, dan penghapusan log harian.",
    cta: "Login Admin",
    to: "/login",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500">
      {/* Decorative glass shapes */}
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-[32rem] rotate-6 rounded-3xl border border-white/50 bg-white/35 shadow-lg backdrop-blur-xl" />
      <div className="pointer-events-none absolute top-48 right-4 h-80 w-96 -rotate-3 rounded-3xl border border-white/40 bg-white/25 shadow-md backdrop-blur-xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-[28rem] -rotate-6 rounded-3xl border border-white/50 bg-white/35 shadow-lg backdrop-blur-xl" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-64 w-80 rotate-3 rounded-3xl border border-white/40 bg-white/25 shadow-md backdrop-blur-xl" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 shadow-xl">
            <svg viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-white">
              <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="11" r="2" fill="currentColor" />
              <path d="M8 11h2M14 11h2M12 7v2M12 13v2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h1 className="text-6xl font-bold tracking-tight">
              <span className="text-slate-800">Sparko-</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">CV</span>
            </h1>
            <p className="mt-2 text-base leading-snug text-slate-600">
              Sistem Keamanan Parkir Otomatis
              <br />
              Berbasis Computer Vision
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-10 max-w-2xl text-center text-base font-medium text-slate-800">
          Pilih modul yang ingin Anda akses. Modul Verifikasi digunakan di pos jaga,
          sedangkan Admin Panel digunakan untuk manajemen data.
        </p>

        {/* Cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {modules.map(({ icon: Icon, iconBg, tint, glow, title, desc, cta, to }) => (
            <div
              key={title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br ${tint} p-7 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-2xl transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(31,38,135,0.2)]`}
            >
              {/* Animated gradient overlay */}
              <div
                className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80 animate-pulse`}
              />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${glow} opacity-0 transition-opacity duration-700 group-hover:opacity-40`}
                style={{ backgroundSize: "200% 200%" }}
              />

              <div className="relative flex flex-1 flex-col">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-800">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{desc}</p>
                <div className="mt-auto pt-6">
                  <Link
                    to={to}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/60 px-5 py-2 text-sm font-medium text-slate-800 shadow-sm transition-all hover:border-white hover:bg-white/90"
                  >
                    {cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
