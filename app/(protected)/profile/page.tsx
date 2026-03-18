import { useAppSelector } from "../../../src/app/store";

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Perfil</h1>
        <p className="mt-2 text-sm text-zinc-600">
          No se encontró información del usuario.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold text-zinc-900">Perfil</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Información básica de tu cuenta.
      </p>
      <dl className="mt-6 space-y-4 text-sm">
        <div>
          <dt className="font-medium text-zinc-800">Nombre</dt>
          <dd className="text-zinc-700">{user.name}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-800">Correo</dt>
          <dd className="text-zinc-700">{user.email}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-800">Rol</dt>
          <dd className="text-zinc-700">
            {user.role === "ANALYST" ? "Analista de crédito" : "Cliente"}
          </dd>
        </div>
      </dl>
    </div>
  );
}

