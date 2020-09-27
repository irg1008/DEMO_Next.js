import withSession from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

const user = withSession(
  async (req: NextApiRequest & { session: any }, res: NextApiResponse) => {
    const { method } = req;
    const user = req.session.get("user") || null;

    switch (method) {
      case "GET":
        try {
          res.status(200).json(user);
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

export default user;
