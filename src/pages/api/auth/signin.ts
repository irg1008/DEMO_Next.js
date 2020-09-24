import dbConnect from "util/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import bcrypt from "bcryptjs";

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST": {
      try {
        const user = req.body;

        if (!user.email) throw new Error("Please provide an email");

        if (!user.password) throw new Error("Please provide a password");

        const dbUser = await User.findOne({ email: user.email });

        if (!dbUser) {
          res.status(404).json({
            success: false,
            message: "No user has been found with given e-mail",
            code: "user-not-found",
          });
        } else {
          // Check if passed password checks with hashed on database.
          const correctPassword = await bcrypt.compare(
            user.password,
            dbUser.password
          );

          if (correctPassword) {
            res.status(200).json({
              success: true,
              message: "User logged without errors",
              user: dbUser,
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Password incorrect",
              code: "password-incorrect",
            });
          }
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

export default signin;
