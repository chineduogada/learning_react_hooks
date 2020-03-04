import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./../Spinner/Spinner";

function DataFetching() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://jsonplaceholder.typicode.com/posts/100")
      .then(({ data: post }) => {
        setLoading(false);
        setPost(post);
        setError("");
      })
      .catch(ex => {
        console.log(ex.response);

        setLoading(false);
        setPost({});

        if (ex.response && ex.response.status === 404) {
          setError("post has already been deleted " + ex.response.statusText);
        } else {
          setError("an unexpected error error occurred.");
        }
      });
  }, []);
  return (
    <div>
      {loading ? <Spinner /> : post.title}
      {error && <h5>{error}</h5>}
    </div>
  );
}

export default DataFetching;
