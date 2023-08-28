import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const setOnLoading = (value) => {
    setLoading(value);
  };

  return { loading, setOnLoading };
};

export default useLoading;
