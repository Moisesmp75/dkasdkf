"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-emerald-50 via-zinc-50 to-zinc-100">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-lg shadow-emerald-100 backdrop-blur">
        <h1 className="text-2xl font-semibold text-zinc-900">CashUp Créditos</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Simula, solicita y haz seguimiento a tus préstamos desde un solo lugar.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50 px-4 py-3">
            <p className="text-xs font-medium uppercase text-emerald-700">
              Demo
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              Por ahora la autenticación está desactivada para que puedas navegar
              libremente por las vistas.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="block w-full rounded-md bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Iniciar sesión y entrar al panel
          </Link>

          <p className="text-center text-xs text-zinc-500">
            Desde el panel podrás acceder a tu perfil, crear solicitudes de
            crédito, revisar tus deudas y ver las solicitudes como analista.
          </p>
        </div>
      </div>
    </main>
  );
}

