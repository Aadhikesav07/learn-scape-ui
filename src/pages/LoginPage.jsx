import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const { login } = useStore();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login({ name: "Jane Doe", email, role: "student", profilePic: "/assets/logo.png" });
    navigate("/dashboard/student");
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white rounded shadow p-8">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-4">
        <a href="/register" className="text-blue-600">No account? Register</a>
      </div>
    </div>
  );
};

export default LoginPage;
