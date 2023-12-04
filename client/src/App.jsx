import { useContext } from "react";
import { Home, ProfilePage, Login, Register } from "./pages";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Register />} />
          <Route path="/profile/:username" exact element={<ProfilePage />} />
          <Route
            path="/register"
            exact
            element={user ? <Navigate to="/login" /> : <Register />}
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
