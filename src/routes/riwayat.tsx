import { createFileRoute, Link } from "@tanstack/react-router";
import { RefreshCw, ChevronDown, LogIn, Image as ImageIcon, Home } from "lucide-react";
import { GlassBackground, SparkoLogo } from "@/components/glass-bg";

export const Route = createFileRoute("/riwayat")({
  component: RiwayatPage,
});

const logs = [
  { time: "11.06.29", date: "12 Mei 2026", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "80.9%" },
  { time: "15.54.41", date: "11 Mei 2026", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "74.9%" },
  { time: "19.59.54", date: "10 Mei 2026", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "80.9%" },
];

function RiwayatPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
      <GlassBackground />

      <header className="relative z-10 border-b border-white/40 bg-white/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <SparkoLogo size="sm" />
            <span className="text-xl font-bold text-slate-800">SPARKO-CV</span>
          </div>
          <Link to="/admin" className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white/80">
            <Home className="h-4 w-4" /> Dashboard
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Riwayat Log Akses</h1>
            <p className="mt-2 text-slate-600">Catatan lengkap aktivitas keluar masuk kendaraan dan verifikasi identitas.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-white/80">
            <RefreshCw className="h-4 w-4" /> Refresh Data
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/60 bg-white/40 p-5 backdrop-blur md:grid-cols-3">
          <div>
            <label className="text-sm font-medium text-slate-700">Cari Pengendara / NIM</label>
            <input
              type="text"
              placeholder="Ketik kata kunci..."
              className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Jenis Verifikasi</label>
            <div className="relative mt-2">
              <select className="w-full appearance-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400">
                <option>Semua (Masuk/Keluar)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Status Akses</label>
            <div className="relative mt-2">
              <select className="w-full appearance-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400">
                <option>Semua Status</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-sky-200/40 via-blue-300/20 to-blue-400/20 backdrop-blur-2xl">
          <table className="w-full">
            <thead className="bg-white/40 backdrop-blur">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                <th className="px-6 py-4">Waktu &amp; Tanggal</th>
                <th className="px-6 py-4">Jenis</th>
                <th className="px-6 py-4">Foto</th>
                <th className="px-6 py-4">Pengendara</th>
                <th className="px-6 py-4">NIM</th>
                <th className="px-6 py-4">Plat Nomor</th>
                <th className="px-6 py-4">Akurasi</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i} className="border-t border-white/40 hover:bg-white/30">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{l.time}</div>
                    <div className="text-xs text-slate-500">{l.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-3 py-1 text-xs font-bold text-white">
                      <LogIn className="h-3 w-3" /> MASUK
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex h-12 w-16 items-center justify-center rounded-lg border border-white/60 bg-slate-300/40">
                      <ImageIcon className="h-5 w-5 text-slate-500/70" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{l.driver}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{l.nim}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">{l.plate}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{l.acc}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full border border-emerald-400/60 bg-emerald-200/40 px-3 py-1 text-xs font-bold text-emerald-700">
                      DITERIMA
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-600">Menampilkan 1-3 dari 3 data</p>
      </main>
    </div>
  );
}
