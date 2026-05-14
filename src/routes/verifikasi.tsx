import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, Video, CircleDot, RotateCcw, Upload, CheckCircle2, User, Car, Clock, Cpu, LogIn, LogOut, Home, X, ImageIcon } from "lucide-react";
import { GlassBackground, SparkoLogo } from "@/components/glass-bg";

export const Route = createFileRoute("/verifikasi")({
  component: VerifikasiPage,
});

function VerifikasiPage() {
  const [showPreprocessing, setShowPreprocessing] = useState(false);
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

      <main className="relative mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold text-slate-800">Gate In (Masuk)</h1>
        <p className="mt-2 text-slate-600">Verifikasi identitas dan plat nomor kendaraan sekaligus untuk akses masuk.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Camera */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-sky-200/80 via-blue-300/60 to-blue-500/50 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                <Camera className="h-5 w-5 text-blue-600" /> Kamera Utama (Masuk)
              </h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-700">
                  <Video className="h-3.5 w-3.5" /> Nyalakan
                </button>
                <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/40 px-4 py-1.5 text-xs font-medium text-slate-600">
                  <CircleDot className="h-3.5 w-3.5" /> MATI
                </button>
              </div>
            </div>
            <div className="mt-5 flex aspect-video items-center justify-center rounded-xl border border-white/50 bg-slate-300/40 backdrop-blur-sm">
              <Camera className="h-16 w-16 text-slate-500/60" strokeWidth={1.5} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/80">
                <RotateCcw className="h-4 w-4" /> Ulangi
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/80">
                <Upload className="h-4 w-4" /> Upload
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-slate-600">
              Pastikan wajah pengendara dan plat kendaraan terlihat jelas dalam satu frame.
            </p>
          </div>

          {/* Result */}
          <div className="overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-sky-200/80 via-blue-300/60 to-blue-500/50 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-2xl">
            <h2 className="text-lg font-bold text-slate-800">Hasil Verifikasi Masuk</h2>
            <div className="mt-4 rounded-2xl border border-emerald-300/70 bg-gradient-to-br from-emerald-200/70 to-emerald-400/40 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <p className="mt-3 text-xl font-bold text-emerald-800">AKSES DITERIMA</p>
              <p className="mt-1 text-sm text-emerald-700">Wajah dan plat nomor sesuai</p>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-600">Detail Terdeteksi</p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Identitas Pengendara</p>
                <p className="mt-1 text-base font-bold text-slate-800">fembri</p>
                <p className="text-sm text-slate-600">22533712</p>
              </div>

              <div className="rounded-xl border border-white/60 bg-white/50 p-3 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <User className="h-3.5 w-3.5" /> Akurasi Wajah
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-3 py-1 text-xs font-semibold text-white">YOLO: 100.0%</span>
                  <span className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-1 text-xs font-semibold text-white">FACENET: 80.9%</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Kendaraan</p>
                <span className="mt-2 inline-block rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                  AE 3729 VD
                </span>
              </div>

              <div className="rounded-xl border border-white/60 bg-white/50 p-3 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <Car className="h-3.5 w-3.5" /> Akurasi Plat
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 px-3 py-1 text-xs font-semibold text-white">YOLO: 93.4%</span>
                  <span className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white">OCR: 99.1%</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" /> Durasi proses: 2.7 detik
              </div>

              <Link
                to="/preprocessing"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
              >
                <Cpu className="h-4 w-4" /> Lihat Preprocessing AI
              </Link>
            </div>
          </div>
        </div>
      </main>

      {showPreprocessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            onClick={() => setShowPreprocessing(false)}
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-sky-200/80 via-blue-300/60 to-blue-500/50 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.25)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                <Cpu className="h-5 w-5 text-blue-600" /> Visualisasi Preprocessing AI
              </h2>
              <button
                onClick={() => setShowPreprocessing(false)}
                className="rounded-full border border-white/70 bg-white/60 p-1.5 text-slate-700 hover:bg-white/80"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
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
              <button
                onClick={() => setShowPreprocessing(false)}
                className="rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white/80"
              >
                Tutup Modal
              </button>
              <button
                onClick={() => setShowPreprocessing(false)}
                className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
              >
                Tutup & Reset Kamera
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
