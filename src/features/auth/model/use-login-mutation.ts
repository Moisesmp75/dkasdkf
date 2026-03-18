import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth-api";
import { useAppDispatch } from "../../../app/store";
import { loginSuccess } from "../store/auth-slice";

interface LoginFormValues {
  email: string;
  password: string;
}

export function useLoginMutation() {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (values: LoginFormValues) => loginApi(values),
    onSuccess: (data) => {
      dispatch(loginSuccess({ token: data.token, user: data.user }));
    },
  });
}

