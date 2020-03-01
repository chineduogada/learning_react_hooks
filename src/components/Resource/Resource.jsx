import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";

const Resource = ({ render, url }) => {
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
        console.log(error);
        setError(error.message);
      });
  }, [url]);

  const data = { payload, error, loading };

  return render(data);
};

Resource.propTypes = {
  render: PropTypes.func.isRequired,
  url: PropTypes.string
};

export default Resource;
