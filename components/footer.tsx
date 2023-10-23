import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center mt-36 ml-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Website by{" "}
        <a href="https://x.com/hunchodotdev" target="_blank" rel="noreferrer">
          @hunchodotdev
        </a>
      </p>
    </footer>
  );
}
