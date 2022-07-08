import { Link, Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";

import styles from "./App.module.css";
import Home from "./Home";
import { NavBar } from "./NavBar";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </div>
  );
};

export default App;
