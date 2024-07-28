import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("subscribers");
  const collection = db.collection("hrvatski");
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const subscriber = await collection.findOne({ _id: ObjectId(id) });
        if (!subscriber) {
          res.status(404).json({ error: "Subscriber not found" });
        } else {
          res.status(200).json(subscriber);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "PUT":
      try {
        const updatedSubscriber = req.body;
        const result = await collection.updateOne(
          { _id: ObjectId(id) },
          { $set: updatedSubscriber }
        );
        if (result.matchedCount === 0) {
          res.status(404).json({ error: "Subscriber not found" });
        } else {
          res.status(200).json({ message: "Subscriber updated successfully" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "DELETE":
      try {
        const result = await collection.deleteOne({ _id: ObjectId(id) });
        if (result.deletedCount === 0) {
          res.status(404).json({ error: "Subscriber not found" });
        } else {
          res.status(200).json({ message: "Subscriber deleted successfully" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
