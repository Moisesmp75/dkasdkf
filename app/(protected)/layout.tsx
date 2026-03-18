"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../src/app/store";
import { logout } from "../../src/features/auth/store/auth-slice";
import { Button } from "../../src/shared/components/Button";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
        <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white px-6 py-8 text-center shadow-sm">
          <h1 className="text-xl font-semibold text-zinc-900">
            Sesión requerida
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Debes iniciar sesión para acceder al panel.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Ir a login
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <aside className="flex w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">CashUp</h1>
          <p className="mt-1 text-xs text-zinc-600">
            {user?.role === "ANALYST"
              ? "Panel de analista de crédito"
              : "Panel de cliente"}
          </p>
        </div>
        <nav className="mt-6 space-y-2 text-sm">
          <Link
            href="/dashboard"
            className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
          >
            Resumen
          </Link>
          <Link
            href="/profile"
            className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
          >
            Perfil
          </Link>
          {user?.role === "CLIENT" && (
            <>
              <Link
                href="/loans/request"
                className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
              >
                Solicitar préstamo
              </Link>
              <Link
                href="/loans/mine"
                className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
              >
                Mis solicitudes
              </Link>
            </>
          )}
          {user?.role === "ANALYST" && (
            <Link
              href="/analyst/requests"
              className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
            >
              Solicitudes a revisar
            </Link>
          )}
        </nav>
        <div className="mt-auto border-t border-zinc-200 pt-4">
          <div className="text-xs text-zinc-600">
            <p className="font-medium text-zinc-800">{user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 w-full justify-start px-0 text-xs text-zinc-700"
            onClick={() => dispatch(logout())}
          >
            Cerrar sesión
          </Button>
        </div>
      </aside>
      <main className="flex-1 px-8 py-8">{children}</main>
    </div>
  );
}

