import { withIronSession } from "next-iron-session";

const withSession = (handler: () => {}) =>
  withIronSession(handler, {
    password: process.env.SESSION_SECRET,
    cookieName: "session-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
