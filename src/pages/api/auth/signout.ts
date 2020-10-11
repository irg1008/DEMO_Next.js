import withSession from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;

const signout = withSession(
  async (req: NextApiRequest & { session: any }, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
      case "POST":
        try {
          const recievedAPISecret = req.body.API_SECRET;
          if (API_SECRET !== recievedAPISecret)
            throw new Error("Data only available within the app");

          req.session.destroy();
          return res
            .status(200)
            .json({ message: "Log Out Successfully", user: null });
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
      default:
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }
);

export default signout;
