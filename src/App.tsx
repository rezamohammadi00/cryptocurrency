import { Layout } from "antd";
import { useRoutes } from "react-router-dom";

import routes from "../routes.tsx";
import { Sidebar, Topbar } from "./components";
import { Suspense } from "react";

function App() {
  const router = useRoutes(routes);

  return (
    <Layout className="overflow-hidden min-h-screen max-h-screen">
      <Topbar />
      <Layout>
        <Sidebar />
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <div className="w-full">{router}</div>
        </Suspense>
      </Layout>
    </Layout>
  );
}

export default App;
