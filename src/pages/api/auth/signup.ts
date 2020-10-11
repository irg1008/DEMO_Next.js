import dbConnect from "util/dbConnect";
import User, { UserType } from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import codes from "util/errorCodes";
import validations from "util/validations";

const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // Wait for db to connect if needed.
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST": {
      try {
        const recievedAPISecret = req.body.API_SECRET;
        if (API_SECRET !== recievedAPISecret)
          throw new Error("Data only available within the app");

        // Get the user passed on the body.
        const user: UserType = req.body.user;

        // Check passed data is correct.
        const validEmail = await validations.email.isValid(user.email);
        if (!validEmail) throw new Error("Please provide a valid email");
        const validPassword = await validations.password.isValid(user.password);
        if (!validPassword) throw new Error("Please provide a valid password");
        const validUsername = await validations.username.isValid(user.username);
        if (!validUsername) throw new Error("Please provide a valid username");

        // Get user from database if exists.
        const dbUser: UserType = await User.findOne({ email: user.email });

        // If database exists.
        if (dbUser)
          return res.status(409).json({
            success: false,
            message: "User already exists",
            code: codes.signup.emailAlreadyTaken,
          });

        // Encrypt pass, set user not verified and add the email/password sign method.
        user.password = await bcrypt.hash(user.password, 10);
        user.verified = false;
        user.signMethods = ["Password"];
        User.create(user);

        // User created.
        return res
          .status(201)
          .json({ success: true, message: "User created successfully" });
      } catch (error) {
        // Known error.
        if (error.message)
          return res.status(400).json({ success: false, error: error.message });

        // Unknown error.
        return res.status(500).json({
          success: false,
          error: "Some error ocurred. Please try again or contact us",
        });
      } finally {
        break;
      }
    }
    default: {
      res.setHeader("Allow", ["POST"]);
      return res
        .status(405)
        .json({ success: false, message: `Method ${method} not allowed` });
    }
  }
};

export default signup;
