import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";

type ConnectionStatus = {
  isConnected: boolean;
};

// export const getServerSideProps: GetServerSideProps<
//   ConnectionStatus
// > = async () => {
//   try {
//     await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// };

// export const addData = async () => {
//   const clientConnected = (await client.connect()).db("");
//   // const db = clientConnected.db("subscribers");
//   // const movies = await db.collection("hrvatski");
//   console.log(clientConnected);
// };

// Create: POST http://localhost:3000/items
// Read all: GET http://localhost:3000/items
// Read one: GET http://localhost:3000/items/:id
// Update: PUT http://localhost:3000/items/:id
// Delete: DELETE http://localhost:3000/items/:id

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
        <button onClick={() => addData()}>Click me</button>
      </main>
    </div>
  );
}
