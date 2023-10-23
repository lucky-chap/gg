"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import me from "@/public/images/me.jpg";
import { Bell, Github } from "lucide-react";
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
      className={`fixed left-10 w-full z-30 md:bg-opacity-90 pt-7 transition-all duration-300 ease-linear ${
        !top ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <section className="w-full mx-auto max-w-2xl bg-white cursor-default transition-all duration-150 ease-linear border border-zinc-100 p-2 rounded-xl shadow-sm text-secondary">
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
          <h2 className="text-zinc-700">Obed Danquah</h2>
          <div className="">
            <Button>
              <Github className="opacity-60" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
}
