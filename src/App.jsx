import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LandingPage from "./pages/LandingPage";
import DashboardHome from "./pages/DashboardHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          {/* Add more dashboard routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
