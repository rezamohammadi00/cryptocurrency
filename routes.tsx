import { lazy } from "react";

const HomePage = lazy(() => import("./src/pages/HomePage"));
const NewsPage = lazy(() => import("./src/pages/NewsPage"));
const CryptocurrenciesPage = lazy(
  () => import("./src/pages/CryptocurrenciesPage")
);
const ExchangesPage = lazy(() => import("./src/pages/ExchangesPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/cryptocurrencies",
    element: <CryptocurrenciesPage />,
  },
  {
    path: "/exchanges",
    element: <ExchangesPage />,
  },
];

export default routes;
