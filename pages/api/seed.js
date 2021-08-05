import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  //   delete all products i Product model
  await Product.deleteMany();
  //   insert products from data
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Seeded successfully" });
});

export default handler;
