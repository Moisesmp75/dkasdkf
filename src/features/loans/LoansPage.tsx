import { LoanRequestForm } from "./components/LoanRequestForm";

export function LoansPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold text-zinc-900">
        Solicitar préstamo
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Completa la información para enviar una solicitud al analista de
        crédito.
      </p>
      <LoanRequestForm />
    </div>
  );
}

