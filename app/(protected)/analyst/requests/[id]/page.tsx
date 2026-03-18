"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../../../../src/shared/components/Button";

export default function AnalystRequestDetailPage() {
  const router = useRouter();

  // TODO: Obtener el ID de la ruta con params cuando conectes con datos reales

  const handleDecision = (decision: "APPROVED" | "REJECTED") => {
    // TODO: Llamar a tu API para registrar la decisión del analista
    console.log("decision", decision);
    router.back();
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold text-zinc-900">
        Detalle de solicitud
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Revisa la información de la solicitud antes de aprobar o rechazar.
      </p>

      <div className="mt-6 space-y-4 rounded-lg border border-zinc-200 bg-white px-4 py-4 text-sm">
        <div>
          <p className="text-xs font-medium uppercase text-zinc-500">
            Cliente
          </p>
          <p className="text-zinc-800">Nombre de ejemplo</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-xs font-medium uppercase text-zinc-500">
              Monto
            </p>
            <p className="text-zinc-800">$ 10,000.00</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase text-zinc-500">
              Plazo
            </p>
            <p className="text-zinc-800">12 meses</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase text-zinc-500">
            Motivo
          </p>
          <p className="text-zinc-800">
            Texto de ejemplo para el motivo del préstamo. Aquí verás el motivo
            real cuando conectes la API.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase text-zinc-500">
            Ingreso mensual
          </p>
          <p className="text-zinc-800">$ 2,500.00</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Button
          variant="secondary"
          onClick={() => handleDecision("REJECTED")}
          className="border-red-500 text-red-600 hover:bg-red-50"
        >
          Rechazar
        </Button>
        <Button onClick={() => handleDecision("APPROVED")}>Aprobar</Button>
      </div>
    </div>
  );
}

