"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import me from "@/public/images/me.jpg";
import Button from "./ui/button";
import Link from "next/link";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 pt-7 transition-all duration-300 ease-linear ${
        !top ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <section className="w-[90%] sm:w-full mx-auto max-w-2xl bg-white cursor-default transition-all duration-150 ease-linear border border-zinc-100 p-2 rounded-xl shadow-sm text-secondary">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={me}
              alt="User"
              width={44}
              height={44}
              className="rounded-full p-1"
            />
          </Link>
          <h2 className="text-zinc-700 font-medium">Obed Danquah</h2>
          <div className="">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
}
