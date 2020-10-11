import dbConnect from "util/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import User, { UserType } from "models/User";
import validations from "util/validations";
import withSession from "lib/session";

const API_SECRET = process.env.NEXT_PUBLIC_API_SECRETAPI_SECRET;

const googlesign = withSession(
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
          const validUsername = await validations.username.isValid(
            user.username
          );
          if (!validUsername)
            throw new Error("Please provide a valid username");

          let dbUser: UserType & {
            save: () => void;
          } = await User.findOne({ email: user.email });

          // If no user, create and retrieve again
          if (!dbUser) {
            user.verified = true;
            user.signMethods = ["Google"];
            User.create(user);
            dbUser = await User.findOne({ email: user.email });
          } else if (!dbUser.signMethods.includes("Google")) {
            // We add google sign in method if not already in.
            // This in case already signed with password and email.
            dbUser.verified = true;
            dbUser.signMethods.push("Google");
            dbUser.save();
          }

          req.session.set("user", user);
          await req.session.save();

          return res.status(200).json({
            success: true,
            message: !dbUser
              ? "User created and logged"
              : "User successfully logged",
            user,
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

export default googlesign;
