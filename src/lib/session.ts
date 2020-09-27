import { withIronSession, Handler } from "next-iron-session";

const withSession = (handler: Handler) =>
  withIronSession(handler, {
    password: process.env.SESSION_SECRET,
    cookieName: "session-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

export default withSession;
