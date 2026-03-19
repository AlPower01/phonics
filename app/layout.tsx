import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Phonics.org Prototype",
  description:
    "A modern prototype for Phonics.org built from the supplied design brief and wireframes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
