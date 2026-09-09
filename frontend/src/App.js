import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";

function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/signin" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
