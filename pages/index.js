import Head from "next/head";
import Welcome from "./components/Welcome";

async function getData() {
  const url = "/api/subscribers";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function addData() {
  const url = "/api/subscribers";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ HR: "test", DE: "test" }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kroatisch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Welcome />
      </main>
    </div>
  );
}
