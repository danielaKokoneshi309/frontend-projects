import React from "react";
import { RouterProvider } from "react-router-dom";
import RouterConfig from "./routes";

const App: React.FC = () => {
  return <RouterProvider router={RouterConfig} />;
};

export default App;
