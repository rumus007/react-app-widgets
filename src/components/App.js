import React from "react";
import Accordion from "./accordion/Accordion";

const items = [
  {
    title: "What is React? ",
    content: "React is a frontend javascript library",
  },
  {
    title: "Why use React? ",
    content: "React is a dyanmic and easily customizable",
  },
  {
    title: "How do you use React? ",
    content: "You build different comp",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
