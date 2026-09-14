import { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  Plus,
  Trash2,
  Upload,
  X,
  Package as PackageIcon,
  ImageIcon,
  Loader2,
  IndianRupee,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/packages";

const PackageManagement = () => {
  const queryClient = useQueryClient();

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    features: "",
    price: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  // ================= FETCH PACKAGES =================

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["packages"],

    queryFn: async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch packages");
      }

      return response.json();
    },
  });

  const packages = data?.packages || [];

  // ================= ADD PACKAGE =================

  const addPackageMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(API_URL, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to create package"
        );
      }

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["packages"],
      });

      resetForm();
      setShowForm(false);
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // ================= DELETE PACKAGE =================

  const deletePackageMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to delete package"
        );
      }

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["packages"],
      });
    },

    onError: (error) => {
      alert(error.message);
    },
  });

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= IMAGE =================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select a package image");
      return;
    }

    const data = new FormData();

    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);

    const featuresArray = formData.features
      .split(",")
      .map((feature) => feature.trim())
      .filter(Boolean);

    data.append(
      "features",
      JSON.stringify(featuresArray)
    );

    if (formData.price) {
      data.append("price", formData.price);
    }

    data.append("image", formData.image);

    addPackageMutation.mutate(data);
  };

  // ================= RESET =================

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      description: "",
      features: "",
      price: "",
      image: null,
    });

    setPreview("");
  };

  // ================= DELETE =================

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this package?"
    );

    if (!confirmed) return;

    deletePackageMutation.mutate(id);
  };

  // ================= LOADING =================

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2
          size={28}
          className="text-yellow-400 animate-spin"
        />
      </div>
    );
  }

  // ================= ERROR =================

  if (isError) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <p className="text-sm text-red-400">
          Failed to load packages.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ================= TOP BAR ================= */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <p className="text-sm text-gray-500">
            {packages.length}{" "}
            {packages.length === 1
              ? "package"
              : "packages"}{" "}
            available
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition"
        >
          <Plus size={17} />
          Add Package
        </button>

      </div>

      {/* ================= FORM ================= */}

      {showForm && (
        <div className="rounded-2xl border border-white/[0.08] bg-[#101010] overflow-hidden">

          {/* Header */}

          <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-white/[0.07]">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <PackageIcon
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <h2 className="text-base font-semibold text-white">
                  Add New Package
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Add package details and image
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition"
            >
              <X size={18} />
            </button>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 space-y-5"
          >

            {/* Title + Category */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Package Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Royal Wedding"
                  required
                  className="w-full bg-[#080808] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-400/40 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Wedding"
                  required
                  className="w-full bg-[#080808] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-400/40 transition"
                />
              </div>

            </div>

            {/* Description */}

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your package..."
                rows={4}
                required
                className="w-full resize-none bg-[#080808] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-400/40 transition"
              />
            </div>

            {/* Features */}

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Features
              </label>

              <input
                type="text"
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="Royal Decor, Wedding Planning, Guest Management"
                className="w-full bg-[#080808] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-400/40 transition"
              />

              <p className="text-[11px] text-gray-600 mt-2">
                Separate multiple features with commas.
              </p>
            </div>

            {/* Price */}

            <div>

              <label className="block text-xs font-medium text-gray-400 mb-2">
                Package Price
              </label>

              <div className="relative">

                <IndianRupee
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="150000"
                  min="0"
                  className="w-full bg-[#080808] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-700 outline-none focus:border-yellow-400/40 transition"
                />

              </div>

              <p className="text-[11px] text-gray-600 mt-2">
                Leave empty if the price is available on request.
              </p>

            </div>

            {/* Image */}

            <div>

              <label className="block text-xs font-medium text-gray-400 mb-2">
                Package Image
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Upload */}

                <label className="relative min-h-[220px] rounded-xl border border-dashed border-white/[0.12] bg-[#080808] hover:border-yellow-400/30 transition cursor-pointer flex flex-col items-center justify-center text-center p-6">

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
                    <Upload
                      size={20}
                      className="text-yellow-400"
                    />
                  </div>

                  <p className="text-sm text-gray-300">
                    Choose an image
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    JPG, PNG or WEBP
                  </p>

                </label>

                {/* Preview */}

                <div className="min-h-[220px] rounded-xl overflow-hidden bg-[#080808] border border-white/[0.08] flex items-center justify-center">

                  {preview ? (
                    <img
                      src={preview}
                      alt="Package preview"
                      className="w-full h-[220px] object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-700">
                      <ImageIcon size={28} />
                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* Actions */}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">

              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="px-5 py-3 rounded-xl border border-white/[0.08] text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={addPackageMutation.isPending}
                className="px-5 py-3 rounded-xl bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
              >

                {addPackageMutation.isPending ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Plus size={17} />
                    Add Package
                  </>
                )}

              </button>

            </div>

          </form>
        </div>
      )}

      {/* ================= EMPTY ================= */}

      {packages.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-white/[0.08] bg-[#101010] py-20 text-center">

          <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-4">

            <PackageIcon
              size={23}
              className="text-yellow-400"
            />

          </div>

          <h3 className="text-base font-semibold text-white">
            No Packages Yet
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Add your first signature package.
          </p>

        </div>

      ) : (

        /* ================= PACKAGE CARDS ================= */

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {packages.map((item) => (

            <div
              key={item._id}
              className="group rounded-2xl overflow-hidden bg-[#101010] border border-white/[0.07] hover:border-yellow-400/20 transition"
            >

              {/* Image */}

              <div className="relative h-48 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-yellow-400">
                  {item.category}
                </span>

              </div>

              {/* Content */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.price !== null &&
                      item.price !== undefined && (
                        <p className="text-sm text-yellow-400 mt-1 font-medium">
                          ₹
                          {Number(
                            item.price
                          ).toLocaleString("en-IN")}
                        </p>
                      )}

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(item._id)
                    }
                    disabled={
                      deletePackageMutation.isPending
                    }
                    className="w-9 h-9 flex-shrink-0 rounded-lg text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition flex items-center justify-center"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

                <p className="text-xs leading-5 text-gray-500 mt-3 line-clamp-3">
                  {item.description}
                </p>

                {item.features?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">

                    {item.features.map(
                      (feature, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-md bg-white/[0.035] border border-white/[0.06] text-[10px] text-gray-500"
                        >
                          {feature}
                        </span>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default PackageManagement;