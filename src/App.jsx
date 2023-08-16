import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AuthRequired from "./components/authRequired";

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={ <SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        
            <Route element={<AuthRequired />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default App;