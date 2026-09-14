import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getCurrentAdmin } from "../api/adminApi";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("adminToken");

    const { isLoading, isError } = useQuery({
        queryKey: ["currentAdmin"],
        queryFn: getCurrentAdmin,
        enabled: !!token,
        retry: false,
    });

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
                Verifying admin...
            </div>
        );
    }

    if (isError) {
        localStorage.removeItem("adminToken");

        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute;