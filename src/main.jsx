import React from "react";
import ReactDOM from "react-dom/client"
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

import './styles.less';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <FirstApp title={123} />
  </React.StrictMode>
);