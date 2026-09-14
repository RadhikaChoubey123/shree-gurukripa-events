
import {
  Menu,
  ShieldCheck,
  Activity,
} from "lucide-react";

const DashboardHeader = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <div className="lg:hidden sticky top-0 z-40 h-[72px] bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-5 flex items-center justify-between">

        {/* BRAND */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-yellow-500/[0.08] border border-yellow-500/20 flex items-center justify-center">
            <ShieldCheck
              size={18}
              strokeWidth={1.8}
              className="text-yellow-400"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              Gurukripa Events
            </p>

            <p className="text-[10px] text-gray-500 mt-0.5">
              Admin Panel
            </p>
          </div>
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
          className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] flex items-center justify-center transition"
        >
          <Menu size={21} />
        </button>
      </div>


      {/* =====================================================
          DESKTOP TOP BAR
      ===================================================== */}
      <div className="hidden lg:flex h-14 items-center justify-end px-6 xl:px-8 border-b border-white/[0.06]">

        {/* SYSTEM STATUS */}
        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/10 flex items-center justify-center">
            <Activity
              size={16}
              strokeWidth={1.8}
              className="text-emerald-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-300">
              System Status
            </p>

            <div className="flex items-center gap-2 mt-0.5">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />

                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] text-emerald-400">
                Online
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
