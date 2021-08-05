import mongoose from "mongoose";

const connection = {};

async function connect() {
  // check if mongodb is connected
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  // if not connected connect to previous connection
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }

    // close connection
    await mongoose.disconnect();
  }

  // if no pre-existing connection, create a new connection to mongodb
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    // to ensure there is no duplication
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    // this is done to free up resources in server while in production
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      // if in development no need to disconnect so as to make development possible
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconnect };

export default db;
