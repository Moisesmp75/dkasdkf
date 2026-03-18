"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-zinc-900">CashUp</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Demo de navegación sin validaciones de auth.
        </p>
        <div className="mt-6 space-y-3">
          <Link
            href="/dashboard"
            className="block w-full rounded-md bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-zinc-800"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </main>
  );
}

