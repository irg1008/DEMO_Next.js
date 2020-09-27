import axios from "axios";

const signUp = async (username: string, email: string, password: string) => {
  // Get the data retrieved from the API.
  try {
    const res = await axios.post("/api/auth/signup", {
      username,
      email,
      password,
      verified: false,
    });

    return res.data;
  } catch (error) {
    // If any error happens. Axios will throw it and we will return our own response for the error.
    return error.response.data;
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const res = await axios.post("/api/auth/signin", {
      email,
      password,
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const signOut = async () => {
  try {
    const res = await axios.get("/api/auth/signout");

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { signUp, signIn, signOut };
