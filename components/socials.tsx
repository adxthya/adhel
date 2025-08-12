"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your@email.com",
    },
  ];

  return (
    <div className="flex gap-5 justify-center mt-8">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors"
            aria-label={social.name}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
}
