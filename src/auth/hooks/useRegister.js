import { useCallback } from "react";
import useAxios from "../../hooks/useAxios";

export default function useRegister() {
  let { getResponse, error, isLoading, data } = useAxios();

  const register = useCallback(
    async (value) => {
      try {
        getResponse({
          url: `${process.env.REACT_APP_API_ENDPOINT}/auth/local/register`,
          method: "POST",
          formData: value,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [getResponse]
  );

  return { register, error, isLoading, data };
}
