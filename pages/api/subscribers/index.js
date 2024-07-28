import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("subscribers");
  const collection = db.collection("hrvatski");

  switch (req.method) {
    case "POST":
      try {
        const subscriber = req.body;
        const result = await collection.insertOne(subscriber);
        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "GET":
      try {
        const subscribers = await collection.find({}).toArray();
        res.status(200).json(subscribers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
