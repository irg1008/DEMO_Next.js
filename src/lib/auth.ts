import axios from "axios";
import bcrypt from "bcryptjs";

const signUp = async (username: string, email: string, password: string) => {
  const hashed = await bcrypt.hash(password, 10);

  const user = await axios.post("/api/auth/users", {
    username,
    email,
    password: hashed,
    verified: false,
  });

  return user;
};

export { signUp };
