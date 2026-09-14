import {
  CalendarDays,
  Eye,
  Inbox,
  Mail,
  MapPin,
  Phone,
  Trash2,
  Users,
} from "lucide-react";

const InquiryTable = ({
  inquiries,
  onView,
  onDelete,
  onStatusChange,
  isStatusUpdating,
  isDeleting,
}) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "Contacted":
        return "text-blue-400 border-blue-500/20";

      case "Confirmed":
        return "text-green-400 border-green-500/20";

      case "Completed":
        return "text-purple-400 border-purple-500/20";

      case "New":
      default:
        return "text-yellow-400 border-yellow-500/20";
    }
  };

  if (inquiries.length === 0) {
    return (
      <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">
              Recent Inquiries
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              0 results
            </p>
          </div>

          <Inbox size={20} className="text-gray-600" />
        </div>

        <div className="py-20 text-center">
          <Inbox
            size={35}
            className="mx-auto text-gray-700 mb-4"
          />

          <h3 className="font-semibold text-gray-300">
            No inquiries found
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Try changing your search or filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-lg">
            Recent Inquiries
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {inquiries.length} result
            {inquiries.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Inbox size={20} className="text-gray-600" />
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block overflow-hidden">
        <table className="w-full">

          <thead>
            <tr className="border-b border-white/10 text-left">

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Client
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Event
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Date
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Guests
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Budget
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                Status
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-gray-600 font-bold text-right">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>
            {inquiries.map((inquiry) => {
              const status = inquiry.status || "New";

              return (
                <tr
                  key={inquiry._id}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition"
                >

                  {/* Client */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 shrink-0 rounded-xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center text-yellow-400 font-bold">
                        {inquiry.name
                          ?.charAt(0)
                          ?.toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-sm truncate max-w-[180px]">
                          {inquiry.name}
                        </p>

                        <p className="text-xs text-gray-500 whitespace-nowrap">
                          {inquiry.phone}
                        </p>

                        <p className="text-xs text-gray-600 truncate max-w-[180px]">
                          {inquiry.email}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Event */}
                  <td className="px-5 py-4">
                    <span className="inline-flex px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 text-xs font-semibold">
                      {inquiry.eventType || "Event"}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CalendarDays size={15} />
                      {inquiry.date}
                    </div>
                  </td>

                  {/* Guests */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users size={15} />
                      {inquiry.guests}
                    </div>
                  </td>

                  {/* Budget */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-gray-300">
                      {inquiry.budget}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <select
                      value={status}
                      onChange={(e) =>
                        onStatusChange(
                          inquiry._id,
                          e.target.value
                        )
                      }
                      disabled={isStatusUpdating}
                      className={`
                        px-3 py-2 rounded-lg
                        text-xs font-semibold
                        bg-[#111111]
                        border
                        outline-none
                        cursor-pointer
                        transition
                        focus:border-yellow-500/50
                        ${getStatusClasses(status)}
                      `}
                    >
                      <option
                        value="New"
                        className="bg-[#111111] text-white"
                      >
                        New
                      </option>

                      <option
                        value="Contacted"
                        className="bg-[#111111] text-white"
                      >
                        Contacted
                      </option>

                      <option
                        value="Confirmed"
                        className="bg-[#111111] text-white"
                      >
                        Confirmed
                      </option>

                      <option
                        value="Completed"
                        className="bg-[#111111] text-white"
                      >
                        Completed
                      </option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">

                      <button
                        onClick={() => onView(inquiry)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition text-xs font-semibold"
                      >
                        <Eye size={15} />
                        View
                      </button>

                      <button
                        onClick={() =>
                          onDelete(inquiry._id)
                        }
                        disabled={isDeleting}
                        className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition disabled:opacity-50"
                        title="Delete inquiry"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      {/* ================= MOBILE / TABLET CARDS ================= */}
      <div className="lg:hidden divide-y divide-white/5">

        {inquiries.map((inquiry) => {
          const status = inquiry.status || "New";

          return (
            <div
              key={inquiry._id}
              className="p-4 hover:bg-white/[0.02] transition"
            >

              {/* Client */}
              <div className="flex items-start gap-3 mb-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center text-yellow-400 font-bold">
                  {inquiry.name
                    ?.charAt(0)
                    ?.toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm text-white">
                    {inquiry.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <Phone size={12} />
                    <span className="whitespace-nowrap">
                      {inquiry.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                    <Mail size={12} />
                    <span className="break-all">
                      {inquiry.email}
                    </span>
                  </div>
                </div>

              </div>

              {/* Event */}
              <div className="mb-4">
                <span className="inline-flex px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 text-xs font-semibold">
                  {inquiry.eventType || "Event"}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4">

                {/* Date */}
                <div className="bg-[#111111] border border-white/5 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <CalendarDays size={14} />

                    <span className="text-[10px] uppercase font-bold">
                      Date
                    </span>
                  </div>

                  <p className="text-xs text-gray-300">
                    {inquiry.date}
                  </p>
                </div>

                {/* Guests */}
                <div className="bg-[#111111] border border-white/5 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <Users size={14} />

                    <span className="text-[10px] uppercase font-bold">
                      Guests
                    </span>
                  </div>

                  <p className="text-xs text-gray-300">
                    {inquiry.guests}
                  </p>
                </div>

                {/* Budget */}
                <div className="bg-[#111111] border border-white/5 rounded-xl p-3">
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">
                    Budget
                  </p>

                  <p className="text-xs text-gray-300">
                    {inquiry.budget}
                  </p>
                </div>

                {/* Location */}
                <div className="bg-[#111111] border border-white/5 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <MapPin size={14} />

                    <span className="text-[10px] uppercase font-bold">
                      Location
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 break-words">
                    {inquiry.location}
                  </p>
                </div>

              </div>

              {/* Status */}
              <div className="mb-4">

                <p className="text-[10px] uppercase tracking-wider text-gray-600 font-bold mb-2">
                  Status
                </p>

                <select
                  value={status}
                  onChange={(e) =>
                    onStatusChange(
                      inquiry._id,
                      e.target.value
                    )
                  }
                  disabled={isStatusUpdating}
                  className={`
                    w-full
                    px-3 py-2.5
                    rounded-lg
                    text-xs font-semibold
                    bg-[#111111]
                    border
                    outline-none
                    cursor-pointer
                    ${getStatusClasses(status)}
                  `}
                >
                  <option
                    value="New"
                    className="bg-[#111111] text-white"
                  >
                    New
                  </option>

                  <option
                    value="Contacted"
                    className="bg-[#111111] text-white"
                  >
                    Contacted
                  </option>

                  <option
                    value="Confirmed"
                    className="bg-[#111111] text-white"
                  >
                    Confirmed
                  </option>

                  <option
                    value="Completed"
                    className="bg-[#111111] text-white"
                  >
                    Completed
                  </option>
                </select>

              </div>

              {/* Actions */}
              <div className="flex gap-2">

                <button
                  onClick={() => onView(inquiry)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition text-xs font-semibold"
                >
                  <Eye size={15} />
                  View Details
                </button>

                <button
                  onClick={() =>
                    onDelete(inquiry._id)
                  }
                  disabled={isDeleting}
                  className="p-2.5 rounded-lg bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition disabled:opacity-50"
                  title="Delete inquiry"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default InquiryTable;