import type { Component } from "solid-js";

import styles from "./Home.module.css";

console.log(styles);

const Home: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Home.tsx</header>
    </div>
  );
};

export default Home;
