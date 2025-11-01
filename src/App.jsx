import { useState } from "react";
import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import { items1, items2 } from "./components/data/itemsData";

function App() {
  const [items, setItems] = useState(items1);

  return (
    <>
      <button onClick={() => setItems(items2)}>switch to items 2</button>
      <button onClick={() => setItems(items1)}>switch to items 1</button>
      <Example3 items={items}></Example3>
    </>
  );
}

export default App;
