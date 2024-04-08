"use client";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const sendSubscriptionEmail = async (email: string) => {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { status } = await response.json();
  };

  const handleSubscribe = () => {
    setIsSubscribed(true);
    sendSubscriptionEmail(email);
    setEmail("");
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-stretch">
      <input
        type="text"
        placeholder="email@address.com"
        className="p-2 text-lg border-2 border-gray-200 flex-grow bg-gray-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubscribed}
      />
      <button
        className={`px-6 py-2 text-white transition-colors ${
          isSubscribed ? "bg-green-500 hover:bg-green-400" : "bg-gray-800 hover:bg-gray-700"
        }`}
        onClick={handleSubscribe}
        disabled={isSubscribed}
      >
        {isSubscribed ? "Subscribed!" : "Subscribe"}
      </button>
    </div>
  );
}
