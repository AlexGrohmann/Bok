import { useState } from "react";
import { addData } from "../api-helper";

function AddItem(props) {
  const [inputValueDE, setInputValueDE] = useState("");
  const [inputValueHR, setInputValueHR] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = () => {
    console.log(inputValueDE, inputValueHR);
    if (inputValueDE !== "" && inputValueHR !== "") {
      addData(inputValueDE, inputValueHR)
        .then(() => {
          setSuccess(true);
          setInputValueDE("");
          setInputValueHR("");
        })
        .catch(() => setError(true));
    }
  };
  return (
    <div>
      <h1>
        Add item <button onClick={props.goHome}>back</button>
      </h1>
      <input
        id="de"
        placeholder="DE"
        onChange={(e) => setInputValueDE(e.target.value)}
        value={inputValueDE}
      ></input>
      <input
        id="HR"
        placeholder="HR"
        onChange={(e) => setInputValueHR(e.target.value)}
        value={inputValueHR}
      ></input>
      <button onClick={() => handleClick()}>Add</button>
      {success && <div>successfull added </div>}
      {error && <div>there was an error...</div>}
    </div>
  );
}

export default AddItem;
