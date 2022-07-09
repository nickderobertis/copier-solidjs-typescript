/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import AppWrapper from "./AppWrapper";

render(() => <AppWrapper />, document.getElementById("root") as HTMLElement);
