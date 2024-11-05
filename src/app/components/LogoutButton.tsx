import { logoutUser } from "../lib/firebase";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("Logged out successfully!");
    } catch (error) {
      alert("Error logging out");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
