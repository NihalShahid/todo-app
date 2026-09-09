import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { signout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome!</h2>
        <p>You're successfully signed in.</p>
        <button onClick={signout}>Sign Out</button>
      </div>
    </div>
  );
}
