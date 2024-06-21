import React, { useEffect, useState, useMemo } from "react";
import { getCurrentUser } from "../Api";

function useGetCurrentUser() {
  const [currrentUserLoggedIn, setCurrentUserLoggedIn] = useState({});
  const abortController = new AbortController();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await getCurrentUser();
      setCurrentUserLoggedIn(res);
      console.log(currrentUserLoggedIn);
    }
    fetchCurrentUser();
    return () => {
      abortController.abort();
    };
  }, []);

  const user = useMemo(() => currrentUserLoggedIn, [currrentUserLoggedIn]);
  console.log(user);
  return { currrentUserLoggedIn, user };
}

export default useGetCurrentUser;
