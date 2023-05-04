import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import CheckoutPage from "./pages/CheckoutPage";

// every Route represents the entire page and the components are in it

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies/:movieID",
        element: <MoviePage />,
      },
      {
        path: "checkout/:checkoutID",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
