import axios from "axios";

const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

const signUp = async (username: string, email: string, password: string) => {
  // Get the data retrieved from the API.
  try {
    const res = await axios.post("/api/auth/signup", {
      API_SECRET,
      user: {
        username,
        email,
        password,
      },
    });

    return res.data;
  } catch (error) {
    // If any error happens. Axios will throw it and we will return our own response for the error.
    return error.response.data;
  }
};

const signWithGoogle = async (username: string, email: string) => {
  try {
    const res = await axios.post("/api/auth/googlesign", {
      API_SECRET,
      user: {
        username,
        email,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const res = await axios.post("/api/auth/signin", {
      API_SECRET,
      user: {
        email,
        password,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const signOut = async () => {
  try {
    const res = await axios.post("/api/auth/signout", { API_SECRET });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { signUp, signIn, signOut, signWithGoogle };
