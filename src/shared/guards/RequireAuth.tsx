"use client";

import { ReactNode } from "react";
import { useAuthGuard } from "./useAuthGuard";

interface RequireAuthProps {
  children: ReactNode;
  allowedRoles?: Array<"CLIENT" | "ANALYST">;
}

export function RequireAuth({ children, allowedRoles }: RequireAuthProps) {
  const { isAuthenticated, user } = useAuthGuard();

  if (!isAuthenticated) {
    return null;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}

