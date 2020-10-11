import withSession from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { UserType } from "models/User";

const user = withSession(
  async (req: NextApiRequest & { session: any }, res: NextApiResponse) => {
    const { method } = req;
    const user: UserType = req.session.get("user") || null;

    switch (method) {
      case "GET":
        return res.status(200).json(user);
      default:
        res.setHeader("Allow", ["GET"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default user;
