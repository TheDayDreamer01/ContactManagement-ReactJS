import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Errors from "./pages/Errors";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/error" element={<Errors />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
