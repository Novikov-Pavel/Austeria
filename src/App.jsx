import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { pages } from "./routes";

function App() {
    let router = createBrowserRouter(pages);
    return <RouterProvider router={router} />;
}

export default App;
