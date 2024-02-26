import React from "react";
import ReactDOM from "react-dom/client"
// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './styles.less';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <FirstApp title="Holi"/> */}
    <CounterApp value={20} />
  </React.StrictMode>
);