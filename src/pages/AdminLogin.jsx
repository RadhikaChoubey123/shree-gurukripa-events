import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldCheck, Loader2 } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://shree-gurukripa-events-backend.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      // Go to dashboard
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md bg-[#101010] border border-white/10 hover:border-yellow-500/30 transition-all duration-300 rounded-3xl p-8 md:p-10 shadow-2xl">

        {/* Top Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs uppercase tracking-[3px] mb-4 backdrop-blur-md">
            <ShieldCheck size={14} />
            Restricted Area
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Admin <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">Login</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter your credentials to manage event bookings
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-red-400 text-sm animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email Input */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                required
                className="w-full bg-[#050505] border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder:text-gray-600 outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                <Lock size={18} />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••••"
                required
                className="w-full bg-[#050505] border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder:text-gray-600 outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-black font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              <span>Access Dashboard</span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;