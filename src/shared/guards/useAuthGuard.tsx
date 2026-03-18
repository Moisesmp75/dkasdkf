import { useAuth } from "../../features/auth/model/use-auth";

export function useAuthGuard() {
  const { isAuthenticated, user } = useAuth();

  return {
    isAuthenticated,
    user,
  };
}

