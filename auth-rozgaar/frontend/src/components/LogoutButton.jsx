import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
      Logout
    </button>
  );
}
