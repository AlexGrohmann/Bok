import Head from "next/head";
import Welcome from "./components/Welcome";
import { useState } from "react";

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

const renderContent = (step, onClick) => {
  switch (step) {
    case 1:
      return <Welcome onClick={() => onClick(2)} />;
    case 2:
      // code block
      break;
    default:
      return <Welcome onClick={() => onClick(2)} />;
  }
};

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <Head>
        <title>Kroatisch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{renderContent(step, setStep)}</main>
    </div>
  );
}
