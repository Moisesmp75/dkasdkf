"use client";

import { FormEvent, useState } from "react";
import { Button } from "../../../shared/components/Button";

export function LoanRequestForm() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [reason, setReason] = useState("");
  const [income, setIncome] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      // TODO: Reemplazar por mutation real (TanStack Query) hacia tu API
      console.log("create-loan", { amount, term, reason, income });
      setSuccess(true);
    } catch (err) {
      setError("No se pudo enviar la solicitud de préstamo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="space-y-1">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-zinc-800"
        >
          Monto solicitado
        </label>
        <input
          id="amount"
          type="number"
          min={0}
          required
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="term"
          className="block text-sm font-medium text-zinc-800"
        >
          Plazo (meses)
        </label>
        <input
          id="term"
          type="number"
          min={1}
          required
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="income"
          className="block text-sm font-medium text-zinc-800"
        >
          Ingreso mensual aproximado
        </label>
        <input
          id="income"
          type="number"
          min={0}
          required
          value={income}
          onChange={(event) => setIncome(event.target.value)}
          className="block w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="reason"
          className="block text-sm font-medium text-zinc-800"
        >
          Motivo del préstamo
        </label>
        <textarea
          id="reason"
          required
          rows={4}
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="block w-full resize-none rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {success && (
        <p className="text-sm text-emerald-600">
          Solicitud enviada correctamente.
        </p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? "Enviando solicitud..." : "Enviar solicitud"}
      </Button>
    </form>
  );
}

