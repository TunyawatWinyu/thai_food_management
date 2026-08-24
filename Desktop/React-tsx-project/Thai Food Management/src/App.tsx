import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Page/Dashboard";
import { useEffect } from "react";
import Orders from "./Page/Orders";
import Menu from "./Page/Menu";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard", { replace: true });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
