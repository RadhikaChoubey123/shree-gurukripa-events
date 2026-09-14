import { useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import {
  getInquiries,
  deleteInquiry,
  updateInquiryStatus,
} from "../api/inquiryApi";

import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardHeader from "../components/admin/DashboardHeader";
import StatsCards from "../components/admin/StatsCards";
import InquiryFilters from "../components/admin/InquiryFilters";
import InquiryTable from "../components/admin/InquiryTable";
import InquiryModal from "../components/admin/InquiryModal";
import EventManagement from "../components/admin/EventManagement";
import GalleryManagement from "../components/admin/GalleryManagement";
import ServiceManagement from "../components/admin/ServiceManagement";
import PackageManagement from "../components/admin/PackageManagement";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // =====================================================
  // LAYOUT STATE
  // =====================================================

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // =====================================================
  // INQUIRY STATES
  // =====================================================

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEventType, setSelectedEventType] =
    useState("All");
  const [selectedStatus, setSelectedStatus] =
    useState("All");
  const [selectedInquiry, setSelectedInquiry] =
    useState(null);

  // =====================================================
  // FETCH INQUIRIES
  // =====================================================

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["inquiries"],
    queryFn: getInquiries,
  });

  const inquiries = data?.inquiries || [];

  // =====================================================
  // DELETE INQUIRY
  // =====================================================

  const deleteMutation = useMutation({
    mutationFn: deleteInquiry,

    onSuccess: (_, deletedId) => {
      queryClient.setQueryData(
        ["inquiries"],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,

            inquiries: oldData.inquiries.filter(
              (inquiry) =>
                inquiry._id !== deletedId
            ),
          };
        }
      );

      setSelectedInquiry(null);
    },

    onError: (error) => {
      console.error(
        "Delete inquiry error:",
        error
      );
    },
  });

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmed) return;

    deleteMutation.mutate(id);
  };

  // =====================================================
  // UPDATE INQUIRY STATUS
  // =====================================================

  const statusMutation = useMutation({
    mutationFn: ({ id, status }) =>
      updateInquiryStatus(id, status),

    onSuccess: (data) => {
      if (!data?.inquiry) return;

      queryClient.setQueryData(
        ["inquiries"],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,

            inquiries: oldData.inquiries.map(
              (inquiry) =>
                inquiry._id ===
                data.inquiry._id
                  ? data.inquiry
                  : inquiry
            ),
          };
        }
      );

      setSelectedInquiry((current) =>
        current?._id === data.inquiry._id
          ? data.inquiry
          : current
      );
    },

    onError: (error) => {
      console.error(
        "Status update error:",
        error
      );
    },
  });

  const handleStatusChange = (
    id,
    status
  ) => {
    statusMutation.mutate({
      id,
      status,
    });
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    queryClient.clear();

    navigate("/admin/login");
  };

  // =====================================================
  // EVENT TYPES
  // =====================================================

  const eventTypes = [
    "All",
    ...new Set(
      inquiries
        .map((item) => item.eventType)
        .filter(Boolean)
    ),
  ];

  // =====================================================
  // FILTER INQUIRIES
  // =====================================================

  const filteredInquiries =
    inquiries.filter((item) => {
      const search =
        searchTerm.toLowerCase();

      const matchesSearch =
        item.name
          ?.toLowerCase()
          .includes(search) ||
        item.email
          ?.toLowerCase()
          .includes(search) ||
        item.phone?.includes(search);

      const matchesEvent =
        selectedEventType === "All" ||
        item.eventType ===
          selectedEventType;

      const matchesStatus =
        selectedStatus === "All" ||
        (item.status || "New") ===
          selectedStatus;

      return (
        matchesSearch &&
        matchesEvent &&
        matchesStatus
      );
    });

  // =====================================================
  // TOTAL GUESTS
  // =====================================================

  const totalGuests =
    inquiries.reduce(
      (total, inquiry) => {
        const guests = parseInt(
          inquiry.guests,
          10
        );

        return (
          total +
          (isNaN(guests)
            ? 0
            : guests)
        );
      },
      0
    );

  // =====================================================
  // TODAY'S INQUIRIES
  // =====================================================

  const today = new Date();

  const todayInquiries =
    inquiries.filter((inquiry) => {
      if (!inquiry.createdAt)
        return false;

      const inquiryDate =
        new Date(
          inquiry.createdAt
        );

      return (
        inquiryDate.getDate() ===
          today.getDate() &&
        inquiryDate.getMonth() ===
          today.getMonth() &&
        inquiryDate.getFullYear() ===
          today.getFullYear()
      );
    }).length;

  // =====================================================
  // LOADING
  // =====================================================

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        <div className="text-center">

          <div className="w-11 h-11 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin mx-auto mb-5" />

          <p className="text-sm text-gray-500">
            Loading dashboard...
          </p>

        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (isError) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">

        <div className="max-w-md text-center">

          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">

            <span className="text-red-400 text-xl">
              !
            </span>

          </div>

          <h2 className="text-xl font-bold text-white">
            Failed to Load Dashboard
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            {error?.message ||
              "Something went wrong."}
          </p>

        </div>

      </div>
    );
  }

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <div className="min-h-screen bg-[#080808] text-white flex">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
        onOpenProfile={() =>
          console.log("Profile clicked")
        }
        onOpenSettings={() =>
          console.log("Settings clicked")
        }
      />

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <main className="flex-1 min-w-0 min-h-screen">

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-5">

          {/* =================================================
              DASHBOARD
          ================================================= */}

          {activeTab === "dashboard" && (
            <div className="space-y-7 animate-in fade-in duration-300">

              <div>
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Admin Dashboard
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Dashboard
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Manage your event inquiries
                  and client requests.
                </p>
              </div>

              <StatsCards
                totalInquiries={
                  inquiries.length
                }
                totalGuests={totalGuests}
                todayInquiries={
                  todayInquiries
                }
              />

              <InquiryFilters
                searchTerm={searchTerm}
                setSearchTerm={
                  setSearchTerm
                }
                selectedEventType={
                  selectedEventType
                }
                setSelectedEventType={
                  setSelectedEventType
                }
                selectedStatus={
                  selectedStatus
                }
                setSelectedStatus={
                  setSelectedStatus
                }
                eventTypes={eventTypes}
              />

              <InquiryTable
                inquiries={
                  filteredInquiries
                }
                onView={
                  setSelectedInquiry
                }
                onDelete={
                  handleDelete
                }
                onStatusChange={
                  handleStatusChange
                }
                isStatusUpdating={
                  statusMutation.isPending
                }
                isDeleting={
                  deleteMutation.isPending
                }
              />

            </div>
          )}

          {/* =================================================
              INQUIRIES
          ================================================= */}

          {activeTab === "inquiries" && (
            <div className="space-y-7 animate-in fade-in duration-300">

              <div>
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Client Management
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Inquiries
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  View and manage all client
                  inquiries.
                </p>
              </div>

              <InquiryFilters
                searchTerm={searchTerm}
                setSearchTerm={
                  setSearchTerm
                }
                selectedEventType={
                  selectedEventType
                }
                setSelectedEventType={
                  setSelectedEventType
                }
                selectedStatus={
                  selectedStatus
                }
                setSelectedStatus={
                  setSelectedStatus
                }
                eventTypes={eventTypes}
              />

              <InquiryTable
                inquiries={
                  filteredInquiries
                }
                onView={
                  setSelectedInquiry
                }
                onDelete={
                  handleDelete
                }
                onStatusChange={
                  handleStatusChange
                }
                isStatusUpdating={
                  statusMutation.isPending
                }
                isDeleting={
                  deleteMutation.isPending
                }
              />

            </div>
          )}

          {/* =================================================
              EVENTS
          ================================================= */}

          {activeTab === "events" && (
            <div className="animate-in fade-in duration-300">

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Event Management
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Events
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Manage your upcoming and
                  completed events.
                </p>
              </div>

              <EventManagement />

            </div>
          )}

          {/* =================================================
              GALLERY
          ================================================= */}

          {activeTab === "gallery" && (
            <div className="animate-in fade-in duration-300">

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Media Management
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Gallery
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Upload and manage your event
                  photos.
                </p>
              </div>

              <GalleryManagement />

            </div>
          )}

          {/* =================================================
              SERVICES
          ================================================= */}

          {activeTab === "services" && (
            <div className="animate-in fade-in duration-300">

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Service Management
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Services
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Add and manage your event
                  services.
                </p>
              </div>

              <ServiceManagement />

            </div>
          )}

          {/* =================================================
              PACKAGES
          ================================================= */}

          {activeTab === "packages" && (
            <div className="animate-in fade-in duration-300">

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-[3px] text-yellow-400 font-semibold">
                  Package Management
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  Packages
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Add and manage your signature
                  event packages.
                </p>
              </div>

              <PackageManagement />

            </div>
          )}

        </div>

      </main>

      {/* =================================================
          INQUIRY MODAL
      ================================================= */}

      <InquiryModal
        inquiry={selectedInquiry}
        onClose={() =>
          setSelectedInquiry(null)
        }
        onStatusChange={
          handleStatusChange
        }
        onDelete={handleDelete}
        isStatusUpdating={
          statusMutation.isPending
        }
        isDeleting={
          deleteMutation.isPending
        }
      />

    </div>
  );
};

export default AdminDashboard;