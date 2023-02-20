import { useState } from "react";
import Greet from "./Greet";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("0");

  const handleSubmit = () => {
    const obj = {
      name: fullName,
      age: age,
    };

    console.log(obj);
    setFullName("");
    setAge("");
  };

  return (
    <div>
      <h1>My Form</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: 300,
            padding: 20,
            fontSize: "1.5rem",
            marginRight: 20,
          }}
          onChange={(e) => {
            const value = e.target.value;
            setFullName(value);
          }}
          value={fullName}
        />

        <input
          type="number"
          placeholder="Enter your age"
          style={{ width: 300, padding: 20, fontSize: "1.5rem" }}
          onChange={(e) => {
            const value = e.target.value;
            setAge(value);
          }}
          value={age}
        />

        <button onClick={handleSubmit}>Submit</button>

        <Greet name={fullName} age={age} />
      </div>
    </div>
  );
};

export default Form;
