import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Errors from "./pages/Errors";

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={ <Auth />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/error" element={<Errors />} />
        </Routes>
    );
};

export default App;