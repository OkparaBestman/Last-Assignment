import React, { useState } from "react";
import axios from "axios";
import { signUpUser } from "../Api/index";

function useSignupUser(){
  const [userResponse, setUserResponse] = useState({})
  const signUp = async (payload) => {
    const response = await signUpUser(payload);
    const data = await response.data
    setUserResponse(data.savedUser)
    localStorage.setItem("user", JSON.stringify(data.savedUser));
    return response;
  };
  return { signUp, userResponse }
};

export default useSignupUser;