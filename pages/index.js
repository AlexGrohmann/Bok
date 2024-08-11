import Head from "next/head";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import ItemList from "./components/ItemList";
import { getData } from "./api-helper";

export default function Home() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (step === 4) {
      setLoading(true);
      getData()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [step]);

  switch (step) {
    case 1:
      return <Welcome onClick={() => setStep(2)} />;
    case 2:
      return (
        <Menu
          onClick={() => setStep(3)}
          onClickAll={() => setStep(4)}
          onClickAdd={() => setStep(5)}
        />
      );
    case 3:
    // Quiz coming soon
    case 4:
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      return <ItemList data={data} />;
    case 5:
    // return add new
    default:
      return <Welcome onClick={() => setStep(2)} />;
  }

  // return (
  //   <div className="container">
  //     <Head>
  //       <title>Kroatisch</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main>{renderContent(step, setStep)}</main>
  //   </div>
  // );
}
