import { Layout } from "antd";
import { useRoutes } from "react-router-dom";

import routes from "../routes.tsx";
import { Sidebar } from "./components";

function App() {
  const router = useRoutes(routes);

  return (
    <Layout>
      <Sidebar />
      {router}
    </Layout>
  );
}

export default App;
