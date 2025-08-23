import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      login(data.user, data.token);
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-white shadow rounded">
      <h2 className="text-xl mb-4 font-bold">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-2"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-2"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    </form>
  );
}
