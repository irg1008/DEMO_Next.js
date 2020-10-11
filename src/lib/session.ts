import { withIronSession, Handler } from "next-iron-session";

const withSession = (handler: Handler) =>
  withIronSession(handler, {
    password: process.env.SESSION_SECRET,
    cookieName: "session-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    ttl: 86400, // User session logs out automatically after 1 day = 86400 seconds.
  });

export default withSession;
