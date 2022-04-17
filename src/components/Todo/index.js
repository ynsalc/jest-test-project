import React, { useState } from "react";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

const Index = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems([...items, { name: text }]);
    setText("");
  };

  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>

      <br />
      <br />
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default Index;
