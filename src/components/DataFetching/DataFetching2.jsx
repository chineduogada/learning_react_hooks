import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.error,
        post: {}
      };
    default:
      return state;
  }
};

function DataFetching2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/10")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(ex => {
        console.log(ex);
        dispatch({
          type: "FETCH_ERROR",
          error:
            ex.response && ex.response.status === 404
              ? "post not found"
              : "something went wrong."
        });
      });
  }, []);

  return (
    <div>
      {state.loading ? <Spinner /> : <h2>{state.post.title}</h2>}
      {state.error && <h1>{state.error}</h1>}
    </div>
  );
}

export default DataFetching2;
