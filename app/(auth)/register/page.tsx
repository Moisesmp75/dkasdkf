"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { registerService } from "../../../src/features/auth/services/auth-service";
import { Button } from "../../../src/shared/components/Button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"CLIENT" | "ANALYST">("CLIENT");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await registerService({ name, email, password, role });
    } catch (err) {
      setError("No se pudo crear la cuenta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-zinc-900">Crear cuenta</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Registra un nuevo usuario como cliente o analista de crédito.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-800"
          >
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
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
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <div className="space-y-1">
          <span className="block text-sm font-medium text-zinc-800">
            Tipo de usuario
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setRole("CLIENT")}
              className={`flex-1 rounded-md border px-3 py-2 text-sm ${
                role === "CLIENT"
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-800"
              }`}
            >
              Cliente
            </button>
            <button
              type="button"
              onClick={() => setRole("ANALYST")}
              className={`flex-1 rounded-md border px-3 py-2 text-sm ${
                role === "ANALYST"
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-800"
              }`}
            >
              Analista
            </button>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" fullWidth disabled={loading}>
          {loading ? "Creando cuenta..." : "Registrarme"}
        </Button>
      </form>
      <p className="mt-4 text-sm text-zinc-600">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-medium text-zinc-900 underline">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}

