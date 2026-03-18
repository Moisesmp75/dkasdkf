"use client";

import type { ReactNode } from "react";
import { Sidebar } from "../../src/shared/components/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />
      <main className="flex-1 px-8 py-8">{children}</main>
    </div>
  );
}

