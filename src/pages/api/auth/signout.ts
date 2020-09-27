import withSession from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

const signout = withSession(
  async (req: NextApiRequest & { session: any }, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
      case "GET":
        try {
          req.session.destroy();
          res.status(200).json({ message: "Log Out Successfully", user: null });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        } finally {
          break;
        }
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }
);

export default signout;
