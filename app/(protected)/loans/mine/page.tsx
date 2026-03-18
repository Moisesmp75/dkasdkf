export default function LoansMinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">
          Mis deudas y cronograma
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Revisa tus créditos activos, próximas cuotas y fechas de pago.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-zinc-900">
            Créditos activos
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Resumen de tus préstamos vigentes.
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-zinc-900">
                  Préstamo personal
                </p>
                <p className="text-xs text-zinc-500">Saldo pendiente</p>
              </div>
              <p className="font-semibold text-zinc-900">S/ 12,800.00</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-zinc-900">
                  Préstamo vehicular
                </p>
                <p className="text-xs text-zinc-500">Saldo pendiente</p>
              </div>
              <p className="font-semibold text-zinc-900">S/ 9,500.00</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-zinc-900">
            Próximo pago
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Detalle de la siguiente cuota programada.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Fecha límite</span>
              <span className="font-medium text-zinc-900">15/04/2026</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Monto de la cuota</span>
              <span className="font-medium text-zinc-900">S/ 750.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Estado</span>
              <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                Pendiente de pago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-sm text-zinc-500">
        Pendiente de conectar con tu API para mostrar el detalle real de tus
        deudas, calendario de pagos y estados.
      </div>
    </div>
  );
}

