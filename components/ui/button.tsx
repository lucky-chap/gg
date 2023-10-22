import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full bg-white hover:bg-[#ededed] transition-all duration-150 ease-linear border border-zinc-300 p-2 rounded-xl shadow-sm text-secondary">
      {children}
    </button>
  );
}
