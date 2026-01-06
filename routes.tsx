import { lazy } from "react";

const HomePage = lazy(() => import("./src/pages/HomePage"));
const NewsPage = lazy(() => import("./src/pages/NewsPage"));
const CryptocurrenciesPage = lazy(
  () => import("./src/pages/CryptocurrenciesPage")
);
const AboutPage = lazy(() => import("./src/pages/AboutPage"));
const ContactUsPage = lazy(() => import("./src/pages/ContactUsPage"));
// const ExchangesPage = lazy(() => import("./src/pages/ExchangesPage"));

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
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  }
];

export default routes;
