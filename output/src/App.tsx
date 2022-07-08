import { Link, Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";

import styles from "./App.module.css";
import Home from "./Home";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>App.tsx</header>
      <nav class={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
      </nav>
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
