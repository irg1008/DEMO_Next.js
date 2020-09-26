import dbConnect from "util/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import bcrypt from "bcryptjs";
import codes from "util/errorCodes";
import validations from "util/validations";

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
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

        const dbUser = await User.findOne({ email: user.email });

        if (!dbUser) {
          res.status(404).json({
            success: false,
            message: "No user has been found with given e-mail",
            code: codes.signin.userNotFound,
          });
        } else {
          // Check if passed password checks with hashed on database.
          const correctPassword = await bcrypt.compare(
            user.password,
            dbUser.password
          );

          if (correctPassword) {
            if (user.verified) {
              res.status(200).json({
                success: true,
                message: "User successfully logged",
                user: dbUser,
              });
            } else {
              res.status(401).json({
                success: false,
                message: "Email not verified",
                code: codes.signin.emailNotVerfied,
              });
            }
          } else {
            res.status(401).json({
              success: false,
              message: "Password incorrect",
              code: codes.signin.passwordIncorrect,
            });
          }
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

export default signin;
