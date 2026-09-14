const API_URL = "http://localhost:5000/api";

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