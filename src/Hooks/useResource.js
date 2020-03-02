import { useState, useEffect } from "react";
import axios from "axios";

const useResource = url => {
  const [payload, setPayload] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data: payload }) => {
        setLoading(false);
        console.log(payload);
        setPayload(payload);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
        setError(error.message);
      });
  }, [url]);

  let data = { payload, error, loading };
  const setData = newData => (data = newData);

  return [data, setData];
};

export default useResource;
