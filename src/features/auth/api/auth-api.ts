import type { User, UserRole } from "../types/auth";
import { apiFetch } from "../../../shared/api/client";

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

interface LoginResponse {
  token: string;
  user: User;
}

export async function loginApi(params: LoginParams): Promise<LoginResponse> {
  // TODO: Reemplazar por endpoint real de login
  // Ejemplo con cliente HTTP común:
  // return apiFetch<LoginResponse>("/auth/login", {
  //   method: "POST",
  //   body: JSON.stringify(params),
  // });

  const role: UserRole = params.email.includes("analyst") ? "ANALYST" : "CLIENT";

  return {
    token: "mock-token",
    user: {
      id: "1",
      name: "Usuario Demo",
      email: params.email,
      role,
    },
  };
}

export async function registerApi(
  _params: RegisterParams,
): Promise<void> {
  // TODO: Reemplazar por endpoint real de registro
  // await apiFetch<void>("/auth/register", {
  //   method: "POST",
  //   body: JSON.stringify(_params),
  // });
}

