import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">
          CashUp - Sistema de deudas
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Gestiona solicitudes de préstamo y revisiones de crédito con un flujo
          profesional para clientes y analistas.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </main>
  );
}

