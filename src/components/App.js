import React, { useState } from "react";
import Accordion from "./accordion/Accordion";
import Search from "./search/Search";
import Dropdown from "./dropdown/Dropdown";
import Translate from "./translate/Translate";
import Route from "./Route";
import Header from "./header/Header";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
