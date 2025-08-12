"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-xl text-indigo-600 hidden lg:flex"
        >
          Adhel Johnson
        </Link>
        <ul className="flex space-x-6 items-center justify-center w-screen lg:w-fit">
          <li>
            <Link
              href="/"
              className="text-white hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
