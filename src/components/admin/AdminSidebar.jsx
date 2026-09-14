import { useState } from "react";
import {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  Image,
  BriefcaseBusiness,
  Package,
  User,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
  onLogout,
  onOpenProfile,
  onOpenSettings,
}) => {
  const [adminOpen, setAdminOpen] = useState(false);

  // =========================
  // NAVIGATION ITEMS
  // =========================
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "inquiries",
      label: "Inquiries",
      icon: Inbox,
    },
    {
      id: "events",
      label: "Events",
      icon: CalendarDays,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: Image,
    },
    {
      id: "services",
      label: "Services",
      icon: BriefcaseBusiness,
    },
    {
      id: "packages",
      label: "Packages",
      icon: Package,
    },
  ];

  return (
    <>
      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          h-screen
          w-[280px]
          bg-[#080808]
          border-r border-white/[0.08]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* =====================================================
            BRAND
        ===================================================== */}
        <div className="h-[88px] px-6 border-b border-white/[0.08] flex items-center">
          <div className="flex items-center gap-3.5">

            {/* LOGO ICON */}
            <div className="relative w-11 h-11 rounded-xl bg-yellow-500/[0.08] border border-yellow-500/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-yellow-500/5 blur-md" />

              <ShieldCheck
                size={22}
                strokeWidth={1.8}
                className="relative text-yellow-400"
              />
            </div>

            {/* BRAND TEXT */}
            <div className="min-w-0">
              <h2 className="text-[15px] font-bold text-white tracking-wide">
                Gurukripa
              </h2>

              <p className="text-[11px] text-gray-500 mt-0.5">
                Events & Management
              </p>
            </div>

          </div>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <nav className="flex-1 px-4 py-7 overflow-y-auto">

          {/* SECTION TITLE */}
          <div className="flex items-center gap-3 px-3 mb-4">
            <span className="text-[10px] uppercase tracking-[2.5px] text-gray-600 font-bold">
              Management
            </span>

            <div className="h-px flex-1 bg-white/[0.05]" />
          </div>

          {/* NAV ITEMS */}
          <div className="space-y-1.5">

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    group
                    relative
                    w-full
                    flex
                    items-center
                    gap-3.5
                    px-4
                    py-3.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-yellow-500/[0.09] text-yellow-400"
                        : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.035]"
                    }
                  `}
                >

                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-r-full bg-yellow-400" />
                  )}

                  {/* ICON */}
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2 : 1.8}
                    className={`
                      transition-colors
                      ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-600 group-hover:text-gray-300"
                      }
                    `}
                  />

                  {/* LABEL */}
                  <span>{item.label}</span>

                  {/* ACTIVE DOT */}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                  )}

                </button>
              );
            })}

          </div>
        </nav>

        {/* =====================================================
            ADMIN AREA
        ===================================================== */}
        <div className="p-4 border-t border-white/[0.08]">

          {/* ADMIN PROFILE */}
          <button
            type="button"
            onClick={() =>
              setAdminOpen((prev) => !prev)
            }
            className={`
              w-full
              flex
              items-center
              gap-3
              p-3
              rounded-xl
              border
              transition-all
              duration-200
              ${
                adminOpen
                  ? "bg-white/[0.05] border-white/[0.08]"
                  : "bg-white/[0.025] border-transparent hover:bg-white/[0.05] hover:border-white/[0.06]"
              }
            `}
          >

            {/* ADMIN ICON */}
            <div className="w-10 h-10 rounded-xl bg-yellow-500/[0.08] border border-yellow-500/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck
                size={18}
                className="text-yellow-400"
              />
            </div>

            {/* ADMIN INFO */}
            <div className="min-w-0 flex-1 text-left">
              <p className="text-sm font-semibold text-white truncate">
                Administrator
              </p>

              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                <p className="text-[10px] text-gray-500">
                  Secure Access
                </p>
              </div>
            </div>

            <ChevronDown
              size={16}
              className={`
                text-gray-600
                transition-transform
                duration-300
                ${
                  adminOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {/* =====================================================
              ADMIN DROPDOWN
          ===================================================== */}
          {adminOpen && (
            <div className="mt-2 mb-2 overflow-hidden rounded-xl bg-[#101010] border border-white/[0.07]">

              {/* PROFILE */}
              <button
                type="button"
                onClick={() => {
                  onOpenProfile?.();
                  setAdminOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-xs text-gray-500 hover:text-white hover:bg-white/[0.04] transition"
              >
                <User size={15} />
                <span>Profile</span>
              </button>

              {/* SETTINGS */}
              <button
                type="button"
                onClick={() => {
                  onOpenSettings?.();
                  setAdminOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-xs text-gray-500 hover:text-white hover:bg-white/[0.04] transition"
              >
                <Settings size={15} />
                <span>Settings</span>
              </button>

            </div>
          )}

          {/* =====================================================
              LOGOUT
          ===================================================== */}
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 mt-1 rounded-xl text-red-400/80 hover:text-red-400 hover:bg-red-500/[0.07] transition-all duration-200 text-sm font-medium"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>

        </div>
      </aside>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </>
  );
};

export default AdminSidebar;