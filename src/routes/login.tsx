import { createFileRoute, Link } from "@tanstack/react-router";
import { LogIn, ArrowLeft, UserCircle2 } from "lucide-react";
import { GlassBackground } from "@/components/glass-bg";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
      <GlassBackground />
      <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-16">
        <div className="w-full overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-violet-200/70 via-purple-300/40 to-purple-500/30 p-8 shadow-[0_8px_32px_rgba(31,38,135,0.15)] backdrop-blur-2xl">
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-xl">
              <UserCircle2 className="h-10 w-10 text-white" strokeWidth={2} />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-800">SPARKO-CV Admin Login</h1>
            <p className="mt-1 text-sm text-slate-600">Masukkan kredensial untuk mengakses panel</p>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700">Username</label>
              <input
                type="text"
                placeholder="Contoh: admin"
                className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 shadow-sm outline-none transition-all focus:border-blue-400 focus:bg-white/80"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                placeholder="Contoh: admin123"
                className="mt-2 w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-500 shadow-sm outline-none transition-all focus:border-blue-400 focus:bg-white/80"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40"
            >
              <LogIn className="h-4 w-4" /> Masuk
            </button>
            <Link
              to="/verifikasi"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-white/90"
            >
              <ArrowLeft className="h-4 w-4" /> Kembali ke Verifikasi
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
