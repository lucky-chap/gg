"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="p-5">
      <div className="mt-32">
        <h1 className="text-8xl font-bold tracking-wider text-transparent sm:mt-6 lg:leading-[0.8]">
          <span className="bg-[#99f6e4] text-black leading-[1.25]">
            Hey there! I'm Virgil, a frontend developr & mystic.
          </span>
          <span className="bg-[#99f6e4] text-black leading-[1.25] hidden">
            One line of code at a time.
          </span>
        </h1>
      </div>
      {/* <div className="mt-20">
        <h1 className="text-8xl font-bold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-rose-500 to-rose-600 sm:mt-6 lg:leading-[0.8]">
          <span className="leading-[1.25]">
            Hi, I'm a frontend developer dedicated to creating user-centric web
            experiences.
          </span>
          <span className="leading-[1.25] hidden">
            One line of code at a time.
          </span>
        </h1>
      </div> */}

      <div className="mt-16">
        <p className="text-4xl text-secondary italic leading-normal font-normal">
          I'm Obed, a Ghana based fullstack developer specialising in creating
          beautiful and performant products with great experiences for mobile
          and web-based applications with a focus on simplicity & usability.
        </p>
      </div>
    </section>
  );
}
