const BASE_URL = "http://localhost:4000";
import axios from "axios";
// import { json } from 'stream/consumers';

export const signUpUser = async (payload) => {
  const reponse = await axios.post(`${BASE_URL}/api/v1/signup-user`, payload, {
    withcredentials: true,
  });
  return reponse;
};

export const loginUser = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/login-user`,
      payload,
      {
        withcredentials: true,
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/loginAdmin-ejs`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });
    console.log(response);
    const result = await response.data.loggedInUser;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err.message);
  }
};
