import dbConnect from "util/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import User, { UserType } from "models/User";
import bcrypt from "bcryptjs";
import codes from "util/errorCodes";
import validations from "util/validations";
import withSession from "lib/session";

const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

const signin = withSession(
  async (req: NextApiRequest & { session: any }, res: NextApiResponse) => {
    await dbConnect();

    const { method } = req;

    switch (method) {
      case "POST": {
        try {
          const recievedAPISecret = req.body.API_SECRET;
          if (API_SECRET !== recievedAPISecret)
            throw new Error("Data only available within the app");

          const user: UserType = req.body.user;

          const validEmail = await validations.email.isValid(user.email);
          if (!validEmail) throw new Error("Please provide a valid email");
          const validPassword = await validations.password.isValid(
            user.password
          );
          if (!validPassword)
            throw new Error("Please provide a valid password");

          const dbUser: UserType = await User.findOne({ email: user.email });

          // If no user.
          if (!dbUser) {
            return res.status(404).json({
              success: false,
              message: "No user has been found with given e-mail",
              code: codes.signin.userNotFound,
            });
          }

          // If user has not password => Check other sign methods.
          if (!dbUser.password) {
            // Signed with google.
            if (dbUser.signMethods.includes("Google"))
              return res.status(401).json({
                success: false,
                message: "Please sign with Google method",
                code: codes.signin.signedWithGoogle,
              });

            // Signed without password.
            if (dbUser.signMethods.includes("Passwordless"))
              return res.status(401).json({
                success: false,
                message: "Please sign with passwordless method",
              });
          }

          // Check if passed password checks with hashed on database.
          const correctPassword = await bcrypt.compare(
            user.password,
            dbUser.password
          );

          if (!correctPassword)
            // User not verified.
            return res.status(401).json({
              success: false,
              message: "Password incorrect",
              code: codes.signin.passwordIncorrect,
            });

          // Remove password from local user.
          const { password, ...secureUser } = dbUser;

          // If not verified.
          if (!dbUser.verified) {
            return res.status(401).json({
              success: false,
              message: "Email not verified",
              code: codes.signin.emailNotVerfied,
            });
          }

          // If all is correct. Save locally.
          req.session.set("user", secureUser);
          await req.session.save();

          return res.status(200).json({
            success: true,
            message: "User successfully logged",
            user: secureUser,
          });
        } catch (error) {
          // Known error.
          if (error.message)
            return res
              .status(400)
              .json({ success: false, error: error.message });

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
  }
);

export default signin;
