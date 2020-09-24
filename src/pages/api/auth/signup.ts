import dbConnect from "util/dbConnect";
import User from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // Wait for db to connect if needed.
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST": {
      try {
        const user = req.body;

        if (!user.email) throw new Error("Please provide an email");

        if (!user.username) throw new Error("Please provide a username");

        if (!user.password) throw new Error("Please provide a password");

        const dbUser = await User.findOne({ email: user.email });

        if (dbUser) {
          res.status(409).json({
            success: false,
            message: "User already exists",
            code: "email-already-taken",
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
        res.status(400).json({ success: false, error });
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
