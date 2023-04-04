/** @format */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Loading } from "./utils/hoc";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/AllRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<Loading />}>
      <RouterProvider router={element}></RouterProvider>
    </Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
