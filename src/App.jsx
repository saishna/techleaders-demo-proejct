import React from "react";
import Information from "./components/information";
import { Profile } from "./components/information"; // Ensure this is correctly defined
import Counter from "./app/counter";
import Traffic from "./app/traffic"; // Ensure this component exists
import Search from "./app/search"; // Ensure this component exists

const App = () => {
  const person = {
    name: "Saishna",
    email: "saishna@gmail.com",
    address: {
      city: "Kathmandu",
      country: "Nepal",
    }
  };

  const handClick = () => {
    alert('Hello, world!');
  };

  const handClick2 = () => {
    alert('To those who code');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Search /> {/* Check if this component is correctly implemented */}
      <h1 className="text-2xl font-bold mb-4">{person.name}</h1>
      <h2>{person.email}</h2>
      <button onClick={handClick}>Click</button>
      <button onClick={handClick2}>Click</button>
      <Profile />
      <Information />
      <Counter />
      <Traffic />
      <Search />
    </div>
  );
};

export default App;
