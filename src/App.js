import React, { useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Timer from "./Timer";
import Drinks from "./Drinks";

function App() {
  const targetDate = useMemo(() => new Date('2025-02-28T17:00:00+02:00'), []); // Party time
  const revealDate = useMemo(() => new Date('2025-02-28T00:00:00+02:00'), []); // Midnight RO time
  const [showDrinks, setShowDrinks] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    document.title = "Party";

    const now = new Date();
    setShowDrinks(now >= revealDate);
    setShowTimer(now < targetDate);
  }, [revealDate, targetDate]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {showTimer && <Timer targetDate={targetDate} />}
            {showDrinks && <Drinks />}
          </>
        } />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </Router>
  );
}

export default App;
