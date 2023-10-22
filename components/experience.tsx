import React from "react";

export default function Experience() {
  return (
    <section className="grid grid-cols-10 mt-12">
      <p className="span-2">Experience</p>
      <div className="col-start-3 col-span-full text-zinc-500 font-normal">
        {/* exp1 */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <p className="pb-2 text-zinc-900">The Baidens Foundation</p>
            <p className="pb-2 text-sm">Nov 2021 - July 2023</p>
          </div>
          <p className="pb-4">
            Created an elegant portfolio website featuring image galleries and
            interactive elements, custom-tailored for a married couple and their
            foundation to showcase their work.
          </p>
          <p className="pb-4">
            Created a unique and custom design that perfectly represented the
            couple's and their foundation's vision and values.
          </p>
        </div>
        {/* exp2 */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <p className="pb-2 text-zinc-900">Insurerity</p>
            <p className="pb-2 text-sm">Sep 2022 - Nov 2022</p>
          </div>
          <p className="pb-4">
            Revamped the policy management dashboard, resulting in a 3% decrease
            in user errors and a significant increase in overall user
            satisfaction.
          </p>
          <p className="pb-4">
            Collaborated closely with backend developers to integrate APIs and
            implemented state management solutions.
          </p>
          <p className="pb-4">
            Successfully deployed dockerized application to Google Cloud.
          </p>
        </div>
        {/* exp3 */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <p className="pb-2 text-zinc-900">Freelance</p>
            <p className="pb-2 text-sm">Jan 2021 - Aug 2021</p>
          </div>
          <p className="pb-4">
            As a Freelance Web Developer, I provided custom web development
            solutions for clients across various industries.
          </p>
          <p className="pb-4">
            I delivered responsive and visually appealing websites while
            ensuring functionality and user experience met or exceeded client
            expectations.
          </p>
          <p className="pb-4">
            I managed projects from concept to completion, collaborating closely
            with clients to understand their requirements and delivering
            tailored solutions
          </p>
        </div>
      </div>
    </section>
  );
}
