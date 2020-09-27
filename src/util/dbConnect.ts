import mongoose from "mongoose";

const connection: { isConnected: boolean } = { isConnected: false };

const dbConnect = async () => {
  if (!connection.isConnected) {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    // 0 = Disconnected, 1 = Connected, 2 = Connecting, 3 = Diconnecting.
    // Converted to boolean with !!. So 1 = true, rest = false.
    connection.isConnected = !!db.connections[0].readyState;
    // console.log(`Database connected: ${connection.isConnected}`);
  }
};

export default dbConnect;
