"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="shadow-sm fixed top-0 w-full z-50 bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-xl text-indigo-600 hidden lg:flex font-medium"
        >
          Adhel Johnson
        </Link>

        <ul className="flex space-x-6 items-center justify-center w-screen lg:w-fit">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 underline underline-offset-4"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
