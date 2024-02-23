// import { useState } from "react";
// import HarryHotter from "./pages/HarryPotter";
// import { Header } from "antd/es/layout/layout";
// import HEader from "./pages/header";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HarryHotter from "./pages/HarryPotter";
import FuncLife from "./pages/funcLife";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HarryHotter />,
  },
  {
    path: "/profile",
    element: <FuncLife />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />

      {/* <HarryHotter /> */}
    </div>
  );
}

export default App;
