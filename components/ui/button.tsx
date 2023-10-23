import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white hover:bg-[#ededed] transition-all duration-150 ease-linear border border-zinc-300 p-2 rounded-xl shadow-sm text-secondary"
    >
      {children}
    </button>
  );
}
