export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">
          Resumen de tu crédito
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Visualiza de un vistazo el estado general de tus préstamos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <p className="text-xs font-medium uppercase text-zinc-500">
            Monto total aprobado
          </p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">
            S/ 25,000.00
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Suma de todos tus créditos activos.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <p className="text-xs font-medium uppercase text-zinc-500">
            Cuota del mes
          </p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">
            S/ 1,250.00
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Próxima cuota a pagar en este periodo.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <p className="text-xs font-medium uppercase text-zinc-500">
            Estado de riesgo
          </p>
          <p className="mt-2 inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
            Al día
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Mantén tus pagos al día para conservar este estado.
          </p>
        </div>
      </div>
    </div>
  );
}

