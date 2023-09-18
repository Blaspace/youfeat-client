import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboadRoot from "./component/DashboadRoot";
import Index from "./pages/Index";
import ProtectedRoute from "./component/ProtectedRoute";
import PersistentLogin from "./component/PersistentLogin";
import PreventLogin from "./component/PreventLogin";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Admin from "./pages/Admin";
import UserRanking from "./pages/UserRanking";
import About from "./pages/About/About";

const App = () => {
  return (
    <Routes>
      <Route element={<PreventLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<PersistentLogin />}>
        <Route element={<DashboadRoot />}>
          <Route index element={<Index />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/notification" element={<Notification />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/rank" element={<UserRanking />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Route>
      <Route
        path="/*"
        element={
          <div className="none">
            <h1>Oops 404 pages not found</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
