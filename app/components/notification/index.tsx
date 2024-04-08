import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}

export default function Notification({ text }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 border rounded shadow-lg text-white transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      } bg-green-500`}
      style={{ transitionProperty: "opacity, transform" }}
    >
      {text}
    </div>
  );
}
