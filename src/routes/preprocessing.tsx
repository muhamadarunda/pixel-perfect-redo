import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, X, ImageIcon, Home, LogIn, LogOut } from "lucide-react";
import { GlassBackground, SparkoLogo } from "@/components/glass-bg";

export const Route = createFileRoute("/preprocessing")({
  component: PreprocessingPage,
});

function PreprocessingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
      <GlassBackground />
      <header className="relative z-10 border-b border-white/40 bg-white/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <SparkoLogo size="sm" />
            <span className="text-xl font-bold text-slate-800">SPARKO-CV</span>
          </div>
          <nav className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md">
              <LogIn className="h-4 w-4" /> Masuk
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white/80">
              <LogOut className="h-4 w-4" /> Keluar
            </button>
          </nav>
          <Link
            to="/admin"
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white/80"
          >
            <Home className="h-4 w-4" /> Dashboard
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-sky-200/80 via-blue-300/60 to-blue-500/50 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.25)] backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
              <Cpu className="h-5 w-5 text-blue-600" /> Visualisasi Preprocessing AI
            </h2>
            <Link
              to="/verifikasi"
              className="rounded-full border border-white/70 bg-white/60 p-1.5 text-slate-700 hover:bg-white/80"
              aria-label="Tutup"
            >
              <X className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Tahap 1: Deteksi Wajah
              </p>
              <div className="mt-3 overflow-hidden rounded-xl border border-white/60 bg-white/40 backdrop-blur-sm">
                <p className="border-b border-white/50 bg-white/40 px-4 py-2 text-xs font-medium text-slate-700">
                  1. Visualisasi Deteksi Wajah Bbox/Mask
                </p>
                <div className="flex aspect-square items-center justify-center bg-slate-300/40">
                  <ImageIcon className="h-16 w-16 text-slate-500/60" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Tahap 2: Pembacaan Plat Nomor
              </p>
              <div className="mt-3 overflow-hidden rounded-xl border border-white/60 bg-white/40 backdrop-blur-sm">
                <p className="border-b border-white/50 bg-white/40 px-4 py-2 text-xs font-medium text-slate-700">
                  1. Visualisasi Bbox/Mask Plate
                </p>
                <div className="flex aspect-square items-center justify-center bg-slate-300/40">
                  <ImageIcon className="h-16 w-16 text-slate-500/60" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <Link
              to="/verifikasi"
              className="rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white/80"
            >
              Tutup Modal
            </Link>
            <Link
              to="/verifikasi"
              className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
            >
              Tutup & Reset Kamera
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
