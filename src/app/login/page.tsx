"use client";
import { LoginForm } from "@/components/login-form";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      toast.success("Login successful");
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm
          user={user}
          onInputChange={handleInputChange}
          onLogin={onLogin}
        />
      </div>
    </div>
  );
}
