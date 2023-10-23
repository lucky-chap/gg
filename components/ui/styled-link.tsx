import React from "react";
import Link from "next/link";

export default function StyledLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-full bg-[#f4f4f4] transition-all duration-150 ease-linear border border-[#ededed] p-2 px-4 rounded-xl shadow-sm text-zinc-600"
    >
      {children}
    </Link>
  );
}
