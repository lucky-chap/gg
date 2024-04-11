import React from "react";
import Pill from "./ui/pill";
import { Link, Github, ExternalLink } from "lucide-react";
import Button from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="sm:grid grid-cols-10 mt-12">
      <p className="span-2 mt-1 text-zinc-950 mb-5 sm:mb-0">Projects</p>
      <div className="col-start-3 col-span-full text-zinc-500 font-normal">
        {projects.map((p, i) => (
          <div key={p.name} className="mb-10">
            <div className="flex justify-between items-center pb-4">
              <p className="text-[#676767] font-medium">{p.name}</p>
              <div className="flex items-center">
                {p.live && (
                  <a
                    href={p.live}
                    rel="noreferrer"
                    target="_blank"
                    className="mr-2"
                  >
                    <Button>
                      <div className="flex items-center font-medium">
                        <Link
                          className="opacity-60"
                          strokeWidth={2.3}
                          size={18}
                        />
                      </div>
                    </Button>
                  </a>
                )}

                {p.github && (
                  <a href={p.github} rel="noreferrer" target="_blank">
                    <Button>
                      <div className="flex items-center font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-60"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </div>
                    </Button>
                  </a>
                )}
              </div>
            </div>
            <p className="pb-4">{p.description} </p>
            <div className="pb-4 flex items-center flex-wrap">
              {p.tags.map((t, i) => (
                <Pill key={i}>{t}</Pill>
              ))}
            </div>
          </div>
        ))}

        <a
          href="https://github.com/lucky-chap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <div className="flex items-center justify-center sm:px-10 w-full font-medium">
              <p className="text-[#676767]">See more on GitHub</p>
              <ExternalLink
                className="opacity-60 ml-2"
                strokeWidth={2.3}
                size={18}
              />
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
}
