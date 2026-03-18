import { LoanRequestForm } from "./components/LoanRequestForm";
import { PageHeader } from "../../shared/ui/PageHeader";

export function LoansPage() {
  return (
    <div className="max-w-xl">
      <PageHeader
        title="Solicitar préstamo"
        description="Completa la información para enviar una solicitud al analista de crédito."
      />
      <LoanRequestForm />
    </div>
  );
}

