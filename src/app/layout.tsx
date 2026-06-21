import type { Metadata } from "next";

import { Layout } from "@/components/Layout";

import "./globals.css";

export const metadata: Metadata = {
  title: "She Writes",
  description: "Minimalist developer portfolio and personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950 antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
