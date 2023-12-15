import ReactDOM from "react-dom/client";
import React from 'react';

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
//ReactDOM.createRoot(entryPoint).render(<App />)

// A pointer to the element that needs to be created.
ReactDOM.createRoot(entryPoint).render(React.createElement(App));