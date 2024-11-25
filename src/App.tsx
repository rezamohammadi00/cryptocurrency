import {Layout} from "antd";
import {useRoutes} from "react-router-dom"

import routes from "../routes.tsx";
import {Sidebar} from "./components";
import useGetNews from "./hooks/useGetNews";
import {useEffect} from "react";


function App() {
    const router = useRoutes(routes)

    const {data} = useGetNews()
    useEffect(() => {
    console.log(data?.data)

    });

    return (
        <Layout>
            <Sidebar/>
            {router}
        </Layout>
    );
}

export default App;

