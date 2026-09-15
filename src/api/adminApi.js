const API_URL ="https://shree-gurukripa-events-backend.onrender.com/api";

export const getCurrentAdmin = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/admin/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Authentication failed");
  }

  return data;
};