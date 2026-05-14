import { createFileRoute } from "@tanstack/react-router";
import { FileText, Camera, Video, CircleDot, Upload, Save, X, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: PendaftaranUser,
});

function PendaftaranUser() {
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

      <div className="mt-8 rounded-2xl border border-white/60 bg-gradient-to-br from-violet-200/50 via-purple-300/30 to-purple-500/20 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.1)] backdrop-blur-2xl md:p-8">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
          <FileText className="h-5 w-5 text-purple-600" /> Form Registrasi Pengguna & Kendaraan
        </h2>
        <div className="mt-5 h-px w-full bg-white/50" />

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700">Nama Lengkap Pengendara</label>
              <input
                type="text"
                placeholder="Masukkan nama..."
                className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:bg-white/80"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Nomor Induk / ID Pengenal</label>
              <input
                type="text"
                placeholder="NIM / NIK / ID Pegawai"
                className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:bg-white/80"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Tipe Pengguna</label>
              <div className="relative mt-2">
                <select className="w-full appearance-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-400">
                  <option>Mahasiswa</option>
                  <option>Pegawai</option>
                  <option>Tamu</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-base font-bold text-slate-800">Pendaftaran Kendaraan (Plat Nomor)</h3>
              <div className="mt-2 h-px w-full bg-white/50" />
              <div className="mt-4 rounded-xl border border-white/60 bg-white/40 p-4 backdrop-blur">
                <p className="font-semibold text-slate-800">Pindai Plat via Kamera</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-700">
                    <Video className="h-3.5 w-3.5" /> Nyalakan
                  </button>
                  <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/40 px-4 py-1.5 text-xs font-medium text-slate-600">
                    <CircleDot className="h-3.5 w-3.5" /> MATI
                  </button>
                </div>
                <div className="mt-3 flex aspect-video items-center justify-center rounded-xl border border-white/50 bg-slate-300/40">
                  <Camera className="h-12 w-12 text-slate-500/60" strokeWidth={1.5} />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-md">
                    <Camera className="h-4 w-4" /> Ambil Foto
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-700">
                    <Upload className="h-4 w-4" /> Upload
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Hasil scan akan muncul di sini. Admin dapat mengubah secara manual jika ada kesalahan.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-slate-700">Foto Wajah Pengendara</p>
              <div className="mt-2 flex gap-2">
                <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-700">
                  <Video className="h-3.5 w-3.5" /> Nyalakan
                </button>
                <button className="flex items-center gap-2 rounded-full border border-white/70 bg-white/40 px-4 py-1.5 text-xs font-medium text-slate-600">
                  <CircleDot className="h-3.5 w-3.5" /> MATI
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Foto wajah yang jelas tanpa masker/kacamata gelap. Sistem tidak membutuhkan foto kendaraan secara spesifik, cukup mengikat wajah dengan daftar plat nomor.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-white/70 bg-white/30 p-6 text-center backdrop-blur">
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-white/60 bg-slate-300/40">
                <Camera className="h-14 w-14 text-slate-500/60" strokeWidth={1.5} />
              </div>
              <p className="mt-4 font-semibold text-slate-700">Upload Foto Wajah</p>
              <p className="text-sm text-slate-500">Format JPG/PNG, Max 5MB</p>
              <button className="mt-4 rounded-xl border border-white/70 bg-white/60 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white/80">
                Pilih File
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white/80">
                <X className="h-4 w-4" /> Batal
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl">
                <Save className="h-4 w-4" /> Simpan Pendaftaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
