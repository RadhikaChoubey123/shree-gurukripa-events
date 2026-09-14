import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import AllServices from "./pages/AllServices";
import AllPackages from "./pages/AllPackages";
import Gallery from "./pages/gallery";
// import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import ServiceDetails from "./pages/ServiceDetails";
import PackageDetails from "./pages/PackageDetails";

const App = () => {
  const location = useLocation();

  // =====================================================
  // ADMIN ROUTES
  // =====================================================
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* =================================================
          PUBLIC WEBSITE NAVBAR
          Admin pages par nahi dikhega
      ================================================= */}
      {!isAdminPage && <Navbar />}

      <Routes>

        {/* =================================================
            PUBLIC WEBSITE ROUTES
        ================================================= */}

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Services */}
        <Route
          path="/services"
          element={<AllServices />}
        />

        {/* Service Details */}
        <Route
          path="/services/:id"
          element={<ServiceDetails />}
        />

        {/* Packages */}
        <Route
          path="/packages"
          element={<AllPackages />}
        />

        {/* Package Details */}
        <Route
          path="/packages/:id"
          element={<PackageDetails />}
        />

        {/* Gallery */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* Contact */}
        {/* <Route
          path="/contact"
          element={<Contact />}
        /> */}

        {/* Inquiry / Booking */}
        <Route
          path="/inquiry"
          element={<Inquiry />}
        />

        {/* =================================================
            ADMIN LOGIN
        ================================================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* =================================================
            PROTECTED ADMIN DASHBOARD
        ================================================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* =================================================
          PUBLIC WEBSITE FOOTER
          Admin pages par nahi dikhega
      ================================================= */}
      {!isAdminPage && <Footer />}
    </>
  );
};

export default App;
