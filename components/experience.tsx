import { experience } from "@/lib/data";
import React from "react";

export default function Experience() {
  return (
    <section className="sm:grid grid-cols-10 mt-12">
      <p className="span-2 text-zinc-950 mb-5 sm:mb-0">Experience</p>
      <div className="col-start-3 col-span-full text-zinc-500 font-normal">
        {experience.map((e, i) => (
          <div key={e.date} className="mb-10">
            <div className="flex justify-between items-center flex-wrap">
              <p className="pb-3 text-[#676767] font-medium">{e.company}</p>
              <p className="pb-3 text-sm">{e.date}</p>
            </div>
            {e.achievements.map((a, i) => (
              <p key={i} className="pb-4">
                {a}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
