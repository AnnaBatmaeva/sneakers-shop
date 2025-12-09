import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/home/home";
import Catalog from "../pages/catalog/catalog";
import Contacts from "../pages/contacts/contacts";
import Sales from "../pages/sales/sales";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "contacts", element: <Contacts /> },
      { path: "sales", element: <Sales /> },
    ],
  },
]);

export default router