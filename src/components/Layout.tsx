import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12 sm:px-8 sm:py-16">
      <Header />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
