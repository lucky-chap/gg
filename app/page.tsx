"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Upload,
  Bell,
  Copy,
  CheckCircle,
  Check,
  Linkedin,
  Github,
  Twitter,
  FileDown,
  ExternalLink,
} from "lucide-react";

import yeshua from "@/public/images/me.jpg";
import Button from "@/components/ui/button";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Discord from "@/components/discord";

export default function Home() {
  const email = "hunchodotdev@gmail.com";
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }
  return (
    <div className="flex flex-col py-14">
      <section className="flex flex-col items-center">
        <Image
          src={yeshua}
          alt="User"
          width={55}
          height={55}
          className="rounded-full"
        />

        <h2 className="text-2xl text-secondary py-2">Obed Danquah</h2>
        <p className="pb-2">Frontend Developer · Mystic · he/him</p>
        <p className="max-w-xl text-center pb-3">
          Hi! Obed here. I am a visionary web developer with a passion for
          turning ideas into captivating digital experiences.
        </p>

        {/* resume, twitter and discord */}

        <div className="flex flex-wrap flex-row sm:items-center font-medium my-2">
          <div className="flex items-center sm:mt-0 font-medium mr-3">
            <FileDown className="opacity-60" size={19} strokeWidth={2.1} />
            <p className="text-[#676767] pl-1">
              <a
                href="/huncho.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={true}
              >
                resume
              </a>
            </p>
          </div>

          <div className="flex items-center mr-3">
            <Twitter className="opacity-60" size={19} strokeWidth={2.1} />
            <p className="text-[#676767] pl-1">
              <a
                href="https://x.com/hunchodotdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                @hunchodotdev
              </a>
            </p>
          </div>

          <div className="flex items-center mt-1 sm:mt-0">
            <Discord />
            <p className="text-[#676767] pl-1">
              <a
                href="https://discord.com/users/22assisi"
                target="_blank"
                rel="noopener noreferrer"
              >
                22assisi
              </a>
            </p>
          </div>
        </div>
        {/* ----------- */}

        <div className="flex sm:items-center w-full justify-between mt-2">
          <a
            href={"https://www.linkedin.com/in/obed-danquah-67782028b/"}
            target="_blank"
            rel="noreferrer"
            className="hidden"
          >
            <Button>
              {/* <Upload className="opacity-60" size={18} /> */}
              <Linkedin className="opacity-60" size={18} />
            </Button>
          </a>
          <div className="sm:mx-2"></div>
          <div className="sm:max-w-2xl -ml-3 sm:-ml-0">
            <Button onClick={() => handleCopy()}>
              <div className="flex items-center font-medium">
                <div className="flex items-center w-full px-5 sm:px-10">
                  <p className="text-[#676767]">{email}</p>
                  <Copy
                    className="opacity-60 ml-2"
                    strokeWidth={2.3}
                    size={18}
                  />
                </div>
              </div>
            </Button>
          </div>

          <div className="sm:mx-2"></div>
          <a
            href={"https://github.com/lucky-chap"}
            target="_blank"
            rel="noreferrer"
            className="hidden"
          >
            <Button>
              {/* <Bell className="opacity-60" size={18} /> */}
              <Github className="opacity-60" size={18} />
            </Button>
          </a>
        </div>

        <p
          className={`flex items-center mt-6 text-xs ml-5 transition-all duration-300 ease-linear ${
            copied ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Check className="opacity-60 mr-1" size={18} />
          <span>Email has been copied successfully!</span>
        </p>
      </section>

      {/* About */}
      <section className="sm:grid grid-cols-10 mt-12">
        <p className="span-2 text-zinc-950 mb-5 sm:mb-0">About</p>
        <div className="col-start-3 col-span-full text-zinc-500 font-normal">
          <p className="pb-4">
            With over 2 years of experience in the field, I take pride in
            delivering visually stunning and user-centric products that exceed
            client expectations.
          </p>
          <p className="pb-4">
            Whether it&apos;s collaborating with cross-functional teams or
            leading projects, my attention to detail and dedication to
            excellence has earned me a reputation for delivering exceptional
            results.
          </p>
        </div>
      </section>

      <Experience />

      <Projects />

      <Footer />
    </div>
  );
}
