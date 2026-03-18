export type AppRouteId =
  | "dashboard"
  | "profile"
  | "loans-request"
  | "loans-mine"
  | "analyst-requests";

export interface AppRoute {
  id: AppRouteId;
  label: string;
  path: string;
  roles?: Array<"CLIENT" | "ANALYST">;
}

export const APP_ROUTES: AppRoute[] = [
  {
    id: "dashboard",
    label: "Resumen",
    path: "/dashboard",
  },
  {
    id: "profile",
    label: "Perfil",
    path: "/profile",
  },
  {
    id: "loans-request",
    label: "Solicitar préstamo",
    path: "/loans/request",
    roles: ["CLIENT"],
  },
  {
    id: "loans-mine",
    label: "Mis solicitudes",
    path: "/loans/mine",
    roles: ["CLIENT"],
  },
  {
    id: "analyst-requests",
    label: "Solicitudes a revisar",
    path: "/analyst/requests",
    roles: ["ANALYST"],
  },
];

export function getVisibleRoutesForRole(
  role: "CLIENT" | "ANALYST" | null | undefined,
) {
  return APP_ROUTES.filter((route) => {
    if (!route.roles) return true;
    if (!role) return false;
    return route.roles.includes(role);
  });
}


