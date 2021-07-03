import { useCallback, useState } from "react";
import axios from "axios";

export default function useAxios() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const getResponse = useCallback(
    async ({ url, method, formData = {}, headers = {} }) => {
      setLoading(true);
      axios({
        url,
        method,
        data: formData,
        headers: headers,
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          switch (err.message) {
            case "Network Error":
              setError("Ups! parece que no hay conexión a internet");
              break;

            default:
              setError(JSON.stringify(err));
              break;
          }
          setTimeout(() => {
            setError(null);
          }, 2000);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setData]
  );

  return { getResponse, error, isLoading, data };
}
