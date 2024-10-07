"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Main Navbar */}
      <div className="flex justify-between px-2 md:px-8 lg:px-44 w-full h-14 text-sm text-white bg-[#16151f] items-center">
        <div>UsWritings</div>
        {/* Main Menu Items */}
        <div className="hidden lg:flex gap-x-8 ml-4 text-xm ">
          {/* Services with Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="text-sm flex items-center">
              Services
              <span>
                <Image
                  alt="Menu"
                  src="/assets/chevron-down.svg"
                  width={18}
                  height={18}
                  className="object-cover ml-2"
                />
              </span>
            </div>
            {isServicesOpen && (
              <div className="absolute -left-6 top-full mt-4 w-56 bg-[#16151f] text-white border-t-[1px] border-blue-700 p-4 shadow-lg">
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Essay Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Dissertation Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Assignment Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Admission Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Coursework Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  CV Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Copywriting Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Editing Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Proofreading Services
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-sm">
            Prices
          </a>
          <a href="#" className="text-sm">
            Samples
          </a>
          <a href="#" className="text-sm">
            Our Writers
          </a>
          <a href="#" className="text-sm">
            Reviews
          </a>

          {/* More with Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <div className="text-sm flex items-center">
              More
              <span>
                <Image
                  alt="Menu"
                  src="/assets/chevron-down.svg"
                  width={18}
                  height={18}
                  className="object-cover ml-2"
                />
              </span>
            </div>
            {isMoreOpen && (
              <div className="absolute -left-6 top-full mt-4 w-56 bg-[#16151f] text-white border-t-[1px] border-blue-700 p-4 shadow-lg">
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Discounts
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Extras
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  How It Works
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-x-1 items-center justify-center">
          <div className="rounded-full p-2 flex items-center justify-center md:bg-[#2b87f5] hover:border-none group cursor-pointer transition duration-500 ease-in-out border-none md:border md:border-gray-200/25 md:mx-2">
            <Image
              alt="Log in"
              src="https://ukwritings.com/assets/login_bg-cdcbbda56887cb081a7b23295d91df44f77e7419ab43f66bde786608cfd18290.svg"
              width={18}
              height={18}
              className="object-cover"
            />
            <span className="text-sm ml-2 hidden lg:group-hover:inline-block text-white transition duration-500 ease-in-out">
              Log In
            </span>
          </div>
          <div className="rounded-full p-2 flex items-center justify-center lg:hover:px-6 group cursor-pointer transition duration-1000 ease-in-out border-none md:border-solid md:border-[1px] md:border-gray-200/25 md:mx-2">
            <Image
              alt="Chat now"
              src="https://ukwritings.com/assets/chat_bg-6de9112275c6cc37cb13c19e127293b88662be0ff8324e320c0e38fa591d669f.svg"
              width={18}
              height={18}
              className="object-cover"
            />
            <span className="text-sm ml-2 hidden lg:group-hover:inline-block text-white transition duration-1000 ease-in-out">
              Chat now
            </span>
          </div>
          <div className="rounded-full p-2 flex items-center justify-center lg:hover:px-6 group cursor-pointer transition duration-500 ease-in-out border-none md:border-solid md:border-[1px] md:border-gray-200/25 md:mx-2">
            <Image
              alt="Call now"
              src="https://ukwritings.com/assets/call_bg-d2deb0efcb594c47b86e03c26a735ace4237fadd46d030a1ac1042b52b15be5c.svg"
              width={18}
              height={18}
              className="object-cover"
            />
            <span className="text-sm ml-2 hidden lg:group-hover:inline-block text-white transition duration-500 ease-in-out">
              +254 759 439032
            </span>
          </div>
          <div className="group md:inline-block cursor-pointer">
            <div className="border-b-[1px] border-[#ffd639] text-[#ffd639] md:border-[1px] md:rounded-[3px] font-bold text-sm px-4 md:px-8 py-2 transition-all duration-300 md:group-hover:text-white md:group-hover:bg-gradient-to-b md:group-hover:from-[#ffd74b] md:group-hover:to-[#ffb71a]">
              ORDER NOW
            </div>
          </div>

          {/* Hamburger Menu for Small Devices */}
          <Sheet>
            <SheetTrigger>
              <div className="block md:hidden lg:hidden cursor-pointer p-2">
                <Image
                  alt="Menu"
                  src="/assets/menu-icon.svg"
                  width={28}
                  height={28}
                  className="object-cover text-white"
                />
              </div>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#16151f] text-white w-full p-4"
            >
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm">
                  Log In
                </a>
                <a href="#" className="text-sm">
                  Chat now
                </a>
                <a href="#" className="text-sm">
                  Call now
                </a>
                <a href="#" className="text-sm">
                  ORDER NOW
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Toggle Menu for Medium Devices */}
          <div
            className="hidden md:block lg:hidden cursor-pointer ml-4"
            onClick={toggleMenu}
          >
            <Image
              alt="Menu"
              src="/assets/menu-icon.svg"
              width={28}
              height={28}
              className="object-cover text-white"
            />
          </div>
        </div>
      </div>

      {/* Expanded Menu for Medium Devices */}
      {isMenuOpen && (
        <div className="hidden md:flex gap-x-10  lg:hidden bg-[#16151f] border-t-[1px] border-gray-300/25 text-white w-full p-4">
          {/* Main Menu Items */}

          {/* Services with Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="text-sm flex items-center">
              Services
              <span>
                <Image
                  alt="Menu"
                  src="/assets/chevron-down.svg"
                  width={18}
                  height={18}
                  className="object-cover ml-2"
                />
              </span>
            </div>
            {isServicesOpen && (
              <div className="absolute -left-6 top-full mt-4 w-56 bg-[#16151f] text-white border-t-[1px] border-blue-700 p-4 shadow-lg">
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Essay Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Dissertation Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Assignment Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Admission Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Coursework Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  CV Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Copywriting Service
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Editing Services
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Proofreading Services
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-sm">
            Prices
          </a>
          <a href="#" className="text-sm">
            Samples
          </a>
          <a href="#" className="text-sm">
            Our Writers
          </a>
          <a href="#" className="text-sm">
            Reviews
          </a>

          {/* More with Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <div className="text-sm flex items-center">
              More
              <span>
                <Image
                  alt="Menu"
                  src="/assets/chevron-down.svg"
                  width={18}
                  height={18}
                  className="object-cover ml-2"
                />
              </span>
            </div>
            {isMoreOpen && (
              <div className="absolute -left-6 top-full mt-4 w-56 bg-[#16151f] text-white border-t-[1px] border-blue-700 p-4 shadow-lg">
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Discounts
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Extras
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block text-sm mb-2 font-extralight tracking-wider"
                >
                  How It Works
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
