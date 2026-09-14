const API_URL = "http://localhost:5000/api";

//submit

export const submitInquiry = async (formData) => {
  const response = await fetch(`${API_URL}/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit inquiry");
  }

  return data;
};

// Get all inquiries

export const getInquiries = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}/inquiries`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch inquiries");
  }

  return data;
};


//delete

export const deleteInquiry = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(
    `${API_URL}/inquiries/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to delete inquiry"
    );
  }

  return data;
};

//update

export const updateInquiryStatus = async (id, status) => {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(
    `${API_URL}/inquiries/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update status"
    );
  }

  return data;
};