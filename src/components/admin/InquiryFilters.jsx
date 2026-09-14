import { Search } from "lucide-react";

const InquiryFilters = ({
  searchTerm,
  setSearchTerm,
  selectedEventType,
  setSelectedEventType,
  selectedStatus,
  setSelectedStatus,
  eventTypes,
}) => {
  const statuses = [
    "All",
    "New",
    "Contacted",
    "Confirmed",
    "Completed",
  ];

  return (
   <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-3 sm:p-4 mb-5">
      {/* Search */}
      <div className="relative w-full lg:max-w-md mb-4">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search name, email or phone..."
          className="w-full bg-[#111111] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-yellow-500/50 transition"
        />
      </div>

      {/* Event Filters */}
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-wider text-gray-600 font-bold mb-2">
          Event Type
        </p>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                setSelectedEventType(type)
              }
              className={`
                px-4 py-2.5 rounded-xl
                text-xs font-semibold
                whitespace-nowrap transition
                ${selectedEventType === type
                  ? "bg-yellow-500 text-black"
                  : "bg-[#111111] border border-white/10 text-gray-400 hover:text-white"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filters */}
      <div>
        <p className="text-[10px] uppercase tracking-wider text-gray-600 font-bold mb-2">
          Status
        </p>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() =>
                setSelectedStatus(status)
              }
              className={`
                px-4 py-2.5 rounded-xl
                text-xs font-semibold
                whitespace-nowrap transition
                ${selectedStatus === status
                  ? "bg-yellow-500 text-black border border-yellow-500"
                  : "bg-[#111111] border border-white/10 text-gray-400 hover:text-white"
                }
              `}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InquiryFilters;