import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MovieDetailPage from "./pages/MovieDetailPage";
import AddToFavourites from "./pages/AddToFavourites";

const RouterConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies/:id", element: <MovieDetailPage /> },
      {path:"movies/:id/favorite", element:<AddToFavourites/>},
      {path:"movies/favorite", element:<AddToFavourites/>}
    ],
  },
  {
    path: "movie",
    element: <MovieDetailPage />,
  },
]);

export default RouterConfig;
