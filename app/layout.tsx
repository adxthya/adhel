import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhel | Portfolio",
  description: "Adhel's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
