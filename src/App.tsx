import { Layout } from "antd";
import { useRoutes } from "react-router-dom";

import routes from "../routes.tsx";
import { Sidebar, Topbar } from "./components";

function App() {
  const router = useRoutes(routes);

  return (
    <Layout className="overflow-hidden min-h-screen max-h-screen">
      <Topbar />
      <Layout>
        <Sidebar />
        <div>{router}</div>
      </Layout>
    </Layout>
  );
}

export default App;
