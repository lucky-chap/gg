import { IProject, IExperience } from "@/lib/types";

export const projects: IProject[] = [
  {
    name: "Kaminari",
    description:
      "A modern Next.js, Tailwind CSS and shadcn-ui boilerplate that includes all you need to build amazing projects. No need to spend time on configuring the basic needs of a project.",
    live: "https://kaminari.vercel.app",
    github: "https://github.com/lucky-chap/kaminari",
    tags: ["Next.js", "Tailwind CSS", "Shadcn-ui"],
  },
  {
    name: "Wrighterly",
    description:
      "A Markdown-powered blogging system. Wrighterly harnesses the simplicity and versatility of Markdown to offer a seamless and user-friendly platform for bloggers and content creators.",
    live: "https://wrighterly.vercel.app/",
    github: "https://github.com/lucky-chap/wrighterly",
    tags: ["Node.js", "React.js", "Fastify", "Prisma"],
  },
  {
    name: "Zed",
    description:
      "Experience the future of file sharing with our cutting-edge application. Built using the latest technologies, including React, TypeScript, WebRTC, and socket.io, our platform ensures fast, secure, and seamless sharing of files.",
    // live: "https://wrighterly.vercel.app/",
    github: "https://github.com/lucky-chap/zed-sharing-react",
    tags: ["Node.js", "React.js", "WebRTC", "Socket.io", "Sequelize"],
  },
];

export const experience: IExperience[] = [
  {
    company: "The Baidens Foundation",
    date: "Aug 2021 - Oct 2023",
    achievements: [
      "Created an elegant portfolio website featuring image galleries and interactive elements, custom-tailored for a married couple and their foundation to showcase their work.",
      "Created a unique and custom design that perfectly represented the couple's and their foundation's vision and values.",
      "Led the migration of the platform to a new front-end framework, enhancing maintainability and scalability of the codebase.",
      "One of my noteworthy achievements with Jest was transforming a project's testing infrastructure. I took a complex, bug-ridden application with minimal test coverage and turned it into a well-protected fortress of code reliability. I designed a comprehensive test suite using Jest that covered critical functionality, making it a formidable guardian against regressions.",
    ],
  },
  {
    company: "Insurerity",
    date: "Sep 2022 - Nov 2022",
    achievements: [
      "Revamped the policy management dashboard, resulting in a 3% decrease in user errors and a significant increase in overall user satisfaction.",
      "Collaborated closely with backend developers to integrate APIs and implemented state management solutions.",
      "Successfully deployed dockerized application to Google Cloud.",
    ],
  },
  {
    company: "Freelance",
    date: "Jan 2021 - Aug 2021",
    achievements: [
      "I delivered responsive and visually appealing websites while ensuring functionality and user experience met or exceeded client expectations.",
      "I managed projects from concept to completion, collaborating closely with clients to understand their requirements and delivering tailored solutions.",
      "One notable achievement I had with Git was streamlining the development workflow for a complex web project. By implementing Git branching strategies and setting up a version control system, I significantly improved collaboration among the development team.",
    ],
  },
  {
    company: "Freelance",
    date: "March 2020 - Dec 2020",
    achievements: [
      "Designed and developed a modern, responsive, and user-friendly website for a local school, enhancing its online presence and accessibility.",
      "Provided training to school staff on using the website and offered ongoing technical support for any issues or updates.",
    ],
  },
];
