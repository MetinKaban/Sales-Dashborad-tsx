import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import SpecificProduct from "./routes/SpecificProduct";
import Customers from "./routes/Customers";
import SpecificCustomer from "./routes/SpecificCustomer";
import Sales from "./routes/Sales";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "/products/:name",
        element: <SpecificProduct />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/customers/:name",
        element: <SpecificCustomer />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
