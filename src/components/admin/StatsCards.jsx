import {
  Inbox,
  Users,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const StatsCards = ({
  totalInquiries,
  totalGuests,
  todayInquiries,
}) => {
  const stats = [
    {
      title: "Total Inquiries",
      value: totalInquiries,
      description: "All client requests",
      icon: Inbox,
      iconClass:
        "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    },
    {
      title: "Total Guests",
      value: totalGuests,
      description: "Across all inquiries",
      icon: Users,
      iconClass:
        "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    {
      title: "New Today",
      value: todayInquiries,
      description: "Received today",
      icon: CalendarDays,
      iconClass:
        "bg-green-500/10 border-green-500/20 text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className="group relative overflow-hidden bg-[#0d0d0d] border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-yellow-500/20 transition-all duration-300">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  {stat.title}
                </p>

                <p className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center ${stat.iconClass}`}
              >
                <Icon size={20} />
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-5">
              <p className="text-xs text-gray-600">
                {stat.description}
              </p>

              <ArrowUpRight
                size={15}
                className="text-gray-700 group-hover:text-yellow-400 transition"
              />
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-500" />
          </div>
        );
      })}
    </div >
  );
};

export default StatsCards;