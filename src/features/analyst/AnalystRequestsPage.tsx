import { PageHeader } from "../../shared/ui/PageHeader";

export function AnalystRequestsPage() {
  return (
    <div>
      <PageHeader
        title="Solicitudes a revisar"
        description="Lista de solicitudes de préstamo pendientes de aprobación o rechazo."
      />
      <div className="mt-6 rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-sm text-zinc-500">
        Pendiente de conectar con tu API para listar solicitudes asignadas al
        analista.
      </div>
    </div>
  );
}

