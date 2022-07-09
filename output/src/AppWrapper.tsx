import { Router } from "solid-app-router";
import App from "./App";

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
