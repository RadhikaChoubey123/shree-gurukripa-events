import { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  Image,
  Plus,
  Trash2,
  Upload,
  X,
  Loader2,
  Eye,
} from "lucide-react";

const API_URL = "https://shree-gurukripa-events-backend.onrender.com/api/gallery";

const GalleryManagement = () => {
  const queryClient = useQueryClient();

  const [showForm, setShowForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    image: null,
  });

  // =========================
  // GET GALLERY
  // =========================
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch gallery");
      }

      return response.json();
    },
  });

  const gallery = data?.gallery || [];

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      setFormData({
        image: file,
      });

      setImagePreview(URL.createObjectURL(file));
    }
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setFormData({
      image: null,
    });

    setImagePreview(null);
  };

  // =========================
  // UPLOAD GALLERY
  // =========================
  const uploadGalleryMutation = useMutation({
    mutationFn: async (data) => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Admin session expired. Please login again."
        );
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to upload gallery image"
        );
      }

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
      });

      resetForm();
      setShowForm(false);
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // =========================
  // DELETE GALLERY
  // =========================
  const deleteGalleryMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Admin session expired. Please login again."
        );
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to delete gallery image"
        );
      }

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
      });
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image.");
      return;
    }

    const uploadData = new FormData();

    uploadData.append("image", formData.image);

    uploadGalleryMutation.mutate(uploadData);
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    deleteGalleryMutation.mutate(id);
  };

  // =========================
  // LOADING
  // =========================
  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (isError) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center">
        <p className="text-red-400">
          Failed to load gallery images.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* =========================
          HEADER
      ========================= */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
        >
          <Plus size={20} />
          Add Image
        </button>
      </div>

      {/* =========================
          STATS
      ========================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-amber-400/10 p-3">
              <Image
                size={22}
                className="text-amber-400"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Total Images
              </p>

              <p className="text-2xl font-bold text-white">
                {gallery.length}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================
          ADD IMAGE FORM
      ========================= */}
      {showForm && (
        <div className="rounded-2xl border border-white/10 bg-[#101010] p-6">

          {/* FORM HEADER */}
          <div className="mb-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-amber-400/10 p-3">
                <Image
                  size={22}
                  className="text-amber-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Add New Gallery Image
                </h2>

                <p className="text-sm text-gray-400">
                  Upload an event photo to your gallery.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* IMAGE UPLOAD */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Image
              </label>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-8 text-center transition hover:border-amber-400/50 hover:bg-white/[0.05]">

                <Upload
                  size={30}
                  className="mb-3 text-amber-400"
                />

                <span className="text-sm font-medium text-white">
                  {formData.image
                    ? formData.image.name
                    : "Choose an image"}
                </span>

                <span className="mt-1 text-xs text-gray-500">
                  JPG, PNG, WEBP
                </span>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />

              </label>

            </div>

            {/* IMAGE PREVIEW */}
            {imagePreview && (
              <div>

                <p className="mb-2 text-sm font-medium text-gray-300">
                  Preview
                </p>

                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 sm:w-72">

                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);

                      setFormData({
                        image: null,
                      });
                    }}
                    className="absolute right-2 top-2 rounded-full bg-black/70 p-2 text-white transition hover:bg-red-500"
                  >
                    <X size={16} />
                  </button>

                </div>

              </div>
            )}

            {/* ACTIONS */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="rounded-xl border border-white/10 px-5 py-3 font-medium text-gray-300 transition hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={uploadGalleryMutation.isPending}
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {uploadGalleryMutation.isPending ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Add Image
                  </>
                )}

              </button>

            </div>

          </form>
        </div>
      )}

      {/* =========================
          GALLERY GRID
      ========================= */}
      {gallery.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-12 text-center">

          <Image
            size={45}
            className="mx-auto mb-4 text-gray-500"
          />

          <h3 className="text-lg font-semibold text-white">
            No gallery images
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Add your first event image to the gallery.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {gallery.map((item) => (
            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101010] transition hover:border-amber-400/20"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={item.image}
                  alt="Gallery"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition group-hover:opacity-100">

                  {/* VIEW */}
                  <button
                    type="button"
                    onClick={() =>
                      setPreviewImage(item.image)
                    }
                    className="rounded-full bg-white p-3 text-black transition hover:bg-gray-200"
                    title="View image"
                  >
                    <Eye size={18} />
                  </button>

                  {/* DELETE */}
                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(item._id)
                    }
                    disabled={
                      deleteGalleryMutation.isPending
                    }
                    className="rounded-full bg-red-500 p-3 text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                    title="Delete image"
                  >
                    {deleteGalleryMutation.isPending ? (
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                    ) : (
                      <Trash2 size={18} />
                    )}
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* =========================
          IMAGE PREVIEW MODAL
      ========================= */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setPreviewImage(null)}
        >

          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <img
            src={previewImage}
            alt="Gallery Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </div>
  );
};

export default GalleryManagement;