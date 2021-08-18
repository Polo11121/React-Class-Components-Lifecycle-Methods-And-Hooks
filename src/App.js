import React, { useState } from "react";
import { HeaderKlasowy } from "./HeaderKlasowy/HeaderKlasowy";
// import { HeaderFunkcyjny } from "./HeaderFunkcyjny/HeaderFukcyjny";
import "./styles.css";

export const App = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);

  return (
    <div className="App">
      {isHeaderOpen && <HeaderKlasowy />}
      {/* {isHeaderOpen && <HeaderFunkcyjny />} */}
      <button onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
        Hide Header
      </button>
    </div>
  );
};
