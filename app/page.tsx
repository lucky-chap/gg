"use client";

import Image from "next/image";
import React from "react";
import { Upload, Bell, Copy, Projector } from "lucide-react";

import demo from "@/public/images/demo.png";
import Button from "@/components/ui/button";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col py-14">
      <section className="flex flex-col items-center">
        <Image
          src={demo}
          alt="User"
          width={55}
          height={55}
          className="rounded-full pb-2"
        />

        <h2 className="text-2xl text-secondary pb-2">Obed Danquah</h2>
        <p className="pb-2">Est. 1999 · Auckland, NZ · he/him</p>
        <p className="max-w-xl text-center pb-2">
          Obed Danquah is a budding mystic, frontend web developer and
          science-lover based in Ghana.
        </p>
        <div className="flex items-center max-w-sm w-full justify-between">
          <Button>
            <Upload className="opacity-60" size={18} />
          </Button>
          <div className="mx-2"></div>
          <Button>
            <div className="flex items-center px-10 font-medium">
              <p className="text-[#676767]">hunchodotdev@gmail.com</p>
              <Copy className="opacity-60 ml-2" strokeWidth={2.3} size={18} />
            </div>
          </Button>
          <div className="mx-2"></div>
          <Button>
            <Bell className="opacity-60" size={18} />
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="grid grid-cols-10 mt-24">
        <p className="span-2">About</p>
        <div className="col-start-3 col-span-full text-zinc-500 font-normal">
          <p className="pb-4">
            With over 2 years of experience in the field, I take pride in
            delivering visually stunning and user-centric products that exceed
            client expectations.
          </p>
          <p className="pb-4">
            Whether it's collaborating with cross-functional teams or leading
            projects, my attention to detail and dedication to excellence has
            earned me a reputation for delivering exceptional results.
          </p>
        </div>
      </section>

      <Experience />

      <Projects />
    </div>
  );
}
