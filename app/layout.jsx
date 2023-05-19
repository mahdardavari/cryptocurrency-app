"use client";

import store from "./store/store.js";
import { Provider } from "react-redux";
import "./styles/index.scss";
import { Navbar } from "@/app/components";

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Navbar />
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
