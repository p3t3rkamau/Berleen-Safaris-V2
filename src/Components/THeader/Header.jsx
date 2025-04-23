"use client";
import * as React from "react";

export function Header() {
  return (
    <header
      role="banner"
      className="flex items-center px-4 py-0 w-full h-16 bg-white border-b border-solid border-b-gray-200"
    >
      <a href="/" className="flex items-center">
        <img
          alt="Logo"
          src="https://www.trivago.com/_static/images/logo_08112023.png"
          className="object-cover overflow-hidden aspect-square w-[105px]"
        />
      </a>
    </header>
  );
}
