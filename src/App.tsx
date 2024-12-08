import { Layout } from "antd";
import { useRoutes } from "react-router-dom";

import routes from "../routes.tsx";
import { Sidebar } from "./components";

function App() {
  const router = useRoutes(routes);

  return (
    <Layout className="overflow-hidden min-h-screen max-h-screen">
      <Sidebar />
      <div>{router}</div>
    </Layout>
  );
}

export default App;
