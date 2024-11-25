import HomePage from "./src/pages/HomePage";
import NewsPage from "./src/pages/NewsPage";
import CryptocurrenciesPage from "./src/pages/CryptocurrenciesPage.tsx";
import ExchangesPage from "./src/pages/ExchangesPage.tsx";

const routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/news',
        element: <NewsPage/>
    },
    {
        path: '/cryptocurrencies',
        element: <CryptocurrenciesPage/>
    },
    {
        path: '/exchanges',
        element: <ExchangesPage/>
    },
]

export default routes


