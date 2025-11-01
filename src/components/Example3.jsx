import { useState } from "react";

export default function Example3({ items }) {
  //   const [selection, setSelection] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  //   const [prevItems, setPrevItems] = useState(items);
  //   if (items !== prevItems) {
  //     setPrevItems(items);
  //     setSelection(null);

  //}

  const selection = items.find((item) => item.id === selectedId) ?? null;

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.id === selection?.id}
              onChange={() => setSelectedId(item.id)}
            />
            {item.title}
          </li>
        ))}
      </ul>
      {selection?.id && (
        <div className="">
          <h2> Selected item</h2>
          <div style={{ padding: "10px", backgroundColor: "lightcyan" }}>
            {" "}
            {selection.title}
          </div>
        </div>
      )}
    </>
  );
}
