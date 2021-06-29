import { useCallback } from "react";
import useAxios from "../../hooks/useAxios";

export default function useLogin() {
  let { getResponse, error, isLoading, data } = useAxios();

  const login = useCallback(
    async (data) => {
      try {
        const {
          data: { jwt, user },
          status,
        } = getResponse({ url: "/autos", method: "GET", data });
      } catch (err) {
        console.log(err);
      }
    },
    [data, error]
  );

  return { login, error, isLoading, data };
}
