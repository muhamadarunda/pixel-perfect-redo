import { createFileRoute } from "@tanstack/react-router";
import { FileText, Trash2, Sparkles, LogIn } from "lucide-react";

export const Route = createFileRoute("/admin/riwayat")({
  component: KelolaRiwayat,
});

const logs = [
  { time: "12/5/2026, 11.06.29", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "80.9%" },
  { time: "11/5/2026, 15.54.41", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "74.9%" },
  { time: "10/5/2026, 19.59.54", driver: "fembri", nim: "22533712", plate: "AE 3729 VD", acc: "80.9%" },
];

function KelolaRiwayat() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 drop-shadow-sm">Admin Management</h1>
          <p className="mt-1 font-medium text-slate-800">Pusat kontrol data pengguna, registrasi kendaraan, dan pengawasan log sistem.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur hover:bg-white/80">
          <FileText className="h-4 w-4" /> Export Data
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-400 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30">
          <Trash2 className="h-4 w-4" /> Hapus Terpilih
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-white/80">
          <Sparkles className="h-4 w-4" /> Bersihkan Log Lama (&gt;30 Hari)
        </button>
      </div>

      <p className="mt-5 font-medium text-slate-800">Menampilkan catatan log keseluruhan. (Fitur sama dengan Menu Riwayat, + fungsi hapus)</p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-violet-200/40 via-purple-300/20 to-purple-400/20 backdrop-blur-2xl">
        <table className="w-full">
          <thead className="bg-white/40 backdrop-blur">
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
              <th className="px-6 py-4"><input type="checkbox" /></th>
              <th className="px-6 py-4">Waktu Akses</th>
              <th className="px-6 py-4">Jenis</th>
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
                <td className="px-6 py-4"><input type="checkbox" /></td>
                <td className="px-6 py-4 text-sm text-slate-700">{l.time}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-3 py-1 text-xs font-bold text-white">
                    <LogIn className="h-3 w-3" /> MASUK
                  </span>
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
    </div>
  );
}
