import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-30 md:bg-opacity-90 transition duration-300 ease-in-out max-w-7xl mx-auto backdrop-blur-sm shadow-lg">
      <div className="mr-6 p-5">
        <div className="flex items-center justify-between">
          <h2 className="">
            <span className="">Virgil</span>
          </h2>
          <div className="flex items-center">
            <Link
              href={"/"}
              className="mr-2 text-secondary hover:text-primary transition-all duration-150 ease-linear"
            >
              logo
            </Link>
            <button className="bg-primary mx-3 text-black rounded-md px-2 hover:bg-white/90 transition-all duration-150 ease-linear uppercase text-base h-6 font-bold">
              Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
