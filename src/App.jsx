import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
// import AuthRequired from "./components/AuthRequired";

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={ <Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
            {/* <Route element={<AuthRequired />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route> */}
        </Routes>
    );
};

export default App;