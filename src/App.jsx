import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Errors from "./pages/Errors";

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Auth />} />

      {/* Authentication Pages */}
      <Route path="/auth/*" element={<Auth />} />

      {/* Dashboard */}
      <Route path="/dashboard/*" element={<Dashboard />} />

      {/* Error Pages */}
      <Route path="/error/*" element={<Errors />} />

      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
