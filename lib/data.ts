import { IProject } from "@/lib/types";

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
