import { NextApiRequest, NextApiResponse } from "next";
import themes from "styles/themes";

// First the api has no value for the theme.
// TODO: Change this to database with theme option by user.
var theme = null;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ theme });
      break;
    case "POST":
      const { body } = req;
      theme = body.theme;
      res
        .status(200)
        .json({ message: "Theme has changed successfully", theme });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
