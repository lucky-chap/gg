import React from "react";

export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium bg-white border border-zinc-300 p-2 rounded-xl shadow-sm mr-2 mb-2">
      {children}
    </span>
  );
}
