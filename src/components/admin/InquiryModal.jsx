import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Users,
  X,
  Trash2,
} from "lucide-react";

const InquiryModal = ({
  inquiry,
  onClose,
  onDelete,
  onStatusChange,
  isStatusUpdating,
  isDeleting,
}) => {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#101010] border border-white/10 rounded-2xl shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#101010] border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-white truncate">
              Inquiry Details
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
              {inquiry.name}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">

          {/* Event Type */}
          <div className="mb-5">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Event Type
            </p>

            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
              {inquiry.eventType}
            </span>
          </div>

          {/* Status */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
              Status
            </label>

            <select
              value={inquiry.status}
              onChange={(e) =>
                onStatusChange(inquiry._id, e.target.value)
              }
              disabled={isStatusUpdating}
              className="w-full sm:w-64 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-yellow-500/40 transition disabled:opacity-50"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>

            {isStatusUpdating && (
              <p className="text-xs text-gray-500 mt-2">
                Updating status...
              </p>
            )}
          </div>

          {/* Details */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Phone */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Phone size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Phone
                </span>
              </div>

              <a
                href={`tel:${inquiry.phone}`}
                className="text-sm text-white hover:text-yellow-400 transition break-all"
              >
                {inquiry.phone}
              </a>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Mail size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Email
                </span>
              </div>

              <a
                href={`mailto:${inquiry.email}`}
                className="text-sm text-white hover:text-yellow-400 transition break-all"
              >
                {inquiry.email}
              </a>
            </div>

            {/* Date */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <CalendarDays size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Date
                </span>
              </div>

              <p className="text-sm text-white">
                {inquiry.date}
              </p>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Location
                </span>
              </div>

              <p className="text-sm text-white break-words">
                {inquiry.location}
              </p>
            </div>

            {/* Guests */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Users size={16} />
                <span className="text-xs uppercase tracking-wider">
                  Guests
                </span>
              </div>

              <p className="text-sm text-white">
                {inquiry.guests}
              </p>
            </div>

            {/* Budget */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <span className="text-sm">₹</span>
                <span className="text-xs uppercase tracking-wider">
                  Budget
                </span>
              </div>

              <p className="text-sm text-white">
                {inquiry.budget}
              </p>
            </div>
          </div>

          {/* Message */}
          {inquiry.message && (
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Message
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {inquiry.message}
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-between">

            {/* Delete */}
            <button
              onClick={() => onDelete(inquiry._id)}
              disabled={isDeleting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition text-sm font-medium disabled:opacity-50"
            >
              <Trash2 size={17} />
              {isDeleting ? "Deleting..." : "Delete Inquiry"}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition text-sm font-medium"
            >
              Close
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;