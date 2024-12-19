"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { SignupForm } from "@/components/signup-form";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignupForm
          user={user}
          onInputChange={handleInputChange}
          onSignup={onSignup}
        />
      </div>
    </div>
  );
}
