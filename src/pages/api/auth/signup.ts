import dbConnect from "util/dbConnect";
import User from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import codes from "util/errorCodes";
import validations from "util/validations";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // Wait for db to connect if needed.
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST": {
      try {
        const user = req.body;

        const validEmail = await validations.email.isValid(user.email);
        if (!validEmail) throw new Error("Please provide a valid email");

        const validPassword = await validations.password.isValid(user.password);
        if (!validPassword) throw new Error("Please provide a valid password");

        const validUsername = await validations.username.isValid(user.username);
        if (!validUsername) throw new Error("Please provide a valid password");

        const dbUser = await User.findOne({ email: user.email });

        if (dbUser) {
          res.status(409).json({
            success: false,
            message: "User already exists",
            code: codes.signup.emailAlreadyTaken,
          });
        } else {
          user.password = await bcrypt.hash(user.password, 10);
          User.create(user);
          res
            .status(201)
            .json({ success: true, message: "User created successfully" });
        }

        break;
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
        break;
      }
    }
    default:
      {
        res.setHeader("Allow", ["POST"]);
        res
          .status(405)
          .json({ success: false, message: `Method ${method} not allowed` });
      }
      break;
  }
};

export default signup;
