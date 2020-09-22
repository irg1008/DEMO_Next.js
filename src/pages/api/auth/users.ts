import dbConnect from "util/dbConnect";
import User from "models/User";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET": {
      try {
        const users = await User.find({}); // Collection of users.
        res.status(200).json({ success: true, users });
      } catch (error) {
        res.status(400).json({ succes: false, error });
      }
      break;
    }
    case "POST": {
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, user });
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res
        .status(405)
        .end({ success: false, message: `Method ${method} Not Allowed` });
      break;
  }
};

export default handler;
