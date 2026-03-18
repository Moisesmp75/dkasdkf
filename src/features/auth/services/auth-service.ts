import type { User, UserRole } from "../types/auth";

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

export async function loginService(params: LoginParams): Promise<{
  token: string;
  user: User;
}> {
  // TODO: Reemplazar por llamada real a tu API
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

export async function registerService(_params: RegisterParams): Promise<void> {
  // TODO: Reemplazar por llamada real a tu API de registro
  return;
}

