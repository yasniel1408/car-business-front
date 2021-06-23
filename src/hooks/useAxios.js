import { useCallback, useState } from "react";
import axios from "axios";

export default function useAxios() {
  let token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getResponse = useCallback(
    async ({ url, method, formData = {} }) => {
      setLoading(true);
      try {
        const resAxios = await axios({
          url,
          method,
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization:
              token === !"" && token === !null && token === !undefined
                ? `Bearer ${token}`
                : "",
          },
        });
        setData(resAxios.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    },
    [setData, setError, token]
  );
  return { getResponse, error, isLoading, data };
}
