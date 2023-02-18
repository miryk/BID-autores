import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AddAuthor from "../pages/AddAuthor";
import EditAuthor from "../pages/EditAuthor";
import Home from "../pages/Home";

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/new',
        element: <AddAuthor />
      },
      {
        path: '/edit/:_id',
        element: <EditAuthor />
      }
    ]
  }
])