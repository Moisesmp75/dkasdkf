import { useAppSelector } from "../../app/store";

export function useAuthGuard() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return {
    isAuthenticated,
    user,
  };
}

