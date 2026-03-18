import { useAppSelector } from "../../../app/store";

export function useAuth() {
  const { user, token, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

  return {
    user,
    token,
    isAuthenticated,
  };
}

export function useCurrentUser() {
  const { user } = useAuth();
  return user;
}

export function useUserRole() {
  const { user } = useAuth();
  return user?.role ?? null;
}

export function useIsAuthenticated() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}

