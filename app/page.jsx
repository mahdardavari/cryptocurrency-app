export const metadata = {
  title: "Cryptoverse | Dashboard",
  favicon: "/favicon.ico",
};

import { Dashboard } from "./components";
import "./styles/index.scss";

export default function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}
