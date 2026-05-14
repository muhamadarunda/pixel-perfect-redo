import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { UserPlus, Users, History, Home, LogOut } from "lucide-react";
import { GlassBackground, SparkoLogo } from "@/components/glass-bg";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const navItems = [
  { to: "/admin", label: "Pendaftaran User", icon: UserPlus, exact: true },
  { to: "/admin/users", label: "Kelola User", icon: Users },
  { to: "/admin/riwayat", label: "Kelola Riwayat", icon: History },
];

function AdminLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
      <GlassBackground />
      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 flex-col border-r border-white/40 bg-white/30 p-6 backdrop-blur-2xl md:flex">
          <div className="flex items-center gap-3">
            <SparkoLogo size="sm" />
            <span className="text-lg font-bold text-slate-800">SPARKO-CV Admin</span>
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500">Manajemen Parkir</p>
          <nav className="mt-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon, exact }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact }}
                activeProps={{
                  className:
                    "flex items-center gap-3 rounded-xl border border-white/70 bg-gradient-to-r from-sky-300/60 to-blue-400/40 px-4 py-3 text-sm font-semibold text-blue-700 shadow-md backdrop-blur",
                }}
                inactiveProps={{
                  className: "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/40",
                }}
              >
                <Icon className="h-4 w-4" /> {label}
              </Link>
            ))}
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">Sistem</p>
          <nav className="mt-3 space-y-1">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/40"
            >
              <Home className="h-4 w-4" /> Menu Utama (Landing Page)
            </Link>
          </nav>

          <div className="mt-auto pt-6">
            <Link to="/login" className="flex items-center gap-3 text-sm font-semibold text-rose-600 hover:text-rose-700">
              <LogOut className="h-4 w-4" /> Logout
            </Link>
            <p className="mt-3 text-xs text-slate-500">© 2026 SPARKO-CV</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" /> Mode Admin Aktif
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 px-6 py-8 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
