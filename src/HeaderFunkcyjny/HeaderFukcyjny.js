import "../Header.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

export const HeaderFunkcyjny = () => {
  const [input, setInput] = useState("");

  // componentDidMount
  useEffect(() => {
    console.log("component mounted");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("component upadted");
  }, [input]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <header className="header">
      <form className="header__search">
        <SearchIcon />
        <input
          placeholder="Search for..."
          value={input}
          onChange={handleChange}
        />
        <p>{input}</p>
      </form>
    </header>
  );
};
