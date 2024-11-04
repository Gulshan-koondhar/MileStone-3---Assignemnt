"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/Union.png";
import NavBar from "./NavBar";
import Search from "./Search";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle click and set active link

  const handleMenu = () => {
    setIsOpen((s) => (s = !s));
  };
  return (
    <header>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <h1 className="font-normal">
              Meta <span className="font-bold">Blog</span>
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul>
              <NavBar class="flex gap-8 text-lg" />
            </ul>
          </div>

          <div className="hidden md:block">
            <Search />
          </div>
          {isOpen && (
            <div className="lg:hidden">
              <NavBar class="bg-black text-white z-20 rounded-lg p-3 absolute text-center flex flex-col space-y-4 list-none top-16 right-0" />
            </div>
          )}
          <div className="lg:hidden" onClick={handleMenu}>
            {isOpen ? (
              <button>
                <X />
              </button>
            ) : (
              <button>
                <Menu />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
