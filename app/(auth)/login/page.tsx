"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../src/app/store";
import { loginSuccess } from "../../../src/features/auth/store/auth-slice";
import { loginService } from "../../../src/features/auth/services/auth-service";
import { Button } from "../../../src/shared/components/Button";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await loginService({ email, password });
      dispatch(loginSuccess(result));
    } catch (err) {
      setError("No se pudo iniciar sesión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-zinc-900">Iniciar sesión</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Accede como cliente o analista de crédito.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-800"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-800"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" fullWidth disabled={loading}>
          {loading ? "Iniciando sesión..." : "Entrar"}
        </Button>
      </form>
      <p className="mt-4 text-sm text-zinc-600">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="font-medium text-zinc-900 underline">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}

