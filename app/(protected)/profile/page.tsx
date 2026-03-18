export default function ProfilePage() {
  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Perfil</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Información básica del cliente y datos de contacto.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <dl className="space-y-4 text-sm">
          <div className="flex items-start justify-between gap-4">
            <dt className="text-zinc-500">Nombre completo</dt>
            <dd className="font-medium text-zinc-900">Usuario Demo</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-zinc-500">Correo electrónico</dt>
            <dd className="font-medium text-zinc-900">
              demo@cashup.app
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-zinc-500">Tipo de cliente</dt>
            <dd className="inline-flex rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800">
              Cliente de crédito
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-zinc-500">Ingresos mensuales aprox.</dt>
            <dd className="font-medium text-zinc-900">S/ 4,500.00</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

