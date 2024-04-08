"use client";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

interface Props {
  onClose: () => void;
}

export default function ButtonMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button onClick={() => setShowMenu(true)}>
        <CiMenuBurger className="sm:hidden absolute right-10 top-5 text-white z-10" size={24} />
      </button>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </>
  );
}

function Menu({ onClose }: Props) {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 animate-slide-in backdrop-blur-sm">
      <div className="flex justify-end px-8 py-4">
        <button onClick={onClose} className="text-white text-4xl">
          &times;
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Link href="/products/lg-evo" className="text-white text-xl">
          Products
        </Link>
        <Link href="/products/lg-evo" className="text-white text-xl">
          Rooms
        </Link>
        <Link href="/products/lg-evo" className="text-white text-xl">
          Services
        </Link>
        <Link href="/products/lg-evo" className="text-white text-xl">
          Inspirations
        </Link>
      </div>
    </div>
  );
}
