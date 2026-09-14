const API_URL = "http://localhost:5000/api";

// ===============================
// GET ALL GALLERY IMAGES
// ===============================
export const getGallery = async () => {
  const response = await fetch(`${API_URL}/gallery`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch gallery");
  }

  return data;
};


// ===============================
// UPLOAD GALLERY IMAGE
// ===============================
export const uploadGallery = async ({ title, category, image }) => {
  const token = localStorage.getItem("adminToken");

  const formData = new FormData();

  formData.append("title", title);
  formData.append("category", category);
  formData.append("image", image);

  const response = await fetch(`${API_URL}/gallery`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to upload gallery image");
  }

  return data;
};


// ===============================
// DELETE GALLERY IMAGE
// ===============================
export const deleteGallery = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/gallery/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete gallery image");
  }

  return data;
};