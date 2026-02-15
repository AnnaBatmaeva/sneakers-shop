import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/home/home";
import Catalog from "../pages/catalog/catalog";
import Sales from "../pages/sales/sales";
import Account from "../pages/account/account";
import ProductPage from "../pages/productPage/productPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductPage /> },
      { path: "sales", element: <Sales /> },
      { path: "account", element: <Account /> },
    ],
  },
]);

export default router