import { useState } from "react";
import { useEffect } from "react";

export function useFetsh(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    async function getInfo() {
      try {
        let res1 = await fetch(url);
        if (res1.status === 404) {
          throw new Error("we hava a fkn error while fetshing data ");
        }
        let res2 = await res1.json();
        setLoading(false);
        setData(res2);
      } catch (er) {
        setErrors(true);
        setLoading(false);
        console.log(er);
      }
    }
    getInfo();

    return () => {};
  }, []);
  return { data, loading, errors };
}
