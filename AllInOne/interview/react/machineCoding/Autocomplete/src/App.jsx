import React from "react";
import { AutoComplete } from "./components";

const App = () => {
  const defaultData = ["kohli", "rohit", "hardik", "dhoni"];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/searches?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div>
      <AutoComplete
        // defaultData={defaultData}
        placeholder={"Enter Player name"}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        custumStyles={{}}
      />
    </div>
  );
};

export default App;
