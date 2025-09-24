import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


import { Home, About, Works, Contact } from "./page";
import { action as HomeAction } from "./page/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,         // default sahifa
          element: <Home />,
          action: HomeAction,  // Home action (agar kerak bo‘lsa)
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "works",
          element: <Works />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
