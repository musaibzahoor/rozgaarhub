import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";

function MainApp() {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6">
      {user ? (
        <>
          <h1 className="text-2xl">Welcome, {user.name}</h1>
          <LogoutButton />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
