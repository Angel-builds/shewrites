import type { ReactNode } from "react";

import { Header } from "@/components/Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <Header />
      <main>{children}</main>
    </div>
  );
}
