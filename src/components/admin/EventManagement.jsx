import { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../api/eventApi";

const emptyForm = {
  title: "",
  eventType: "",
  date: "",
  location: "",
  description: "",
  image: "",
};

const EventManagement = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  // =========================
  // GET EVENTS
  // =========================
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const events = data?.events || [];

  // =========================
  // CREATE EVENT
  // =========================
  const createMutation = useMutation({
    mutationFn: createEvent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });

      setFormData(emptyForm);

      alert("Event created successfully");
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // =========================
  // UPDATE EVENT
  // =========================
  const updateMutation = useMutation({
    mutationFn: updateEvent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });

      setFormData(emptyForm);
      setEditingId(null);

      alert("Event updated successfully");
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // =========================
  // DELETE EVENT
  // =========================
  const deleteMutation = useMutation({
    mutationFn: deleteEvent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });

      alert("Event deleted successfully");
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      updateMutation.mutate({
        id: editingId,
        eventData: formData,
      });
    } else {
      createMutation.mutate(formData);
    }
  };

  // =========================
  // EDIT
  // =========================
  const handleEdit = (event) => {
    setEditingId(event._id);

    setFormData({
      title: event.title || "",
      eventType: event.eventType || "",
      date: event.date || "",
      location: event.location || "",
      description: event.description || "",
      image: event.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    deleteMutation.mutate(id);
  };

  // =========================
  // LOADING
  // =========================
  if (isLoading) {
    return (
      <div className="py-10 text-center text-gray-400">
        Loading events...
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (isError) {
    return (
      <div className="py-10 text-center text-red-400">
        {error?.message || "Failed to load events"}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      {/* <div>
        <h2 className="text-2xl font-bold text-white">
          Events Management
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Add and manage your events
        </p>
      </div> */}

      {/* FORM */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white mb-5">
          {editingId ? "Edit Event" : "Add New Event"}
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50"
          />

          {/* EVENT TYPE */}
          <input
            type="text"
            name="eventType"
            placeholder="Event Type (Wedding, Birthday...)"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50"
          />

          {/* DATE */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50"
          />

          {/* LOCATION */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50"
          />

          {/* IMAGE */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="md:col-span-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="md:col-span-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 resize-none"
          />

          {/* BUTTONS */}
          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              disabled={
                createMutation.isPending ||
                updateMutation.isPending
              }
              className="px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
            >
              {createMutation.isPending || updateMutation.isPending
                ? "Saving..."
                : editingId
                ? "Update Event"
                : "Add Event"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-5 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* EVENTS LIST */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          All Events ({events.length})
        </h3>

        {events.length === 0 ? (
          <div className="py-12 text-center bg-white/[0.03] border border-white/10 rounded-2xl">
            <p className="text-gray-500">
              No events added yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* IMAGE */}
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-white/5 flex items-center justify-center">
                    <span className="text-gray-600">
                      No Image
                    </span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white">
                    {event.title}
                  </h4>

                  <p className="text-sm text-yellow-400 mt-1">
                    {event.eventType}
                  </p>

                  <p className="text-sm text-gray-400 mt-3">
                    📅 {event.date}
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    📍 {event.location}
                  </p>

                  <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                    {event.description}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => handleEdit(event)}
                      className="flex-1 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(event._id)}
                      disabled={deleteMutation.isPending}
                      className="flex-1 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventManagement;