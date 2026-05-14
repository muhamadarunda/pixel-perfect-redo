import { createFileRoute } from "@tanstack/react-router";
import { FileText, Search, Trash2, ChevronDown, User } from "lucide-react";

export const Route = createFileRoute("/admin/users")({
  component: KelolaUser,
});

const users = [
  { no: 1, name: "arunda", type: "mahasiswa", id: "22533624", plate: "AG 4024 BE" },
  { no: 2, name: "Fufufafa", type: "mahasiswa", id: "22533611", plate: "AD 5416 AFG" },
  { no: 3, name: "fembri", type: "mahasiswa", id: "22533712", plate: "AE 3729 VD" },
  { no: 4, name: "dio", type: "mahasiswa", id: "22533622", plate: "AE 3001 VE" },
];

function KelolaUser() {
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

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/40 p-4 backdrop-blur md:flex-row">
        <input
          type="text"
          placeholder="Cari by Nama / NIM / Plat..."
          className="flex-1 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-purple-400"
        />
        <div className="relative">
          <select className="w-full appearance-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 pr-10 text-sm text-slate-800 outline-none focus:border-purple-400 md:w-56">
            <option>Semua Tipe</option>
            <option>Mahasiswa</option>
            <option>Pegawai</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md">
          <Search className="h-4 w-4" /> Cari
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-violet-200/40 via-purple-300/20 to-purple-400/20 backdrop-blur-2xl">
        <table className="w-full">
          <thead className="bg-white/40 backdrop-blur">
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Foto</th>
              <th className="px-6 py-4">Nama Pengendara</th>
              <th className="px-6 py-4">ID / NIM</th>
              <th className="px-6 py-4">Plat Kendaraan</th>
              <th className="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.no} className="border-t border-white/40 transition-colors hover:bg-white/30">
                <td className="px-6 py-4 text-sm text-slate-700">{u.no}</td>
                <td className="px-6 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-slate-300/40">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-800">{u.name}</div>
                  <div className="text-xs text-slate-500">{u.type}</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{u.id}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {u.plate}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-md hover:shadow-lg">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
