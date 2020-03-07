import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = "count " + count;
  }, [count]);
}

export default useDocumentTitle;
