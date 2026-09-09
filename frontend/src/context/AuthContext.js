import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const API_URL = process.env.REACT_APP_API_URL;

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const signin = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/signin`, { email, password });
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  const signup = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/signup`, { email, password });
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  const signout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
