import type { ReactNode } from "react";
import { Providers } from "../src/app/providers";
import "../app/globals.css";

export const metadata = {
  title: "CashUp",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

