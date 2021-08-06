import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";
import User from "../../models/user";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  // delete all users in User model
  await User.deleteMany();
  // insert users from data
  await User.insertMany(data.products);
  //   delete all products i Product model
  await Product.deleteMany();
  //   insert products from data
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Seeded successfully" });
});

export default handler;
