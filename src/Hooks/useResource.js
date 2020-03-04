import { useState, useEffect } from "react";
import axios from "axios";

const useResource = url => {
  const [payload, setPayload] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data: payload }) => {
        setLoading(false);
        setPayload(payload);
        setError("");
      })
      .catch(error => {
        setLoading(false);
        setPayload([]);
        setError(error.message);
      });
  }, [url]);

  let data = { payload, error, loading };
  const setData = newData => (data = newData);

  return [data, setData];
};

export default useResource;
