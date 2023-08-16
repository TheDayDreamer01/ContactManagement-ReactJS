import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AuthRequired from "./components/authRequired";

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={ <Auth />} />
        
            <Route element={<AuthRequired />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default App;