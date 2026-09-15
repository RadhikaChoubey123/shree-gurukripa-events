const API_URL ="https://shree-gurukripa-events-backend.onrender.com/api";

// =========================
// GET ALL EVENTS
// =========================
export const getEvents = async () => {
  const response = await fetch(`${API_URL}/events`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch events");
  }

  return data;
};

// =========================
// CREATE EVENT
// =========================
export const createEvent = async (eventData) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create event");
  }

  return data;
};

// =========================
// UPDATE EVENT
// =========================
export const updateEvent = async ({ id, eventData }) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update event");
  }

  return data;
};

// =========================
// DELETE EVENT
// =========================
export const deleteEvent = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete event");
  }

  return data;
};